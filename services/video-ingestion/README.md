# Video Ingestion Service

Golang microservice responsible for handling uploads, validation, and dispatching encoding jobs for AuroraStream.

## Getting Started

```bash
cd services/video-ingestion
export GOPROXY=https://proxy.golang.org,direct
export GOSUMDB=sum.golang.org
go mod tidy
GO111MODULE=on go run ./cmd/server
```

The service listens on `http://localhost:8080` and exposes placeholder routes:
- `GET /api/v1/health`
- `POST /api/v1/uploads`

## Next Steps
- Implement resumable upload endpoints using the Tus protocol
- Publish encoding jobs to Kafka and persist metadata to PostgreSQL
- Add integration tests and structured observability instrumentation
