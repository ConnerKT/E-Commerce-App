using System.Collections;
using ECommerce.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis;

namespace ECommerce.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductsController : ControllerBase
    {
        private DBContext _context { get; set; }
        public ProductsController(DBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IEnumerable<Product>> GetProducts()
        {
            var products = _context.Products.ToList();
            return products;
        }
        [HttpGet("{categoryId}")]
        public async Task<IEnumerable<Product>> GetProducts(int categoryId)
        {
            var productsInCategory = _context.Products.Where(product => product.CategoryId == categoryId).ToList();
            return productsInCategory;
        }
        [HttpPost]
        public async Task<ActionResult> CreateProduct([FromBody] Product product)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // Ensure that the category with the given categoryId exists
            var category = _context.Categories.FirstOrDefault(c => c.Id == product.CategoryId);
            if (category == null)
            {
                return NotFound("Category not found");
            }

            // Create a new product and associate it with the category
            var newProduct = new Product
            {
                Name = product.Name,
                Price = product.Price,
                CategoryId = product.CategoryId
            };

            // Add the new product to the database
            _context.Products.Add(newProduct);
            _context.SaveChanges();

            return Ok(newProduct);
        }
        [HttpDelete("{productId}")]
        public async Task<ActionResult> DeleteProduct(int productId)
        {
            Console.WriteLine("Received productId: " + productId);  // Log the productId
            var existingProduct = _context.Products.Find(productId);
            if (existingProduct == null)
            {
                return NotFound(new { message = "Product not found", productId });
            }

            _context.Products.Remove(existingProduct);
            _context.SaveChanges();
            return Ok("Product deleted");
        }
        [HttpPut]
        public async Task<ActionResult> EditProduct([FromBody] Product product)
        {
            _context.Products.Update(product);
            _context.SaveChanges();
            
            return Ok("Product Updated");
        }

    }
}

