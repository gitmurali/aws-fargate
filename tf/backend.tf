terraform {
  backend "s3" {
    bucket  = "your-bucket-name"
    region  = "us-east-1"
    key     = "vpc-new/terraform.tfstate"
    encrypt = true
  }
  required_version = ">=0.13.0"
  required_providers {
    aws = {
      version = ">= 2.7.0"
      source  = "hashicorp/aws"
    }
  }
}
