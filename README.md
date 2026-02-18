================================================================
                    GLOWFLOW FULL-STACK PROJECT
================================================================

Glowflow is a high-performance, full-stack makeup storefront. 
The project demonstrates a professional architecture using an 
Angular frontend and a containerized .NET 10 backend.

----------------------------------------------------------------
1. LIVE DEPLOYMENT LINKS
----------------------------------------------------------------
https://glowflow-one.vercel.app/
----------------------------------------------------------------
2. TECH STACK
----------------------------------------------------------------
Frontend:  Angular (SPA architecture, dynamic routing)
Backend:   .NET 10 (Minimal APIs, high-performance processing)
Database:  SQLite (Relational storage with JSON value conversion)
Container: Docker (Multi-stage build for production consistency)
Security:  DotNetEnv (Environment variable management)

----------------------------------------------------------------
3. PROJECT OVERVIEW
----------------------------------------------------------------

FRONTEND (Angular):
- Dynamic Catalog: Fetches products based on category routes 
  (e.g., face-primer, lipstick).
- Responsive UI: Optimized for mobile and desktop devices.
- API Integration: Service layer designed for cross-origin 
  communication with the .NET backend.

BACKEND (.NET 10):
- Minimal APIs: Lightweight endpoint definitions for speed.
- Entity Framework Core: Managed database access via ORM.
- Database Seeding: Automatic population from makeup.json 
  during application startup.
- Clean Architecture: Separated concerns across Models, 
  Data, and Extensions folders.

----------------------------------------------------------------
4. LOCAL SETUP
----------------------------------------------------------------

BACKEND:
1. Navigate to the backend folder.
2. Create a .env file:
   FRONTEND_URL=http://localhost:4200
3. Run command:
   dotnet run

FRONTEND:
1. Navigate to the frontend folder.
2. Run command:
   npm install
3. Run command:
   ng serve

----------------------------------------------------------------
5. DOCKER COMMANDS
----------------------------------------------------------------
Build image:
docker build -t glowflow-backend .

Run container locally:
docker run -p 10000:10000 glowflow-backend

----------------------------------------------------------------
6. ENVIRONMENT VARIABLES
----------------------------------------------------------------
FRONTEND_URL: 
- Defines the permitted origin for CORS security.

ASPNETCORE_ENVIRONMENT: 
- Sets the mode (Development or Production).
================================================================
