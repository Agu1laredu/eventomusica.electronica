/* eslint-disable jsx-a11y/alt-text */
import "./App.css";
import Logo from "./assets/logo.png";
import ProfileOne from "./assets/caruno.png";
import ProfileTwo from "./assets/cardos.png";
import Profilethree from "./assets/cartres.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} className="Logo" />
        <div className="DivLi">
          <ul>
            <li style={{ cursor: "pointer" }}>
              <p>Home</p>
            </li>
            <li style={{ cursor: "pointer" }}>
              <p>Nosotros</p>
            </li>
            <li style={{ cursor: "pointer" }}>
              <p>Ciclos Musicales </p>
            </li>
            <li style={{ cursor: "pointer" }}>
              <p>DJs</p>
            </li>
          </ul>
        </div>
        <button className="Button" style={{ cursor: "pointer" }}>
          <b>Contacto</b>
        </button>
      </header>
      <section className="Banner">
        <h1 className="tittle">MOMENTOS UNICOS, SONIDOS DISTINTOS</h1>
        <p className="ParrafoBanner">
          Sintoniza la experiencia, crea momentos únicos con sonidos distintos.
          ¡Tu evento, nuestra melodía inolvidable!
        </p>
        <section className="sectionCardsBanner"></section>
      </section>
      <h2 className="cardContainerh2">FECHAS DE ESTE MES</h2>
      <section className="cardContainer">
        <div className="sectionCard">
          <div className="divCards">
            <img src={ProfileOne} className="imagesCard" />
            <div style={{ textAlign: "justify" }}>
              <h3> EMANUEL CASAIS</h3>
              <h4>DJ PARTNERT</h4> <p className="paraffoCard">10/06/2024</p>
              <p className="paraffoCard">LOCAL GROUND SESSION</p>
            </div>
          </div>
          <div className="containerTicket">
            <section>
              <p className="paraffoCard">Locación: Event Garden</p>
              <p className="paraffoCard">Entrada en puerta: $5500</p>
              <p className="paraffoCard">Anticipadas $3500</p>
            </section>
            <button className="Button">
              <b>Ticket</b>
            </button>
          </div>
        </div>
        <div className="sectionCard">
          <div className="divCards">
            <img src={ProfileTwo} className="imagesCard" />
            <div style={{ textAlign: "justify" }}>
              <h3>JAY DE LYS</h3>
              <h4>DJ INVITE</h4> <p className="paraffoCard">25/12/2024</p>
              <p className="paraffoCard">ESPECIAL NAVIDAD</p>
            </div>
          </div>
          <div className="containerTicket">
            <section>
              <p className="paraffoCard">Locación: Event Garden</p>
              <p className="paraffoCard">Entrada en puerta: $7500</p>
              <p className="paraffoCard">Anticipadas $5000</p>
            </section>
            <button className="Button">
              <b>Ticket</b>
            </button>
          </div>
        </div>
        <div className="sectionCard">
          <div className="divCards">
            <img src={Profilethree} className="imagesCard" />
            <div style={{ textAlign: "justify" }}>
              <h3> MARIANO MELLINO</h3>
              <h4>DJ INVITE</h4> <p className="paraffoCard">31/12/2024</p>
              <p className="paraffoCard">EVENTO AÑO NUEVO</p>
            </div>
          </div>
          <div className="containerTicket">
            <section>
              <p className="paraffoCard">Locación: Event Garden</p>
              <p className="paraffoCard">Entrada en puerta: $5500</p>
              <p className="paraffoCard">Anticipadas $3500</p>
            </section>
            <button className="Button">
              <b>Ticket</b>
            </button>
          </div>
        </div>
      </section>
      <section className="BannerDos">
        <h1 className="tittleDos">¿PORQUE SOMOS UN EVENTO INOLVIDABLE?</h1>
        <p className="ParrafoBanner">
          Somos más que un evento, somos la sinfonía de momentos inolvidables.
          Descubre la magia que nos hace únicos, ¡porque cada experiencia cuenta
          en nuestra melodía eterna!
        </p>
      </section>
    </div>
  );
}

export default App;
