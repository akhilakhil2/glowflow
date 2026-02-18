using Microsoft.EntityFrameworkCore;
using System.Text.Json;
using glowflow.backend.Models;

namespace glowflow.backend.Data;

public static class DbInitializer
{
    public static async Task SeedAsync(AppDbContext context)
    {
        // Skip seeding if database already contains records
        if (await context.Products.AnyAsync()) return;

        const string filePath = "makeup.json";
        if (!File.Exists(filePath)) return;

        // Load and parse JSON data from file system
        string jsonText = await File.ReadAllTextAsync(filePath);
        var options = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };
        var data = JsonSerializer.Deserialize<MakeupData>(jsonText, options);

        if (data != null)
        {
            // Iterate through nested JSON structure to map products and categories
            foreach (var categoryEntry in data)
            {
                string categoryName = categoryEntry.Key;

                foreach (var productEntry in categoryEntry.Value)
                {
                    var product = productEntry.Value;
                    product.Category = categoryName; 
                    context.Products.Add(product);
                }
            }
            
            // Persist changes to SQLite database
            await context.SaveChangesAsync();
        }
    }
}