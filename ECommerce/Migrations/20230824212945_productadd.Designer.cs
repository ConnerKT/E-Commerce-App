﻿// <auto-generated />
using ECommerce;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace ECommerce.Migrations
{
    [DbContext(typeof(DBContext))]
    [Migration("20230824212945_productadd")]
    partial class productadd
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.10")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("ECommerce.Models.Category", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Categories");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Description = "Electronic gadgets",
                            Name = "Electronics"
                        },
                        new
                        {
                            Id = 2,
                            Description = "Apparel and fashion items",
                            Name = "Clothing"
                        },
                        new
                        {
                            Id = 3,
                            Description = "Food and consumable products",
                            Name = "Groceries"
                        },
                        new
                        {
                            Id = 4,
                            Description = "Accessories and precious metals",
                            Name = "Jewelry"
                        },
                        new
                        {
                            Id = 5,
                            Description = "Household appliances",
                            Name = "Home Appliances"
                        },
                        new
                        {
                            Id = 6,
                            Description = "Musical instruments and equipment",
                            Name = "Instrumental"
                        });
                });

            modelBuilder.Entity("ECommerce.Models.Product", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("CategoryId")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal>("Price")
                        .HasColumnType("decimal(18,2)");

                    b.HasKey("Id");

                    b.HasIndex("CategoryId");

                    b.ToTable("Products");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            CategoryId = 1,
                            Name = "Smartphone",
                            Price = 599.99m
                        },
                        new
                        {
                            Id = 2,
                            CategoryId = 1,
                            Name = "Laptop",
                            Price = 999.99m
                        },
                        new
                        {
                            Id = 3,
                            CategoryId = 2,
                            Name = "T-shirt",
                            Price = 19.99m
                        });
                });

            modelBuilder.Entity("ECommerce.Models.Product", b =>
                {
                    b.HasOne("ECommerce.Models.Category", "Category")
                        .WithMany("Products")
                        .HasForeignKey("CategoryId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Category");
                });

            modelBuilder.Entity("ECommerce.Models.Category", b =>
                {
                    b.Navigation("Products");
                });
#pragma warning restore 612, 618
        }
    }
}
