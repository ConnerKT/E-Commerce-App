using System;
using ECommerce.Models;
using Microsoft.EntityFrameworkCore;
namespace ECommerce
{
	public class DBContext : DbContext
	{
		public DbSet<Category> Categories { get; set; }

		public DBContext(DbContextOptions options) : base(options)
		{ }

    }
}

