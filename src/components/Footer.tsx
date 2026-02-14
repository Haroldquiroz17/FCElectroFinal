import { FaFacebook, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-light pt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-4">
            <h5>FC ELECTRO</h5>
            <p>
              Tu tienda de confianza para equipos informáticos de calidad.
            </p>
          </div>

          <div className="col-md-3 mb-4">
            <h6>Tienda</h6>
            <ul className="list-unstyled">
              <li>Todos los productos</li>
              <li>Laptops</li>
              <li>Celulares</li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h6>Mi Cuenta</h6>
            <ul className="list-unstyled">
              <li>Iniciar Sesión</li>
              <li>Registrarse</li>
              <li>Mis pedidos</li>
              <li>Soporte tecnico</li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h6>Contacto</h6>
            <p>📧 info@fcelectro.com</p>
            <p>📞 +51 947 792 061</p>
            <p>📍 Ubicentro, Calle San José 755, Chiclayo</p>
          </div>
        </div>

        <div className="text-center mt-4 pb-4">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/FCElectroPERU/?locale=es_LA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light me-3"
          >
            <FaFacebook size={28} />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/51947792061"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
          >
            <FaWhatsapp size={28} />
          </a>

          <p className="mt-2 mb-0">
            © 2026 FC ELECTRO - Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
