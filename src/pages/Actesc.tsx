import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function Actesc() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        background: "linear-gradient(135deg, #4facfe, #00f2fe)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ textAlign: "center", color: "white" }}>
        <img
          src={logo}
          alt="Logo"
          style={{ width: "140px", marginBottom: "20px" }}
        />

        <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
          FC Electro
        </h1>

        <p style={{ fontSize: "1.2rem" }}>
          Tecnología y electrodomésticos seminuevos con garantía.
        </p>

        <button
          className="btn btn-dark btn-lg mt-3"
          onClick={() => navigate("/inicio")}
        >
          Ver Productos
        </button>
      </div>
    </div>
  );
}

export default Actesc;
