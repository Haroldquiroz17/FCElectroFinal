
import {
  FaFacebook,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLaptop,
  FaUser,
  FaHeadset,
  FaShieldAlt,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="fc-footer">
      <div className="fc-footer-contenido">
        <div className="container">
          <div className="row g-4">
            {/* Marca y descripción */}
            <div className="col-lg-4 col-md-6">
              <Link to="/inicio" className="fc-footer-marca">
                <span className="fc-footer-logo">
                  <FaLaptop />
                </span>

                <span>
                  <strong>FC ELECTRO</strong>
                  <small>TECNOLOGÍA A TU ALCANCE</small>
                </span>
              </Link>

              <p className="fc-footer-descripcion">
                Tu tienda de confianza para encontrar equipos
                tecnológicos de calidad. Descubre nuestros productos
                y encuentra la tecnología que necesitas.
              </p>

              <div className="fc-footer-redes">
                <a
                  href="https://www.facebook.com/FCElectroPERU/?locale=es_LA"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook de FC ELECTRO"
                  title="Facebook"
                  className="fc-footer-red"
                >
                  <FaFacebook />
                </a>

                <a
                  href="https://wa.me/51947792061"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp de FC ELECTRO"
                  title="WhatsApp"
                  className="fc-footer-red"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>

            {/* Tienda */}
            <div className="col-lg-2 col-md-6 col-6">
              <h5 className="fc-footer-titulo">Tienda</h5>

              <ul className="fc-footer-lista">
                <li>
                  <Link to="/productos">
                    <FaArrowRight />
                    Todos los productos
                  </Link>
                </li>
                <li>
                  <Link to="/productos">
                    <FaArrowRight />
                    Laptops
                  </Link>
                </li>
                <li>
                  <Link to="/productos">
                    <FaArrowRight />
                    Celulares
                  </Link>
                </li>
                <li>
                  <Link to="/ofertas">
                    <FaArrowRight />
                    Ofertas
                  </Link>
                </li>
              </ul>
            </div>

            {/* Cuenta y soporte */}
            <div className="col-lg-2 col-md-6 col-6">
              <h5 className="fc-footer-titulo">Mi cuenta</h5>

              <ul className="fc-footer-lista">
                <li>
                  <Link to="/login">
                    <FaUser />
                    Iniciar sesión
                  </Link>
                </li>
                <li>
                  <Link to="/registro">
                    <FaArrowRight />
                    Registrarse
                  </Link>
                </li>
                <li>
                  <Link to="/carrito">
                    <FaArrowRight />
                    Mi carrito
                  </Link>
                </li>
                <li>
                  <Link to="/soporte">
                    <FaHeadset />
                    Soporte técnico
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contacto */}
            <div className="col-lg-4 col-md-6">
              <h5 className="fc-footer-titulo">Contáctanos</h5>

              <div className="fc-footer-contacto">
                <span className="fc-footer-contacto-icono">
                  <FaEnvelope />
                </span>
                <div>
                  <small>Correo electrónico</small>
                  <a href="mailto:info@fcelectro.com">
                    info@fcelectro.com
                  </a>
                </div>
              </div>

              <div className="fc-footer-contacto">
                <span className="fc-footer-contacto-icono">
                  <FaPhone />
                </span>
                <div>
                  <small>Teléfono / WhatsApp</small>
                  <a href="tel:+51947792061">
                    +51 947 792 061
                  </a>
                </div>
              </div>

              <div className="fc-footer-contacto">
                <span className="fc-footer-contacto-icono">
                  <FaMapMarkerAlt />
                </span>
                <div>
                  <small>Ubicación</small>
                  <p>Ubicentro, Calle San José 755, Chiclayo</p>
                </div>
              </div>

              <a
                href="https://wa.me/51947792061"
                target="_blank"
                rel="noopener noreferrer"
                className="fc-footer-boton"
              >
                Escríbenos por WhatsApp
                <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="fc-footer-inferior">
        <div className="container">
          <div className="fc-footer-inferior-contenido">
            <p>
              © 2026 <strong>FC ELECTRO</strong>. Todos los derechos
              reservados.
            </p>

            <span>
              <FaShieldAlt />
              Tu confianza es nuestra prioridad
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
