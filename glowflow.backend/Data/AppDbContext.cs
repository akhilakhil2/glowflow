using Microsoft.EntityFrameworkCore;
using System.Text.Json;
using glowflow.backend.Models;

namespace glowflow.backend.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<Product> Products { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        var options = JsonSerializerOptions.Default;

        // Configure SkinType: Serialize list to JSON string for SQLite storage
        modelBuilder.Entity<Product>().Property(p => p.SkinType)
            .HasConversion(
                v => JsonSerializer.Serialize(v, options), 
                v => JsonSerializer.Deserialize<List<string>>(v, options) ?? new List<string>()
            );

        // Configure Color: Serialize list to JSON string for SQLite storage
        modelBuilder.Entity<Product>().Property(p => p.Color)
            .HasConversion(
                v => JsonSerializer.Serialize(v, options), 
                v => JsonSerializer.Deserialize<List<string>>(v, options) ?? new List<string>()
            );

        // Configure Images: Serialize list to JSON string for SQLite storage
        modelBuilder.Entity<Product>().Property(p => p.Images)
            .HasConversion(
                v => JsonSerializer.Serialize(v, options), 
                v => JsonSerializer.Deserialize<List<string>>(v, options) ?? new List<string>()
            );
    }
}