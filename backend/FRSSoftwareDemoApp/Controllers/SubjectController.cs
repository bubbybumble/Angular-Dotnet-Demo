using FRSSoftwareDemoApp.Data;
using FRSSoftwareDemoApp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;

using System.Text.Json;
using System.Text.Json.Serialization;

namespace FRSSoftwareDemoApp.Controllers
{
    [ApiController]
    [Route("api/subjects")]
    public class SubjectController : Controller
    {
        private readonly string _format = "yyyy-MM-dd";
        private readonly FRSSoftwareDemoAppDbContext dbContext;
        public SubjectController(FRSSoftwareDemoAppDbContext context)
        {
            this.dbContext = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetSubjects()
        {
            var subjects = await dbContext.Subjects.ToListAsync();
            return Ok(subjects);
        }

        [HttpPost]
        public IActionResult CreateSubject(Subject subject)
        {
            Debug.WriteLine("adding person");
            dbContext.Subjects.Add(subject);
            dbContext.SaveChanges();
            return Ok();
        }
    }

    
}
