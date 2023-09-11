using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using ECommerce;
using ECommerce.Models;
using System.Collections;

namespace ECommerce.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class CategoriesController : ControllerBase
    {
        private readonly DBContext _context;

        public CategoriesController(DBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Category> Get()
        {
            var categories = _context.Categories.ToList();
            return categories;
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] Models.Category newCategory)
        {
            if (ModelState.IsValid)
            {
                _context.Categories.Add(newCategory);
                await _context.SaveChangesAsync();
                return CreatedAtAction("Get", new { id = newCategory.Id }, newCategory);
            }
            return BadRequest(ModelState);
        }

        [HttpPut]
        public async Task<ActionResult> Put([FromBody] Models.Category updatedCategory)
        {
            var existingCategory = _context.Categories.Find(updatedCategory.Id);
            if (updatedCategory.Name != null)
            {
                existingCategory.Name = updatedCategory.Name;
            }
            if (updatedCategory != null)
            {
                existingCategory.Description = updatedCategory.Description;
            }
            _context.SaveChanges();
            return Ok();
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {

            var existingCategory = _context.Categories.Find(id);
            if (existingCategory == null)
            {
                return NotFound();
            }
                _context.Categories.Remove(existingCategory);
                _context.SaveChanges();
                return Ok();
            
        }



    }
}