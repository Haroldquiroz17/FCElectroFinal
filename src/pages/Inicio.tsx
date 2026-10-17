
import { useNavigate } from "react-router-dom";
import {
  FaLaptop,
  FaTv,
  FaMobileAlt,
  FaTabletAlt,
  FaShieldAlt,
  FaTruck,
  FaHeadset,
  FaArrowRight,
  FaShoppingBag,
} from "react-icons/fa";
import "./Inicio.css";

const categorias = [
  {
    nombre: "Laptops",
    descripcion: "Potencia y rendimiento para cada tarea.",
    icono: FaLaptop,
    filtro: "laptops",
  },
  {
    nombre: "Televisores",
    descripcion: "Disfruta de tus contenidos favoritos.",
    icono: FaTv,
    filtro: "televisores",
  },
  {
    nombre: "Celulares",
    descripcion: "Conecta con todo lo que te importa.",
    icono: FaMobileAlt,
    filtro: "celulares",
  },
  {
    nombre: "Tablets",
    descripcion: "Tecnología y comodidad en tus manos.",
    icono: FaTabletAlt,
    filtro: "tablets",
  },
];

function Inicio() {
  const navigate = useNavigate();

  const irACategoria = (categoria: string) => {
    navigate(`/productos?categoria=${encodeURIComponent(categoria)}`);
  };

  return (
    <main className="inicio-page">
      {/* BANNER PRINCIPAL CON IMAGEN */}
      <section className="inicio-hero">
        <div className="inicio-hero-imagen" aria-hidden="true" />

        <div className="container inicio-hero-container">
          <div className="inicio-hero-content">
            <span className="inicio-etiqueta">
              <FaShoppingBag />
              BIENVENIDO A FC ELECTRO
            </span>

            <h1>
              Tecnología que impulsa
              <span> tu mundo.</span>
            </h1>

            <p>
              Explora nuestra selección de laptops, televisores,
              celulares y tablets. Encuentra tecnología para tu día a día.
            </p>

            <button
              type="button"
              className="inicio-btn-principal"
              onClick={() => navigate("/productos")}
            >
              Explorar catálogo
              <FaArrowRight />
            </button>

            <div className="inicio-hero-detalle">
              Calidad <span>•</span> Confianza <span>•</span> Tecnología
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORÍAS */}
      <section className="inicio-categorias container">
        <div className="inicio-seccion-titulo">
          <div>
            <span className="inicio-subtitulo">
              ENCUENTRA LO QUE BUSCAS
            </span>
            <h2>Explora nuestras categorías</h2>
            <p>
              Elige una categoría para descubrir los productos disponibles.
            </p>
          </div>

          <button
            type="button"
            className="inicio-link-catalogo"
            onClick={() => navigate("/productos")}
          >
            Ver catálogo <FaArrowRight />
          </button>
        </div>

        <div className="row g-4">
          {categorias.map((categoria) => {
            const Icono = categoria.icono;

            return (
              <div
                className="col-12 col-sm-6 col-lg-3"
                key={categoria.filtro}
              >
                <button
                  type="button"
                  className="categoria-card"
                  onClick={() => irACategoria(categoria.filtro)}
                  aria-label={`Ver productos de ${categoria.nombre}`}
                >
                  <div className="categoria-icono">
                    <Icono />
                  </div>

                  <h3>{categoria.nombre}</h3>
                  <p>{categoria.descripcion}</p>

                  <span className="categoria-enlace">
                    Ver productos <FaArrowRight />
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="inicio-beneficios">
        <div className="container">
          <div className="inicio-seccion-titulo inicio-beneficios-titulo">
            <div>
              <span className="inicio-subtitulo">
                COMPRA CON CONFIANZA
              </span>
              <h2>Una mejor experiencia de compra</h2>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-12 col-md-4">
              <article className="beneficio-card">
                <div className="beneficio-icono">
                  <FaShieldAlt />
                </div>
                <h3>Garantía</h3>
                <p>
                  Consulta las condiciones de garantía de cada producto.
                </p>
              </article>
            </div>

            <div className="col-12 col-md-4">
              <article className="beneficio-card">
                <div className="beneficio-icono">
                  <FaTruck />
                </div>
                <h3>Entrega de pedidos</h3>
                <p>
                  Consulta las opciones y condiciones de entrega disponibles.
                </p>
              </article>
            </div>

            <div className="col-12 col-md-4">
              <article className="beneficio-card">
                <div className="beneficio-icono">
                  <FaHeadset />
                </div>
                <h3>Atención al cliente</h3>
                <p>
                  Encuentra orientación para elegir la tecnología que necesitas.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* UBICACIÓN */}
      <section className="inicio-ubicacion container">
        <div className="inicio-seccion-titulo">
          <div>
            <span className="inicio-subtitulo">ENCUÉNTRANOS</span>
            <h2>Nuestra ubicación</h2>
            <p>Consulta nuestra ubicación en el mapa.</p>
          </div>
        </div>

        <div className="inicio-mapa">
          <iframe
            title="Ubicación de FC ELECTRO"
            src="https://www.google.com/maps?q=-6.7710615,-79.8390386&z=18&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </main>
  );
}

export default Inicio;
