// The data files were made using scaffolding, so there isn't much to comment there
// Our only action here directs our json to port 5000 plus "/BowlingLeague"
// We use linq to send bowlers & their team information to that port, but only those on
// the marlins or sharks teams.

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
        // Creation of the _context variable, which sort of acts like the instance of the
        // database for the duration of the program
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
