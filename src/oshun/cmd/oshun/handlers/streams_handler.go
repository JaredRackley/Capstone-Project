package handlers

import (
	"encoding/json"
	"github.com/ZachGill/rtmp"
	"github.com/gorilla/mux"
	"net/http"
)

// StreamsHandler handles requests relating to stream info
type StreamsHandler struct {
	// This will probably end up having some neat fields in it
	// Maybe an accessor that retrieves active streams from somewhere
	// There will be some complexity in here since this handler will eventually talk to whatever handles the audio streams
	rtmpContext rtmp.ContextStore
}

func NewStreamsHandler(context rtmp.ContextStore) StreamsHandler {
	return StreamsHandler{
		rtmpContext: context,
	}
}

// ServeHTTP provides a simple response for the base /streams route
// Doesn't do anything exciting right now, might turn this into a health check of some sort
func (handler *StreamsHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK)
	w.Write([]byte("Streams! Get your streams here! Fresh out of the TCP connection!"))
}

// GetStream returns stream information for a given stream ID
func (handler *StreamsHandler) GetStream(w http.ResponseWriter, r *http.Request) {

}

// GetCategories returns all stream categories in the form of a JSON array
func (handler *StreamsHandler) GetCategories(w http.ResponseWriter, r *http.Request) {
	// json.Marshal and json.Unmarshal are used to transform JSON into Go data types, or vice versa
	b, err := json.Marshal([]string{
		"Gaming",
		"Music",
		"Podcasts",
		"Screaming",
	})

	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte("Something went wrong"))
	}

	w.WriteHeader(http.StatusOK)
	w.Write(b)
}

// GetActive returns all active streams
// Eventually will have options for filtering by category or only showing the top X streams
func (handler *StreamsHandler) GetActive(w http.ResponseWriter, r *http.Request) {
	subMap := handler.rtmpContext.GetStreams()
	viewersMap := make(map[string]int)
	for k := range subMap {
		viewersMap[k] = len(subMap[k])
	}

	b, err := json.Marshal(viewersMap)

	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte("Error getting active streams"))
	}

	w.WriteHeader(http.StatusOK)
	w.Write(b)
}

func (handler *StreamsHandler) GetUserStream(w http.ResponseWriter, r *http.Request) {
	user := mux.Vars(r)["user"]
	stream := handler.rtmpContext.GetStreams()[user]

	b, err := json.Marshal(map[string]int{
		user: len(stream),
	})

	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte("Error getting stream for user " + user))
	}

	w.WriteHeader(http.StatusOK)
	w.Write(b)
}
