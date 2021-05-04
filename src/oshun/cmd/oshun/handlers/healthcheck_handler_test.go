package handlers_test

import (
	"bytes"
	"github.com/shanep-capstone/cs481-s21-team4/cmd/oshun/handlers"
	"github.com/stretchr/testify/assert"
	"net/http"
	"net/http/httptest"
	"testing"
)

func TestHealthCheckHandler_ServeHTTP(t *testing.T) {
	t.Run("200 Response on GET", func(t *testing.T) {
		var (
			err         error
			req         *http.Request
			healthcheck = handlers.HealthCheckHandler{}
		)

		if req, err = http.NewRequest("GET", "http://localhost/healthcheck", bytes.NewBuffer([]byte{})); err != nil {
			t.Fatalf("Error creating HTTP request: %s", err.Error())
		}

		rr := httptest.NewRecorder()

		healthcheck.ServeHTTP(rr, req)
		assert.Equal(t, http.StatusOK, rr.Code)
	})
}
