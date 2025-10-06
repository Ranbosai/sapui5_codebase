# Infrastructure

Infrastructure-as-code definitions for AuroraStream environments. Terraform modules provision core networking, Kubernetes
clusters, and supporting services as described in the architecture blueprint.

## Structure
- `terraform/main.tf` – Entry point referencing reusable modules for network and EKS clusters
- `terraform/modules/` – Placeholder for composable modules (network, eks, database)

## Getting Started

```bash
cd infrastructure/terraform
terraform init
terraform plan
```

## Next Steps
- Implement Terraform modules for networking, EKS, databases, and observability stack
- Add GitHub Actions workflow for pull-request validation and automated plan outputs
- Integrate with ArgoCD manifests for GitOps-driven Kubernetes deployments
