import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Example1Page from "./pages/Example1Page";
import Example2Page from "./pages/Example2Page";
import CharactersPage from "./pages/CharactersPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>HOME</h1>} />
        <Route path="/example-1" element={<Example1Page />} />
        <Route path="/example-2" element={<Example2Page />} />
        <Route path="/characters" element={<CharactersPage />} />
      </Routes>
    </>
  );
}

export default App;
