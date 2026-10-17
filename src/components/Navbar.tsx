
import { useState } from "react";
import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import {
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaCog,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import logo from "../assets/logo.png";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuAbierto, setMenuAbierto] = useState(false);

  const irA = (ruta: string) => {
    setMenuAbierto(false);
    navigate(ruta);
  };

  const esActivo = (ruta: string) => location.pathname === ruta;

  return (
    <header className="fc-navbar">
      <nav className="fc-navbar-contenedor">
        {/* LOGO Y NOMBRE */}
        <Link
          className="fc-navbar-marca"
          to="/inicio"
          onClick={() => setMenuAbierto(false)}
          aria-label="FC ELECTRO - Inicio"
        >
          <span className="fc-navbar-logo">
            <img src={logo} alt="FC ELECTRO" />
          </span>

          <span className="fc-navbar-identidad">
            <strong>FC ELECTRO</strong>
            <small>TECNOLOGÍA A TU ALCANCE</small>
          </span>
        </Link>

        {/* BOTÓN PARA MÓVILES */}
        <button
          type="button"
          className="fc-navbar-menu-toggle"
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuAbierto}
        >
          {menuAbierto ? <FaTimes /> : <FaBars />}
        </button>

        {/* CONTENIDO DEL NAVBAR */}
        <div
          className={`fc-navbar-contenido ${
            menuAbierto ? "fc-navbar-contenido-abierto" : ""
          }`}
        >
          {/* NAVEGACIÓN CENTRAL */}
          <ul className="fc-navbar-enlaces">
            <li>
              <Link
                className={`fc-navbar-enlace ${
                  esActivo("/inicio") ? "activo" : ""
                }`}
                to="/inicio"
                onClick={() => setMenuAbierto(false)}
              >
                Inicio
              </Link>
            </li>

            <li>
              <Link
                className={`fc-navbar-enlace ${
                  esActivo("/productos") ||
                  location.pathname.startsWith("/producto/")
                    ? "activo"
                    : ""
                }`}
                to="/productos"
                onClick={() => setMenuAbierto(false)}
              >
                Productos
              </Link>
            </li>

            <li>
              <Link
                className={`fc-navbar-enlace ${
                  esActivo("/ofertas") ? "activo" : ""
                }`}
                to="/ofertas"
                onClick={() => setMenuAbierto(false)}
              >
                Ofertas
              </Link>
            </li>
          </ul>

          {/* ICONOS Y ACCIONES */}
          <div className="fc-navbar-acciones">
            <button
              type="button"
              className="fc-navbar-icono"
              onClick={() => irA("/productos")}
              aria-label="Buscar productos"
              title="Buscar productos"
            >
              <FaSearch />
            </button>

            <Link
              className={`fc-navbar-icono ${
                esActivo("/carrito") ? "activo" : ""
              }`}
              to="/carrito"
              onClick={() => setMenuAbierto(false)}
              aria-label="Ver carrito"
              title="Mi carrito"
            >
              <FaShoppingCart />
            </Link>

            <button
              type="button"
              className={`fc-navbar-icono ${
                esActivo("/soporte") ? "activo" : ""
              }`}
              onClick={() => irA("/soporte")}
              aria-label="Soporte técnico"
              title="Soporte técnico"
            >
              <FaCog />
            </button>

            <Link
              className={`fc-navbar-icono ${
                esActivo("/login") || esActivo("/registro")
                  ? "activo"
                  : ""
              }`}
              to="/login"
              onClick={() => setMenuAbierto(false)}
              aria-label="Iniciar sesión"
              title="Mi cuenta"
            >
              <FaUser />
            </Link>

            <Link
              className="fc-navbar-cuenta"
              to="/login"
              onClick={() => setMenuAbierto(false)}
            >
              Mi cuenta
            </Link>
          </div>
        </div>
      </nav>

      {/* FRANJA INFERIOR DECORATIVA */}
      <div className="fc-navbar-linea" />
    </header>
  );
}

export default Navbar;
