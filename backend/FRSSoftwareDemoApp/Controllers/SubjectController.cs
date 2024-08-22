using FRSSoftwareDemoApp.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FRSSoftwareDemoApp.Controllers
{
    [ApiController]
    [Route("api/subjects")]
    public class SubjectController : Controller
    {
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
    }
}
