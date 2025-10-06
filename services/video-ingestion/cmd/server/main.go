package main

import (
    "context"
    "log"
    "net/http"
    "os"
    "os/signal"
    "syscall"
    "time"

    "github.com/aurorastream/video-ingestion/internal/ingest"
)

func main() {
    logger := log.New(os.Stdout, "video-ingestion ", log.LstdFlags|log.LUTC)
    mux := http.NewServeMux()
    mux.Handle("/api/v1/", http.StripPrefix("/api/v1", ingest.NewHandler(logger)))

    srv := &http.Server{
        Addr:    ":8080",
        Handler: mux,
    }

    go func() {
        logger.Printf("listening on %s", srv.Addr)
        if err := srv.ListenAndServe(); err != nil && err != http.ErrServerClosed {
            logger.Fatalf("http server error: %v", err)
        }
    }()

    stop := make(chan os.Signal, 1)
    signal.Notify(stop, syscall.SIGINT, syscall.SIGTERM)

    <-stop
    logger.Println("shutdown signal received")

    ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
    defer cancel()

    if err := srv.Shutdown(ctx); err != nil {
        logger.Printf("graceful shutdown failed: %v", err)
    }
}
