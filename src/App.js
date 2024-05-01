import "./App.css";
import Quiz from "./pages/Quiz.js";
import HomePage from "./pages/Home.js";
import Leaderboard from "./pages/Leaderboard";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/quiz/:name" element={<Quiz />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </div>
  );
}

export default App;
