
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import "./Portada.css";

function Portada() {
  const navigate = useNavigate();
  const [saliendo, setSaliendo] = useState(false);

  const entrarAlCatalogo = () => {
    if (saliendo) return;

    setSaliendo(true);

    window.setTimeout(() => {
      navigate("/inicio");
    }, 800);
  };

  return (
    <main
      className={`fc-portada ${saliendo ? "fc-portada--saliendo" : ""}`}
    >
      <div className="fc-portada-imagen-contenedor">
        <img
          src="/imagenes/portada-fcelectro.jpg"
          alt="Equipos tecnológicos de FC ELECTRO"
          className="fc-portada-imagen"
        />

        <div className="fc-portada-overlay" />

        <section className="fc-portada-contenido">
          <div className="fc-portada-marca">
            <Sparkles size={20} />
            <span>FC ELECTRO</span>
          </div>

          <div className="fc-portada-linea" />

          <p className="fc-portada-etiqueta">
            TECNOLOGÍA A TU ALCANCE
          </p>

          <h1>
            DESCUBRE UNA
            <br />
            NUEVA <span>EXPERIENCIA</span>
          </h1>

          <p className="fc-portada-descripcion">
            La tecnología que buscas, en un solo lugar.
            Explora nuestros equipos y encuentra tu próximo dispositivo.
          </p>

          <button
            type="button"
            className="fc-portada-boton"
            onClick={entrarAlCatalogo}
            disabled={saliendo}
          >
            {saliendo ? "Preparando tu experiencia..." : "Visitar nuestro catálogo"}
            <ArrowRight size={20} />
          </button>

          <p className="fc-portada-pie">
            INNOVACIÓN · CALIDAD · CONFIANZA
          </p>
        </section>

        <div className="fc-portada-indicador">
          <span />
          TU PRÓXIMA EXPERIENCIA COMIENZA AQUÍ
        </div>

        <div className="fc-portada-destello" aria-hidden="true" />
      </div>
    </main>
  );
}

export default Portada;
