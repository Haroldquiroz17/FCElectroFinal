
import {
  FaCog,
  FaWhatsapp,
  FaUser,
  FaEnvelope,
  FaLaptop,
  FaCommentDots,
  FaArrowRight,
  FaHeadset,
} from "react-icons/fa";

import "./SoporteTecnico.css";

function SoporteTecnico() {
  return (
    <main className="fc-soporte">
      <div className="fc-soporte-fondo" />

      <section className="fc-soporte-contenedor">
        {/* Presentación */}
        <header className="fc-soporte-encabezado">
          <div className="fc-soporte-icono-principal">
            <FaHeadset />
            <span className="fc-soporte-punto" />
          </div>

          <span className="fc-soporte-etiqueta">
            ASISTENCIA FC ELECTRO
          </span>

          <h1>
            ¿NECESITAS
            <br />
            <span>AYUDA TÉCNICA?</span>
          </h1>

          <p>
            Estamos aquí para ayudarte. Cuéntanos qué sucede con tu
            producto y déjanos conocer cómo podemos orientarte.
          </p>

          <div className="fc-soporte-linea" />
        </header>

        {/* Formulario */}
        <section className="fc-soporte-tarjeta">
          <div className="fc-soporte-titulo-formulario">
            <div className="fc-soporte-mini-icono">
              <FaCog />
            </div>

            <div>
              <h2>Cuéntanos tu problema</h2>
              <p>Completa los siguientes datos</p>
            </div>
          </div>

          <form
            className="fc-soporte-formulario"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="fc-soporte-campo">
              <label htmlFor="soporte-nombre">
                Nombre completo
              </label>

              <div className="fc-soporte-input">
                <FaUser />

                <input
                  id="soporte-nombre"
                  type="text"
                  placeholder="Escribe tu nombre"
                  autoComplete="name"
                  required
                />
              </div>
            </div>

            <div className="fc-soporte-campo">
              <label htmlFor="soporte-correo">
                Correo electrónico
              </label>

              <div className="fc-soporte-input">
                <FaEnvelope />

                <input
                  id="soporte-correo"
                  type="email"
                  placeholder="ejemplo@correo.com"
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            <div className="fc-soporte-campo">
              <label htmlFor="soporte-producto">
                Tipo de producto
              </label>

              <div className="fc-soporte-input">
                <FaLaptop />

                <select id="soporte-producto" defaultValue="Laptop">
                  <option value="Laptop">Laptop</option>
                  <option value="Televisor">Televisor</option>
                  <option value="Celular">Celular</option>
                  <option value="Tablet">Tablet</option>
                  <option value="Consola">Consola</option>
                  <option value="Audio">Equipo de audio</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>
            </div>

            <div className="fc-soporte-campo">
              <label htmlFor="soporte-descripcion">
                Descripción del problema
              </label>

              <div className="fc-soporte-textarea">
                <FaCommentDots />

                <textarea
                  id="soporte-descripcion"
                  rows={4}
                  placeholder="Describe qué ocurrió con tu producto..."
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="fc-soporte-boton-enviar"
            >
              Enviar solicitud
              <FaArrowRight />
            </button>

            <p className="fc-soporte-nota">
              <FaCog />
              Formulario de contacto de FC ELECTRO
            </p>
          </form>

          {/* WhatsApp */}
          <div className="fc-soporte-whatsapp">
            <div className="fc-soporte-whatsapp-texto">
              <span>¿PREFIERES UNA ATENCIÓN DIRECTA?</span>
              <h3>Estamos a un mensaje de distancia</h3>
              <p>Contáctanos por WhatsApp para realizar tu consulta.</p>
            </div>

            <a
              href="https://wa.me/51947792061"
              target="_blank"
              rel="noopener noreferrer"
              className="fc-soporte-boton-whatsapp"
            >
              <FaWhatsapp />
              Contactar por WhatsApp
            </a>
          </div>
        </section>

        <footer className="fc-soporte-pie">
          FC ELECTRO <span>·</span> TECNOLOGÍA, INNOVACIÓN Y CONFIANZA
        </footer>
      </section>
    </main>
  );
}

export default SoporteTecnico;
