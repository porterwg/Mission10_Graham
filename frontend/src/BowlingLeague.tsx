import { useEffect, useState } from "react";
import { bowler } from "./types/bowler";
import "./BowlingLeague.css";

function BowlersList() {
  const [bowlers, setBowlers] = useState<bowler[]>([]);

  useEffect(() => {
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
          {bowlers.map((f) => (
            <tr key={f.bowlerId}>
              <td>
                {f.bowlerFirstName} {f.bowlerMiddleInit} {f.bowlerLastName}
              </td>
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

export default BowlersList;
