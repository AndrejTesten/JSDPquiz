import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import withSplashScreen from "./../components/withSplashScreen";
const HomePage = () => {
  useEffect(() => {
    const setHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setHeight(); // Call the function initially

    // Add event listener to recalculate height when window is resized
    window.addEventListener("resize", setHeight);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", setHeight);
    };
  }, []);
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
        <h2 className="uputstvo-naslov">JSDP KVIZ</h2>
        <ul className="uputstvo">
          <li>Pitanja su podeljena u 3 grupe</li>
          <li>
            Svaki igrač dobija 3 nasumično generisana laka pitanja, 3 pitanja
            srednje težine i 4 teška pitanja
          </li>
          <li>Za tačan odgovor na lako pitanje korisnik dobija 5 poena</li>
          <li>
            Za tačan odgovor na pitanje srednje težine korisnik dobija 7 poena
          </li>
          <li>Za tačan odgovor na teško pitanje korisnik dobija 10 poena</li>
          <li>Na kraju igre, vaš rezultat će se automatski uneti u tabelu</li>
          <li>Srećno!</li>
        </ul>
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
                to={name.trim() !== "" ? `/quiz/${name}` : ""}
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
    </div>
  );
};
export default withSplashScreen(HomePage);
