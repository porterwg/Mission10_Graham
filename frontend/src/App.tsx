import BowlersList from "./BowlingLeague";
import "./App.css";
// This file just returns our header explaining the page, and also runs the BowlingLeague.tsx
// functions to display our data on the page


function Header() {
  return (
    <>
      <header>
        This is a fun page to display information about the players on the
        Marlins and Sharks bowling teams!
      </header>
    </>
  );
}

function App() {
  return (
    <>
      <Header />
      <BowlersList />
    </>
  );
}

export default App;
