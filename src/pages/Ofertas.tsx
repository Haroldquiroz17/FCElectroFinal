import { Link } from "react-router-dom";
import { FaLock } from "react-icons/fa";

function Ofertas() {
  return (
    <>
      {/* SECCIÓN VIDEOS */}
      <div className="container my-5">
        <h2 className="text-center fw-bold mb-4">
          Conoce más de nosotros
        </h2>

        <div className="row g-4">

          {/* Video 1 */}
          <div className="col-md-4">
            <div className="card shadow-sm">
              <video controls className="w-100 rounded-top">
                <source src="/videos/video1.mp4" type="video/mp4" />
                Tu navegador no soporta videos.
              </video>
              <div className="card-body text-center">
                <h6>Equipos de la mejor calidad</h6>
              </div>
            </div>
          </div>

          {/* Video 2 */}
          <div className="col-md-4">
            <div className="card shadow-sm">
              <video controls className="w-100 rounded-top">
                <source src="/videos/video2.mp4" type="video/mp4" />
                Tu navegador no soporta videos.
              </video>
              <div className="card-body text-center">
                <h6>Nos encontraras aqui</h6>
              </div>
            </div>
          </div>

          {/* Video 3 */}
          <div className="col-md-4">
            <div className="card shadow-sm">
              <video controls className="w-100 rounded-top">
                <source src="/videos/video3.mp4" type="video/mp4" />
                Tu navegador no soporta videos.
              </video>
              <div className="card-body text-center">
                <h6>Tu local de confianza FC ELECTRO</h6>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* SECCIÓN NOVEDADES */}
      <div className="container my-5">
        <h2 className="text-center fw-bold mb-4">
          Novedades
        </h2>

        <div className="row g-4">

          {/* Imagen 1 */}
          <div className="col-md-4">
            <div className="card shadow-sm">
              <img
                src="/imagenes/novedad1.jpg"
                alt="Novedad 1"
                className="card-img-top"
              />
              <div className="card-body text-center">
                <h6>Renueva tus equipos al mejor precio</h6>
              </div>
            </div>
          </div>

          {/* Imagen 2 */}
          <div className="col-md-4">
            <div className="card shadow-sm">
              <img
                src="/imagenes/novedad2.jpg"
                alt="Novedad 2"
                className="card-img-top"
              />
              <div className="card-body text-center">
                <h6>Las mejores ofertas solo aqui</h6>
              </div>
            </div>
          </div>

          {/* Imagen 3 */}
          <div className="col-md-4">
            <div className="card shadow-sm">
              <img
                src="/imagenes/novedad3.jpg"
                alt="Novedad 3"
                className="card-img-top"
              />
              <div className="card-body text-center">
                <h6>Con garantia y seguridad en cada producto</h6>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* SECCIÓN OFERTAS BLOQUEADAS */}
      <div className="container text-center my-5" style={{ minHeight: "40vh" }}>
        
        <FaLock size={80} className="text-secondary mb-4" />

        <h2 className="fw-bold">Ofertas exclusivas</h2>

        <p className="text-muted mt-3">
          Inicia sesión para ver nuestras ofertas especiales
        </p>

        <Link to="/login" className="btn btn-primary mt-3">
          Iniciar sesión
        </Link>

      </div>
    </>
  );
}

export default Ofertas;
