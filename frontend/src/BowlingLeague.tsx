import { useEffect, useState } from "react";
import { bowler } from "./types/bowler";
import "./BowlingLeague.css";
// This is the file that exports the actual content of our page
// The function bellow received the bowler object from bowler.ts and displays
// various attributes from those objects in a table


function BowlersList() {
  const [bowlers, setBowlers] = useState<bowler[]>([]);

  useEffect(() => {
    // The useEffect helps the system not to run continuous requests to the backend,
    // but to wait until there is something new to retrieve (I think)
    const fetchBowelrs = async () => {
      const response = await fetch("https://localhost:5000/BowlingLeague");
      const data = await response.json();
      setBowlers(data);
    };
    fetchBowelrs();
  }, []);

  return (
    <>
      <h1>Bowling League</h1>
      <table>
        <thead>
          <tr>
            <th>Bowler Name</th>
            <th>Bowler Team Name</th>
            <th>Bowler Address</th>
            <th>Bowler City</th>
            <th>Bowler State</th>
            <th>Bowler Zip</th>
            <th>Bowler Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {/* The .map helps us to interact with all of the data received from the
          backend, not just one instance */}
          {bowlers.map((f) => (
            <tr key={f.bowlerId}>
              <td>
                {f.bowlerFirstName} {f.bowlerMiddleInit} {f.bowlerLastName}
              </td>
              {/* Because team is an attribute of bowler with its own attributes,
              I first reference team and then the attribute I actually want displayed */}
              <td>{f.team.teamName}</td>
              <td>{f.bowlerAddress}</td>
              <td>{f.bowlerCity}</td>
              <td>{f.bowlerState}</td>
              <td>{f.bowlerZip}</td>
              <td>{f.bowlerPhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

// Export this function to our app to be executed
export default BowlersList;
