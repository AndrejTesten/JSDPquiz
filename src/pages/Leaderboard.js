import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND_API_URL)
      .then((res) => res.json())
      .then((data) => setLeaderboard(data))
      .catch((error) => console.error("Error fetching leaderboard:", error));
  }, []);

  return (
    <div className="leaderboard">
      <div className="rezultat">
        <h2 className="rezultatNaslov">Tabela</h2>
        <ol className="rezultatLista">
          {leaderboard.map((player, index) => (
            <li className="rezultatIgrac" key={index}>
              {player.playerName} - {player.playerScore}
            </li>
          ))}
        </ol>
        <ul className="dugmeTabela">
          <li className="homeButton">
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              Nazad na početnu
            </Link>
          </li>
          <li className="rezultatButton">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/leaderboard"
            >
              Pogledaj tabelu
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Leaderboard;
