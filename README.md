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
└── scripts/            # Local developer utilities (e.g., repository checks)
```

## Getting Started

1. Validate the repository structure without installing dependencies:
   ```bash
   npm test
   ```
2. (Optional) Install workspace dependencies once registry access is available:
   ```bash
   npm install
   ```
3. After dependencies are installed, workspace-specific commands such as the Next.js
   development server (`npm run dev` from `apps/web`) or the NestJS gateway (`npm run start`
   from `services/chat-service`) can be executed.

## Tooling
- **Local scripts** under `scripts/` provide lightweight validation utilities that can run without
  external registries.
- **TypeScript** is configured via `tsconfig.base.json` for consistent compiler settings.
- **Tailwind CSS** powers the web design system.
- **Terraform** directories host infrastructure-as-code placeholders.

## Next Steps
- Flesh out service implementations following `docs/architecture.md`.
- Add CI workflows (lint/test/plan) before pushing to GitHub.
- Configure containerization (Dockerfiles) and deployment manifests.
