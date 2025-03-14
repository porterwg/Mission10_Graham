using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Mission10_Graham.Data;


namespace Mission10_Graham.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BowlingLeagueController : ControllerBase
    {
        private BowlingLeagueContext _context;

        public BowlingLeagueController(BowlingLeagueContext temp)
        {
            _context = temp;
        }
        [HttpGet(Name = "GetBowlers")]
        public IEnumerable<Bowler> Get()
        {
            var bowlers = _context.Bowlers
                .Include(b => b.Team)
                .Where(b => (b.Team.TeamName == "Marlins" || b.Team.TeamName == "Sharks"))
                .ToList();

            return (bowlers);
        }
    }
}
