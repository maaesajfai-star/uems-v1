# UEMS Version 1 - Installation Guide

## Overview
This is the first stable release (Version 1.0) of the Unified Enterprise Management System. It features a fully Dockerized architecture comprising:
1.  **Frontend:** React + Tailwind Dashboard.
2.  **Backend:** NestJS API with Swagger documentation.
3.  **Database:** PostgreSQL 16.
4.  **Storage:** NextCloud (Integrated).

## Prerequisites
-   Docker Desktop (Windows/Mac) or Docker Engine + Compose (Linux).
-   Node.js 20+ (Only if you want to run locally without Docker).

## Getting Started

### 1. Build and Start the Stack
Navigate to the `gemini-Version1` directory and run:

```bash
docker-compose up --build -d
```

This will spin up 4 containers: `uems_postgres`, `uems_nextcloud`, `uems_api`, and `uems_web`.

### 2. Access the Application
-   **Dashboard:** Open [http://localhost:3000](http://localhost:3000)
-   **API Documentation:** Open [http://localhost:3001/api/docs](http://localhost:3001/api/docs)
-   **NextCloud Interface:** Open [http://localhost:8080](http://localhost:8080)
    -   *Default Credentials:* `admin` / `admin_password_123`

### 3. Database Management
To inspect the database, you can exec into the postgres container or use a tool like DBeaver connecting to `localhost:5432` (User: `uems_admin`, Pass: `secure_password_123`, DB: `uems_db`).

## Folder Structure
-   `/apps/api` - Backend Logic (Modules: CRM, HRM, DMS).
-   `/apps/web` - Frontend Logic (Pages: Dashboard, CRM List, HRM Kanban).
-   `/docker` - Config files for Postgres and NextCloud.

## Troubleshooting
-   **NextCloud is slow to start:** NextCloud takes about 1-2 minutes on first launch to initialize its database. Be patient.
-   **Ports already in use:** Ensure ports 3000, 3001, 8080, and 5432 are free.
