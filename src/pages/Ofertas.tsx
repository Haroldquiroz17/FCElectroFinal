
import { Link } from "react-router-dom";
import {
  FaTag,
  FaArrowRight,
  FaBolt,
  FaShieldAlt,
  FaPlayCircle,
} from "react-icons/fa";
import "./Ofertas.css";

function Ofertas() {
  return (
    <main className="ofertas-page">
      {/* ENCABEZADO */}
      <section className="ofertas-hero">
        <div className="container">
          <span className="ofertas-etiqueta">
            <FaTag />
            FC ELECTRO · PROMOCIONES
          </span>

          <h1>
            Descubre nuestras <span>ofertas</span>
          </h1>

          <p>
            Tecnología para ti, precios que te sorprenderán.
            Explora nuestros productos y encuentra tu próxima compra.
          </p>

          <Link
            to="/productos?ofertas=true"
            className="ofertas-boton ofertas-boton-principal"
          >
            <FaTag />
            Ver productos en oferta
            <FaArrowRight />
          </Link>
        </div>
      </section>

      {/* VIDEOS */}
      <section className="container ofertas-seccion">
        <div className="ofertas-titulo-seccion">
          <span className="ofertas-mini-etiqueta">
            CONÓCENOS
          </span>
          <h2>Conoce más de nosotros</h2>
          <p>
            Descubre FC ELECTRO y todo lo que tenemos para ti.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-md-4">
            <article className="ofertas-card">
              <div className="ofertas-video">
                <video
                  controls
                  preload="metadata"
                  playsInline
                  aria-label="Video sobre la calidad de nuestros equipos"
                >
                  <source src="/videos/video1.mp4" type="video/mp4" />
                  Tu navegador no soporta videos.
                </video>
                <span className="ofertas-video-icono">
                  <FaPlayCircle />
                </span>
              </div>

              <div className="ofertas-card-contenido">
                <h3>Equipos de calidad</h3>
                <p>
                  Encuentra tecnología para acompañarte en tu día a día.
                </p>
              </div>
            </article>
          </div>

          <div className="col-md-4">
            <article className="ofertas-card">
              <div className="ofertas-video">
                <video
                  controls
                  preload="metadata"
                  playsInline
                  aria-label="Video sobre dónde encontrarnos"
                >
                  <source src="/videos/video2.mp4" type="video/mp4" />
                  Tu navegador no soporta videos.
                </video>
                <span className="ofertas-video-icono">
                  <FaPlayCircle />
                </span>
              </div>

              <div className="ofertas-card-contenido">
                <h3>Encuéntranos aquí</h3>
                <p>
                  Conoce más sobre FC ELECTRO y nuestra propuesta tecnológica.
                </p>
              </div>
            </article>
          </div>

          <div className="col-md-4">
            <article className="ofertas-card">
              <div className="ofertas-video">
                <video
                  controls
                  preload="metadata"
                  playsInline
                  aria-label="Video de FC ELECTRO"
                >
                  <source src="/videos/video3.mp4" type="video/mp4" />
                  Tu navegador no soporta videos.
                </video>
                <span className="ofertas-video-icono">
                  <FaPlayCircle />
                </span>
              </div>

              <div className="ofertas-card-contenido">
                <h3>Tu espacio tecnológico</h3>
                <p>
                  Explora nuestro catálogo y descubre diferentes opciones.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* NOVEDADES */}
      <section className="ofertas-novedades">
        <div className="container ofertas-seccion">
          <div className="ofertas-titulo-seccion">
            <span className="ofertas-mini-etiqueta">
              ACTUALIDAD
            </span>
            <h2>Novedades</h2>
            <p>
              Descubre más sobre nuestros productos y promociones.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <article className="ofertas-card ofertas-novedad-card">
                <div className="ofertas-imagen">
                  <img
                    src="/imagenes/novedad1.jpg"
                    alt="Novedades tecnológicas"
                    loading="lazy"
                  />
                </div>

                <div className="ofertas-card-contenido">
                  <span className="ofertas-categoria">
                    Tecnología
                  </span>
                  <h3>Renueva tus equipos</h3>
                  <p>
                    Explora las opciones disponibles en nuestro catálogo.
                  </p>
                  <Link
                    to="/productos"
                    className="ofertas-enlace"
                  >
                    Explorar catálogo <FaArrowRight />
                  </Link>
                </div>
              </article>
            </div>

            <div className="col-md-4">
              <article className="ofertas-card ofertas-novedad-card">
                <div className="ofertas-imagen">
                  <img
                    src="/imagenes/novedad2.jpg"
                    alt="Promociones de FC ELECTRO"
                    loading="lazy"
                  />
                </div>

                <div className="ofertas-card-contenido">
                  <span className="ofertas-categoria">
                    Promociones
                  </span>
                  <h3>Precios especiales</h3>
                  <p>
                    Revisa los productos que tienen precio promocional.
                  </p>
                  <Link
                    to="/productos?ofertas=true"
                    className="ofertas-enlace"
                  >
                    Ver descuentos <FaArrowRight />
                  </Link>
                </div>
              </article>
            </div>

            <div className="col-md-4">
              <article className="ofertas-card ofertas-novedad-card">
                <div className="ofertas-imagen">
                  <img
                    src="/imagenes/novedad3.jpg"
                    alt="Información sobre garantía de productos"
                    loading="lazy"
                  />
                </div>

                <div className="ofertas-card-contenido">
                  <span className="ofertas-categoria">
                    Confianza
                  </span>
                  <h3>Compra informado</h3>
                  <p>
                    Consulta las características y la garantía indicada
                    en cada producto.
                  </p>
                  <Link
                    to="/productos"
                    className="ofertas-enlace"
                  >
                    Conocer productos <FaArrowRight />
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* BANNER DE OFERTAS */}
      <section className="container ofertas-llamado">
        <div className="ofertas-llamado-icono">
          <FaBolt />
        </div>

        <div className="ofertas-llamado-texto">
          <span>OPORTUNIDADES PARA TI</span>
          <h2>Encuentra tu próxima oferta</h2>
          <p>
            Accede directamente a los productos con precio promocional
            disponibles en el catálogo.
          </p>
        </div>

        <Link
          to="/productos?ofertas=true"
          className="ofertas-boton ofertas-boton-claro"
        >
          Ver ofertas <FaArrowRight />
        </Link>
      </section>

      {/* INFORMACIÓN */}
      <section className="container ofertas-confianza">
        <FaShieldAlt />
        <p>
          Revisa el precio, la disponibilidad y la garantía indicada
          en la ficha de cada producto antes de realizar tu compra.
        </p>
      </section>
    </main>
  );
}

export default Ofertas;
