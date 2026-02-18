
namespace glowflow.backend.Models;

public class Product 
{
    public string Id { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public string Brand { get; set; } = string.Empty;
    public string Category { get; set; } = string.Empty;
    public decimal Price { get; set; }
    public double Rating { get; set; }
    public int ReviewCount { get; set; }
    public List<string> SkinType { get; set; } = new();
    public string Formulation { get; set; } = string.Empty;
    public List<string> Color { get; set; } = new();
    public string CountryOfOrigin { get; set; } = string.Empty;
    public List<string> Images { get; set; } = new();
    public string? Coverage { get; set; } 
}


public class MakeupData : Dictionary<string, Dictionary<string, Product>> { }