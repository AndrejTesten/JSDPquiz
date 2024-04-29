import { Link } from "react-router-dom";
import { useState } from "react";

export default function HomePage() {
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleStartQuiz = () => {
    if (name.trim() === "") {
      alert("Molim unesite ime pre nego što pokušate da pokrenete kviz!");
    }
  };

  return (
    <div className="pozadina">
      <div className="container">
        <div className="uputstvo">
          <p>
            Kviz sadrzi 150 pitanja podeljena u tri grupacije, svaki korisnik
            dobija random 3 pitanja iz grupe lako i srednje, kao i 4 pitanja iz
            grupacije "teska pitanja", jer je zivot navijača Partizana težak i
            sve drugačije bi bilo pogrešno
          </p>
        </div>
        <div className="unesiIme">
          <form action="">
            <label htmlFor="">
              Ime:
              <input
                type="text"
                name="name"
                placeholder="Unesi ime svoje"
                value={name}
                onChange={handleNameChange}
                required
              />
            </label>
          </form>
        </div>
        <div className="menu">
          <ul>
            <li className="startButton">
              <Link
                to={name.trim() !== "" ? "/quiz" : ""}
                onClick={handleStartQuiz}
                style={{
                  textDecoration: "none",
                  color: "white",
                  cursor: name.trim() === "" ? "not-allowed" : "pointer",
                }}
              >
                Započni kviz
              </Link>
            </li>
            <li className="tabelaButton">
              <Link style={{ textDecoration: "none", color: "white" }} to="">
                Pogledaj tabelu
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
