import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Registro() {
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        
        <div className="text-center mb-4">
          <img src={logo} alt="FSelectro" width="120" />
          <p className="text-muted mt-2">Crea tu cuenta</p>
        </div>

        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input type="text" className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input type="email" className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input type="password" className="form-control" />
        </div>

        <button className="btn btn-success w-100">
          Crear cuenta
        </button>

        <div className="text-center mt-3">
          <small>
            ¿Ya tienes cuenta?{" "}
            <Link to="/login">Inicia sesión</Link>
          </small>
        </div>
      </div>
    </div>
  );
}

export default Registro;
