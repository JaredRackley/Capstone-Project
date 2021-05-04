package main

import (
	"github.com/ZachGill/rtmp"
	"github.com/gorilla/mux"
	"github.com/shanep-capstone/cs481-s21-team4/cmd/oshun/handlers"
	"go.uber.org/zap"
	"net/http"
	"sync"
)

func main() {
	var (
		streamsHandler     handlers.StreamsHandler
		healthcheckHandler = handlers.HealthCheckHandler{}
		waitgroup          sync.WaitGroup
		logger             *zap.Logger
		context            = rtmp.NewInMemoryContext()
	)

	streamsHandler = handlers.NewStreamsHandler(context)

	// The gorilla mux library adds some utilities for routing HTTP requests.
	// This is easily possible with the Go standard libraries, but gorilla mux makes certain things more convenient
	r := mux.NewRouter()

	// Health Check
	r.HandleFunc("/healthcheck", healthcheckHandler.ServeHTTP)

	// Streams
	r.HandleFunc("/streams", streamsHandler.ServeHTTP)
	r.HandleFunc("/streams/stream/{id}", streamsHandler.GetStream).Methods(http.MethodGet)
	r.HandleFunc("/streams/categories", streamsHandler.GetCategories).Methods(http.MethodGet)
	r.HandleFunc("/streams/active", streamsHandler.GetActive).Methods(http.MethodGet)
	r.HandleFunc("/streams/active/{user}", streamsHandler.GetUserStream).Methods(http.MethodGet)

	// Users
	// We might want to make some endpoints for retrieving what users another user is following, among other things

	server := &http.Server{
		Handler: r,
		Addr:    ":42069",
		// TODO: These would be good to implement later
		// WriteTimeout: 15 * time.Second,
		// ReadTimeout: 15 * time.Second,
	}

	logger, _ = zap.NewDevelopment()
	defer logger.Sync()

	audioServer := &rtmp.Server{
		Logger:      logger,
		Broadcaster: rtmp.NewBroadcaster(context),
	}

	waitgroup.Add(1)
	go func() {
		logger.Fatal(audioServer.Listen().Error())
	}()

	// simple server startup, we'll probably want to add more to this in the future, things like logging and whatnot]
	waitgroup.Add(1)
	go func() {
		logger.Fatal(server.ListenAndServe().Error())
	}()

	waitgroup.Wait()
}
