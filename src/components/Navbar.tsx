import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser, FaCog } from "react-icons/fa";
import logo from "../assets/logo.png";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">

        {/* LOGO + NOMBRE */}
        <Link
          className="navbar-brand fw-bold d-flex align-items-center gap-2"
          to="/inicio"
        >
          <img
            src={logo}
            alt="Logo"
            style={{ width: "32px", height: "32px", objectFit: "contain" }}
          />
          FC ELECTRO
        </Link>

        {/* MENÚ CENTRAL */}
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/inicio">
                Inicio
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/productos">
                Productos
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/ofertas">
                Ofertas
              </Link>
            </li>
          </ul>
        </div>

        {/* ICONOS DERECHA */}
        <div className="d-flex align-items-center gap-4">

          {/* LUPA → Productos */}
          <FaSearch
            size={18}
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/productos")}
          />

          {/* CARRITO */}
          <Link to="/carrito">
            <FaShoppingCart
              size={18}
              style={{ cursor: "pointer", color: "black" }}
            />
          </Link>

          {/* SOPORTE TÉCNICO */}
          <FaCog
            size={18}
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/soporte")}
          />

          {/* USUARIO */}
          <Link to="/login">
            <FaUser
              size={18}
              style={{ cursor: "pointer", color: "black" }}
            />
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
