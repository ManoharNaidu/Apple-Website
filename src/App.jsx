import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Hightlights from "./components/Hightlights";
import Model from "./components/Model";

function App() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Hightlights />
      <Model />
    </main>
  );
}

export default App;
