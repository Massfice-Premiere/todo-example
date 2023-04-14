# TODO EXAMPLE

## Intention
This project is for demonstration purpose.

**It is deployable using:**
* [Terraform Repository](https://github.com/Massfice-Premiere/terraform)
* [ArgoCD Repository](https://github.com/Massfice-Premiere/argocd)

**It presents following traits:**
* Deployment using:
    * Kubernetes Deployment
    * Kubernetes Service
    * Kubernetes Ingress
* Secret management using:
    * [Sealed Secrets](https://github.com/bitnami-labs/sealed-secrets)
    * [Reloader](https://github.com/stakater/Reloader)
* Database connection using:
    * Kubernetes Secret
    * Kustomize Config Map


*<font size="1">See repositories above for configuration details.</font>*

## About application
This is **NodeJS** application, created using:
* [Express](https://expressjs.com)
* [Mongoose](https://mongoosejs.com)

**It allows to:**
* Create TODO
* Read TODO/s
* Update TODO
* Delete TODO

**After deployment** navigate to `<sub>.<domain>/docs` to see [Swagger UI](https://www.npmjs.com/package/swagger-ui-express).

