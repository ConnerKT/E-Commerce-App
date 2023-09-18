using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ECommerce.Models
{
	public class Product
	{
        [Key]
        public int Id { get; set; }

        public string Name { get; set; }
        
        public decimal Price { get; set; }

          [ForeignKey("CategoryId")]

        public int CategoryId {get; set;}


        public Product()
        {
            // Empty constructor for parameterless instantiation
        }
        public Product(string name, decimal price, int categoryId)
        {
            Name = name;
            Price = price;
            CategoryId = categoryId;
        }
    }
}

