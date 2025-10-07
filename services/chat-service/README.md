# Chat Service

NestJS service delivering WebSocket-based chat experiences for AuroraStream videos.

## Getting Started

```bash
npm install
npm run start:dev --workspace chat-service
```

By default the gateway listens on `ws://localhost:3001` and echoes chat messages to all connected clients.

## Next Steps
- Persist chat history to Cassandra with moderation flags
- Integrate authentication via JWT guards and presence tracking
- Implement scalability with Redis pub/sub or Kafka bridges
