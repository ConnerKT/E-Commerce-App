using System.Collections;
using ECommerce.Models;
using Microsoft.AspNetCore.Mvc;

namespace ECommerce.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductsController: ControllerBase
    {
        private DBContext _context {get; set;}
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
        [HttpGet]
        public async Task<IEnumerable<Product>> GetProducts(int categoryId)
        {
            var productsInCategory = _context.Products.Where(product => product.CategoryId == categoryId).ToList();
            return productsInCategory;
        }
        [HttpPost]
         public async Task<ActionResult> CreateProduct([FromBody] Product product)
        {
            _context.Products.Add(product);
            _context.SaveChanges();
            return Ok(product);
        }
    }
}