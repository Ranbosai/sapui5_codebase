terraform {
  required_version = ">= 1.5.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = "~> 2.23"
    }
  }

  backend "s3" {
    bucket = "aurorastream-terraform-state"
    key    = "environments/dev/terraform.tfstate"
    region = "us-east-1"
  }
}

provider "aws" {
  region = var.aws_region
}

module "network" {
  source = "./modules/network"

  name       = var.environment
  cidr_block = var.vpc_cidr
}

module "eks" {
  source = "./modules/eks"

  cluster_name = "aurorastream-${var.environment}"
  vpc_id       = module.network.vpc_id
  subnet_ids   = module.network.private_subnet_ids
}
