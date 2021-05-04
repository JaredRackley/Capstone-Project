package handlers

import "net/http"

// HealthCheckHandler serves up information about the health of the server
type HealthCheckHandler struct {
	// Might need some accessors similar to what other handlers use, depending on what info we want to show
}

// ServeHTTP returns vital health information
func (handler *HealthCheckHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK)
	w.Write([]byte("Lookin good"))
}
