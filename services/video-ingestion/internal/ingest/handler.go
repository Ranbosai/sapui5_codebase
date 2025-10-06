package ingest

import (
    "encoding/json"
    "log"
    "net/http"
)

type Handler struct {
    logger *log.Logger
}

func NewHandler(logger *log.Logger) http.Handler {
    h := &Handler{logger: logger}
    mux := http.NewServeMux()
    mux.HandleFunc("/health", h.health)
    mux.HandleFunc("/uploads", h.upload)
    return mux
}

func (h *Handler) health(w http.ResponseWriter, _ *http.Request) {
    h.respondJSON(w, http.StatusOK, map[string]string{"status": "ok"})
}

func (h *Handler) upload(w http.ResponseWriter, r *http.Request) {
    if r.Method != http.MethodPost {
        w.WriteHeader(http.StatusMethodNotAllowed)
        return
    }

    h.logger.Println("received upload placeholder request")
    h.respondJSON(w, http.StatusAccepted, map[string]string{
        "message": "upload accepted",
        "jobId":   "demo",
    })
}

func (h *Handler) respondJSON(w http.ResponseWriter, status int, payload any) {
    w.Header().Set("Content-Type", "application/json")
    w.WriteHeader(status)
    if err := json.NewEncoder(w).Encode(payload); err != nil {
        h.logger.Printf("failed writing response: %v", err)
    }
}
