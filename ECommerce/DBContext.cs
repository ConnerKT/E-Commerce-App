using System;
using ECommerce.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.Extensions.Options;
using Duende.IdentityServer.EntityFramework.Options;

namespace ECommerce
{
    public class DBContext : ApiAuthorizationDbContext<IdentityUser>
    {
        public DbSet<Category> Categories { get; set; }
        public DbSet<Product> Products { get; set; }

        public DBContext(DbContextOptions options, IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            // Seed mock data
            modelBuilder.Entity<Category>().HasData(
                new Category { Id = 1, Name = "Electronics", Description = "Electronic gadgets" },
                new Category { Id = 2, Name = "Clothing", Description = "Apparel and fashion items" },
                new Category { Id = 3, Name = "Groceries", Description = "Food and consumable products" },
                new Category { Id = 4, Name = "Jewelry", Description = "Accessories and precious metals" },
                new Category { Id = 5, Name = "Home Appliances", Description = "Household appliances" },
                new Category { Id = 6, Name = "Instrumental", Description = "Musical instruments and equipment" }
            );

            modelBuilder.Entity<Product>().HasData(
                new Product { Id = 1, Name = "Smartphone", Price = 599.99M, CategoryId = 1 },
                new Product { Id = 2, Name = "Laptop", Price = 999.99M, CategoryId = 1 },
                new Product { Id = 3, Name = "T-shirt", Price = 19.99M, CategoryId = 2 }
            );
        }
    }
}

