using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Mission10_Graham.Data;

public partial class Team
{
    public int TeamId { get; set; }

    public string TeamName { get; set; } = null!;

    public int? CaptainId { get; set; }
    // JsonIgnore helps the program avoid an infinite loop while pulling data from the databse
    // In the future I'd remove the ICollection stuff and define the PK/FK relationships
    // more firmly, but Professor Hilton said this is fine

    [JsonIgnore]
    public virtual ICollection<Bowler> Bowlers { get; set; } = new List<Bowler>();

    public virtual ICollection<TourneyMatch> TourneyMatchEvenLaneTeams { get; set; } = new List<TourneyMatch>();

    public virtual ICollection<TourneyMatch> TourneyMatchOddLaneTeams { get; set; } = new List<TourneyMatch>();
}
