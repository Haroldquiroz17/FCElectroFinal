
import { Link } from "react-router-dom";
import { Mail, LockKeyhole, ArrowRight, UserRound } from "lucide-react";
import logo from "../assets/logo.png";
import "./Login.css";

function Login() {
  return (
    <main className="fc-login">
      <div className="fc-login-fondo" />

      <section className="fc-login-contenedor">
        <div className="fc-login-presentacion">
          <span className="fc-login-etiqueta">
            <span className="fc-login-punto" />
            TU ESPACIO TECNOLÓGICO
          </span>

          <h1>
            BIENVENIDO A
            <br />
            <span>FC ELECTRO</span>
          </h1>

          <p>
            Tu próxima experiencia tecnológica comienza aquí.
            Ingresa a tu cuenta y descubre todo lo que tenemos para ti.
          </p>

          <div className="fc-login-detalle">
            <div className="fc-login-detalle-icono">
              <LockKeyhole size={22} />
            </div>
            <div>
              <strong>Tu espacio personal</strong>
              <small>Un acceso pensado para ti</small>
            </div>
          </div>
        </div>

        <div className="fc-login-tarjeta">
          <div className="fc-login-logo">
            <img src={logo} alt="Logo de FC ELECTRO" />
          </div>

          <div className="fc-login-encabezado">
            <span>BIENVENIDO DE NUEVO</span>
            <h2>Iniciar sesión</h2>
            <p>Ingresa tus datos para continuar</p>
          </div>

          <form
            onSubmit={(event) => event.preventDefault()}
            className="fc-login-formulario"
          >
            <div className="fc-login-campo">
              <label htmlFor="correo">Correo electrónico</label>
              <div className="fc-login-input">
                <Mail size={19} />
                <input
                  id="correo"
                  type="email"
                  placeholder="ejemplo@correo.com"
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            <div className="fc-login-campo">
              <label htmlFor="contrasena">Contraseña</label>
              <div className="fc-login-input">
                <LockKeyhole size={19} />
                <input
                  id="contrasena"
                  type="password"
                  placeholder="Ingresa tu contraseña"
                  autoComplete="current-password"
                  required
                />
              </div>
            </div>

            <button type="submit" className="fc-login-boton">
              Ingresar a mi cuenta
              <ArrowRight size={19} />
            </button>
          </form>

          <div className="fc-login-separador">
            <span />
            <small>¿ERES NUEVO EN FC ELECTRO?</small>
            <span />
          </div>

          <Link to="/registro" className="fc-login-registro">
            <UserRound size={18} />
            Crear una cuenta
            <ArrowRight size={17} />
          </Link>

          <p className="fc-login-nota">
            Tu experiencia tecnológica comienza con nosotros.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Login;
