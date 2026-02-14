import { useNavigate } from "react-router-dom";
import { 
  FaLaptop, 
  FaDesktop, 
  FaMicrochip, 
  FaHeadphones, 
  FaShieldAlt, 
  FaTruck, 
  FaHeadset 
} from "react-icons/fa";

function Inicio() {
  const navigate = useNavigate();

  return (
    <>
      {/* HERO */}
      <section
        style={{
          background: "#0d2b4e",
          color: "white",
          padding: "100px 0",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold">
            Tecnología de alto rendimiento
          </h1>
          <p className="lead mt-3">
            Encuentra todo lo que necesitas en FC ELECTRO.
          </p>

          <button
            className="btn btn-light mt-4"
            onClick={() => navigate("/productos")}
          >
            Ver catálogo →
          </button>
        </div>
      </section>

      {/* CATEGORÍAS */}
      <section className="container my-5">
        <h3 className="mb-4">Categorías</h3>

        <div className="row g-4 text-center">
          <div className="col-md-3">
            <div className="card shadow-sm p-4">
              <FaLaptop size={35} className="mb-3 text-primary" />
              <h5>Laptops</h5>
              <small className="text-muted">Ver productos →</small>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow-sm p-4">
              <FaDesktop size={35} className="mb-3 text-primary" />
              <h5>Computadoras</h5>
              <small className="text-muted">Ver productos →</small>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow-sm p-4">
              <FaMicrochip size={35} className="mb-3 text-primary" />
              <h5>Componentes</h5>
              <small className="text-muted">Ver productos →</small>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow-sm p-4">
              <FaHeadphones size={35} className="mb-3 text-primary" />
              <h5>Periféricos</h5>
              <small className="text-muted">Ver productos →</small>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row text-center">

            <div className="col-md-4">
              <FaShieldAlt size={30} className="mb-3 text-success" />
              <h5>Garantía</h5>
              <p>Todos los productos con garantía oficial.</p>
            </div>

            <div className="col-md-4">
              <FaTruck size={30} className="mb-3 text-success" />
              <h5>Recepcion en tienda</h5>
              <p>Entrega inmediata.</p>
            </div>

            <div className="col-md-4">
              <FaHeadset size={30} className="mb-3 text-success" />
              <h5>Soporte 24/7</h5>
              <p>Atención al cliente especializada.</p>
            </div>

          </div>
        </div>
      </section>

      {/* MAPA SOLO PARA INICIO */}
      <section className="container my-5">
        <h4 className="mb-3">Nuestra Ubicación</h4>
        <iframe
          src="https://www.google.com/maps?q=-6.7710615,-79.8390386&z=18&output=embed"
          width="100%"
          height="300"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </section>
    </>
  );
}

export default Inicio;
