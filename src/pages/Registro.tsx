
import { Link } from "react-router-dom";
import {
  UserRound,
  Mail,
  LockKeyhole,
  ArrowRight,
  UserPlus,
} from "lucide-react";
import logo from "../assets/logo.png";
import "./Registro.css";

function Registro() {
  return (
    <main className="fc-registro">
      <div className="fc-registro-fondo" />

      <section className="fc-registro-contenedor">
        <div className="fc-registro-presentacion">
          <span className="fc-registro-etiqueta">
            <span className="fc-registro-punto" />
            ÚNETE A FC ELECTRO
          </span>

          <h1>
            TU EXPERIENCIA
            <br />
            <span>COMIENZA AQUÍ</span>
          </h1>

          <p>
            Crea tu cuenta y descubre un mundo de tecnología.
            Encuentra tus productos favoritos y explora todo
            lo que FC ELECTRO tiene preparado para ti.
          </p>

          <div className="fc-registro-beneficios">
            <div className="fc-registro-beneficio-icono">
              <UserPlus size={23} />
            </div>

            <div>
              <strong>Forma parte de nuestra comunidad</strong>
              <small>Un espacio creado para los amantes de la tecnología</small>
            </div>
          </div>
        </div>

        <div className="fc-registro-tarjeta">
          <div className="fc-registro-logo">
            <img src={logo} alt="Logo de FC ELECTRO" />
          </div>

          <header className="fc-registro-encabezado">
            <span>CREA TU PERFIL</span>
            <h2>Crear una cuenta</h2>
            <p>Completa tus datos para comenzar</p>
          </header>

          <form
            className="fc-registro-formulario"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="fc-registro-campo">
              <label htmlFor="registro-nombre">Nombre completo</label>

              <div className="fc-registro-input">
                <UserRound size={19} />

                <input
                  id="registro-nombre"
                  type="text"
                  placeholder="Escribe tu nombre"
                  autoComplete="name"
                  required
                />
              </div>
            </div>

            <div className="fc-registro-campo">
              <label htmlFor="registro-correo">Correo electrónico</label>

              <div className="fc-registro-input">
                <Mail size={19} />

                <input
                  id="registro-correo"
                  type="email"
                  placeholder="ejemplo@correo.com"
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            <div className="fc-registro-campo">
              <label htmlFor="registro-contrasena">Contraseña</label>

              <div className="fc-registro-input">
                <LockKeyhole size={19} />

                <input
                  id="registro-contrasena"
                  type="password"
                  placeholder="Crea una contraseña"
                  autoComplete="new-password"
                  required
                />
              </div>
            </div>

            <button type="submit" className="fc-registro-boton">
              Crear mi cuenta
              <ArrowRight size={19} />
            </button>
          </form>

          <div className="fc-registro-separador">
            <span />
            <small>¿YA FORMAS PARTE DE FC ELECTRO?</small>
            <span />
          </div>

          <Link to="/login" className="fc-registro-login">
            <UserRound size={18} />
            Iniciar sesión
            <ArrowRight size={17} />
          </Link>

          <p className="fc-registro-nota">
            Tecnología, innovación y confianza en un solo lugar.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Registro;
