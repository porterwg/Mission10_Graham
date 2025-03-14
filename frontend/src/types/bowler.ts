// We are receiving data from the backend in the shape of a bowler. Even though I won't use
// all the attributes of a bowler, I still need to define them so the frontend can receive
// them appropriately

export type bowler = {
  bowlerId: number;
  bowlerLastName: string;
  bowlerFirstName: string;
  bowlerMiddleInit: string;
  bowlerAddress: string;
  bowlerCity: string;
  bowlerState: string;
  bowlerZip: string;
  bowlerPhoneNumber: string;
  teamId: number;
  // Team is a special attribute in that it has its own attributes I have to define
  team: {
    teamId: number;
    teamName: string;
    captainId: number;
  };
};
