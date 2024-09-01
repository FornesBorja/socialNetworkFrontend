import "./App.css";
import { Body } from "./components/Body/Body";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <div id="container">
      <header>
        <Header />
      </header>
      <main>
        <Body />
      </main>
    </div>
  );
}

export default App;
