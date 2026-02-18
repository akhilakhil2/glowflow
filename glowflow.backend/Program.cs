using Microsoft.EntityFrameworkCore;
using glowflow.backend.Data;
using glowflow.backend.Extensions; 

// Load environment variables from .env file
DotNetEnv.Env.Load();

// Retrieve frontend URL from environment or use local fallback
var frontendUrl = Environment.GetEnvironmentVariable("FRONTEND_URL") 
                  ?? "http://localhost:4200";

var builder = WebApplication.CreateBuilder(args);

// Configure SQLite database context
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite("Data Source=glowflow.db"));

// Configure CORS policy to allow requests from specified frontend origin
builder.Services.AddCors(options => {
    options.AddDefaultPolicy(policy => {
        policy.WithOrigins(frontendUrl) 
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

// Configure middleware for production environment
if (!app.Environment.IsDevelopment()) app.UseHttpsRedirection();

app.UseCors();

// Register API endpoints
app.MapGet("/", () => "Welcome to the Glowflow API!");
app.MapProductRoutes();

// Initialize and seed database during application startup
using (var scope = app.Services.CreateScope())
{
    var context = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    await DbInitializer.SeedAsync(context);
}

app.Run();