import BowlersList from "./BowlingLeague";
import "./App.css";

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
