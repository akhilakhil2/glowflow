# Build Stage using .NET 10 SDK
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /source

# Restore project dependencies
COPY *.csproj .
RUN dotnet restore

# Compile and publish application in release mode
COPY . .
RUN dotnet publish -c release -o /app --no-restore

# Runtime Stage using ASP.NET 10 environment
FROM mcr.microsoft.com/dotnet/aspnet:10.0
WORKDIR /app

# Transfer published artifacts from build stage
COPY --from=build /app ./

# Include SQLite database file in runtime environment
COPY glowflow.db .



ENTRYPOINT ["dotnet", "glowflow.backend.dll"]