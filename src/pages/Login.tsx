import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Login() {
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        
        <div className="text-center mb-4">
          <img src={logo} alt="FSelectro" width="120" />
          <p className="text-muted mt-2">Accede a tu cuenta</p>
        </div>

        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input type="email" className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input type="password" className="form-control" />
        </div>

        <button className="btn btn-primary w-100">
          Ingresar
        </button>

        <div className="text-center mt-3">
          <small>
            ¿No tienes tu cuenta?{" "}
            <Link to="/registro">Regístrate</Link>
          </small>
        </div>
      </div>
    </div>
  );
}

export default Login;
