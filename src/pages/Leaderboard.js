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

  const chunkArray = (arr, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const slicedLeaderboard = leaderboard.slice(0, 50); // Get the first 50 iterations
  const leaderboardChunks = chunkArray(slicedLeaderboard, 10); // Split into chunks of 10

  return (
    <div className="leaderboard">
      <div className="rezultat">
        <h2 className="rezultatNaslov">Tabela</h2>
        <div className="rezultatListaContainer">
          {leaderboardChunks.map((chunk, index) => (
            <ol className="rezultatLista" key={index}>
              {chunk.map((player, idx) => (
                <li className="rezultatIgrac" key={idx}>
                  {player.playerName} - {player.playerScore}
                </li>
              ))}
            </ol>
          ))}
        </div>
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
