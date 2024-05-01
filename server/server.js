const express = require("express");
const cors = require("cors"); // Import cors module
const pool = require("./db"); // Import db.js
const path = require("path"); // Import path module

const app = express();
const PORT = process.env.PORT;

// Enable CORS for all routes
app.use(cors());
app.use(express.json()); // Middleware to parse JSON request bodies

// API endpoint to fetch leaderboard data
app.get("/api/leaderboard", (req, res) => {
  // Query to fetch leaderboard data and order it by playerScore in descending order
  const query = `
    SELECT * FROM public.players
    ORDER BY "playerScore" DESC;
  `;

  pool.query(query, (err, result) => {
    if (err) {
      console.error("Error executing query:", err.stack);
      res.status(500).json({ error: err.message });
    } else {
      res.json(result.rows);
    }
  });
});

// API endpoint to add a new player score to the leaderboard
app.post("/api/addscore", (req, res) => {
  const { playerName, playerScore } = req.body;

  // Validate player name and score
  if (!playerName || !playerScore || typeof playerScore !== "number") {
    return res.status(400).json({ error: "Invalid player name or score" });
  }

  // Query to insert player score into the database
  const query = `
    INSERT INTO public.players ("playerName", "playerScore")
    VALUES ($1, $2);
  `;

  pool.query(query, [playerName, playerScore], (err, result) => {
    if (err) {
      console.error("Error executing query:", err.stack);
      res
        .status(500)
        .json({ error: "Error adding player score to the leaderboard" });
    } else {
      res
        .status(201)
        .json({ message: "Player score added to the leaderboard" });
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
