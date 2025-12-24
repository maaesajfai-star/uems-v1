# CTO & DevOps Report: Architecture & Infrastructure

## Philosophy
For **UEMS Version 1**, we are adopting a **Monorepo** strategy to keep frontend and backend synchronized. We will use **Docker Compose** for orchestration, ensuring that the "Cloud Agnostic" promise is kept—if it runs on your laptop, it runs on AWS/DigitalOcean/On-Prem.

## Technology Stack
-   **Database:** PostgreSQL 16 (Alpine) - Robust, relational data storage.
-   **Backend:** NestJS (Node.js 20) - Modular, type-safe architecture perfect for defining strict boundaries between CRM, HRM, and DMS.
-   **Frontend:** React (Vite) + TailwindCSS - High-performance UI.
-   **File Storage:** NextCloud (Official Docker Image) - Integrated via WebDAV.
-   **ORM:** Prisma - Type-safe database access.

## Architecture Diagram (Docker)
[Web Container (3000)] <--> [API Container (3001)] <--> [Postgres (5432)]
                                      ^
                                      |
                                  (WebDAV)
                                      |
                                      v
                             [NextCloud Container (8080)] <--> [Postgres]
