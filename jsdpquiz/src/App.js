import "./App.css";
import Quiz from "./pages/Quiz.js";
import HomePage from "./pages/Home.js";
import withSplashScreen from "./components/withSplashScreen";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default withSplashScreen(App);
