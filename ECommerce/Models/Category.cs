using System;
using System.Collections.Generic; // Don't forget to add this import
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ECommerce.Models
{
    public class Category
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        public string Description { get; set; }

        public List<Product>? Products { get; set; }

        public Category()
        {
            // Empty constructor for parameterless instantiation
        }

        public Category(string name, string description)
        {
            Name = name;
            Description = description;
        }
    }
}


