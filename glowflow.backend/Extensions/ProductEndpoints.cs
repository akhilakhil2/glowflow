using Microsoft.EntityFrameworkCore;
using glowflow.backend.Data;
using glowflow.backend.Models;

namespace glowflow.backend.Extensions;

public static class ProductEndpoints
{
    public static void MapProductRoutes(this IEndpointRouteBuilder app)
    {
        // Group all routes under the /makeup prefix
        var group = app.MapGroup("/makeup");

        // GET /makeup/{category} - Retrieve list of products by category
        group.MapGet("/{category}", async (string category, AppDbContext context) =>
        {
            var products = await context.Products
                .Where(p => p.Category == category)
                .ToListAsync();

            return products.Any() ? Results.Ok(products) : Results.NotFound();
        });

        // GET /makeup/{category}/{id} - Retrieve specific product by unique identifier
        group.MapGet("/{category}/{id}", async (string category, string id, AppDbContext context) =>
        {
            var product = await context.Products.FirstOrDefaultAsync(p => p.Id == id);
            
            return product is not null 
                ? Results.Ok(product) 
                : Results.NotFound(new { message = $"Product {id} not found." });
        });
    }
}