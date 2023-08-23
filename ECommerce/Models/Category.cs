using System;
using System.ComponentModel.DataAnnotations;

namespace ECommerce.Models
{
	public class Category
	{
		[Key]
		public int Id { get; set; }

		[Required]
		public string Name { get; set; }

		public string Description { get; set; }

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

