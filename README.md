# AuroraStream Monorepo

AuroraStream is an HD video platform delivering streaming, uploading, downloading, and real-time chat experiences. This
repository now includes implementation scaffolding for the primary platform surfaces alongside the existing architecture
documentation.

## Monorepo Structure

```
├── apps/
│   ├── web/            # Next.js 13 experience with Tailwind CSS
│   └── mobile-app/     # Expo-driven React Native companion
├── services/
│   ├── video-ingestion # Go microservice handling uploads
│   └── chat-service    # NestJS WebSocket gateway
├── packages/
│   └── contracts/      # Shared TypeScript contracts
├── infrastructure/     # Terraform and deployment guidance
├── docs/               # Architecture and roadmap references
└── turbo.json          # Turborepo pipeline configuration
```

## Getting Started

1. Install dependencies for all workspaces:
   ```bash
   npm install
   ```
2. Launch the web experience:
   ```bash
   npm run dev:web
   ```
3. Start backend services as needed:
   ```bash
   npm run dev:chat
   go run ./services/video-ingestion/cmd/server
   ```

## Tooling
- **Turborepo** orchestrates builds, linting, and tests across workspaces.
- **TypeScript** is configured via `tsconfig.base.json` for consistent compiler settings.
- **Tailwind CSS** powers the web design system.
- **Terraform** directories host infrastructure-as-code placeholders.

## Next Steps
- Flesh out service implementations following `docs/architecture.md`.
- Add CI workflows (lint/test/plan) before pushing to GitHub.
- Configure containerization (Dockerfiles) and deployment manifests.
