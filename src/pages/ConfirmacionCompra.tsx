
import { Link, useLocation } from "react-router-dom";
import {
  FaCheckCircle,
  FaFacebook,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaLaptopCode,
  FaArrowRight,
  FaHome,
} from "react-icons/fa";
import type { ProductoCarrito } from "../App";
import "./ConfirmacionCompra.css";

interface DatosConfirmacion {
  productos: ProductoCarrito[];
  total: number;
  fecha: string;
}

function formatoPrecio(precio: number) {
  return precio.toLocaleString("es-PE", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function ConfirmacionCompra() {
  const location = useLocation();

  const datos = location.state as DatosConfirmacion | null;

  const whatsappEmpresa = "https://wa.me/51947792061";

  const facebookEmpresa =
    "https://www.facebook.com/FCElectroPERU/?locale=es_LA";

  const ubicacionMaps =
    "https://www.google.com/maps/search/?api=1&query=Ubicentro%2C+Calle+San+Jos%C3%A9+755%2C+Chiclayo%2C+Per%C3%BA";

  const mensajeDesarrollador =
    "Hola, vi tu sección de desarrollo web en FC ELECTRO y me gustaría conocer tus servicios.";

  const whatsappDesarrollador =
    `https://wa.me/51964618454?text=${encodeURIComponent(mensajeDesarrollador)}`;

  const productos = datos?.productos ?? [];

  return (
    <main className="confirmacion-page">
      <div className="confirmacion-container">
        <section className="confirmacion-hero">
          <div className="confirmacion-icono">
            <FaCheckCircle />
          </div>

          <span className="confirmacion-etiqueta">
            SIMULACIÓN COMPLETADA
          </span>

          <h1>
            ¡Gracias por visitar <span>FC ELECTRO!</span>
          </h1>

          <p className="confirmacion-intro">
            Has completado el flujo demostrativo de compra. A continuación
            encontrarás el resumen de tu pedido y los canales de contacto
            de la empresa.
          </p>
        </section>

        <section className="confirmacion-aviso">
          <FaCheckCircle />

          <div>
            <strong>Esta compra es únicamente una demostración</strong>
            <p>
              No se ha procesado ningún pago, no se ha realizado ningún
              cargo y no se ha generado una transacción bancaria real.
            </p>
          </div>
        </section>

        <section className="confirmacion-panel">
          <div className="confirmacion-panel-cabecera">
            <div>
              <span className="confirmacion-subtitulo">FC ELECTRO</span>
              <h2 className="confirmacion-titulo-panel">
                Resumen de la compra
              </h2>
            </div>

            <span className="confirmacion-badge-demo">DEMO</span>
          </div>

          {productos.length > 0 ? (
            <>
              <div className="confirmacion-lista">
                {productos.map((producto, indice) => (
                  <article
                    className="confirmacion-producto"
                    key={`${producto.id}-${indice}`}
                  >
                    <div className="confirmacion-producto-imagen">
                      <img
                        src={producto.imagen}
                        alt={producto.nombre}
                        onError={(event) => {
                          event.currentTarget.style.visibility = "hidden";
                        }}
                      />
                    </div>

                    <div className="confirmacion-producto-info">
                      <h3>{producto.nombre}</h3>
                      <span>Artículo seleccionado</span>
                    </div>

                    <strong>
                      S/ {formatoPrecio(producto.precio)}
                    </strong>
                  </article>
                ))}
              </div>

              <div className="confirmacion-total">
                <span>Total referencial</span>
                <strong>S/ {formatoPrecio(datos?.total ?? 0)}</strong>
              </div>

              {datos?.fecha && (
                <p className="confirmacion-fecha">
                  Fecha de la simulación: {datos.fecha}
                </p>
              )}
            </>
          ) : (
            <div className="confirmacion-sin-datos">
              <p>
                No hay un resumen de compra disponible en esta sesión.
                Puedes regresar al catálogo para explorar los productos.
              </p>

              <Link to="/productos" className="confirmacion-enlace-catalogo">
                Explorar catálogo <FaArrowRight />
              </Link>
            </div>
          )}
        </section>

        <section className="confirmacion-seccion-contacto">
          <div className="confirmacion-seccion-encabezado">
            <span className="confirmacion-subtitulo">ESTAMOS PARA AYUDARTE</span>
            <h2>Contacta con FC ELECTRO</h2>
            <p>
              Para consultas sobre productos, disponibilidad o entregas,
              utiliza los canales oficiales de la empresa.
            </p>
          </div>

          <div className="confirmacion-contactos">
            <a
              className="confirmacion-contacto confirmacion-contacto-whatsapp"
              href={whatsappEmpresa}
              target="_blank"
              rel="noreferrer"
            >
              <span className="confirmacion-contacto-icono">
                <FaWhatsapp />
              </span>

              <span>
                <strong>WhatsApp</strong>
                <small>+51 947 792 061</small>
              </span>

              <FaArrowRight className="confirmacion-contacto-flecha" />
            </a>

            <a
              className="confirmacion-contacto confirmacion-contacto-facebook"
              href={facebookEmpresa}
              target="_blank"
              rel="noreferrer"
            >
              <span className="confirmacion-contacto-icono">
                <FaFacebook />
              </span>

              <span>
                <strong>Facebook</strong>
                <small>FC ELECTRO Perú</small>
              </span>

              <FaArrowRight className="confirmacion-contacto-flecha" />
            </a>

            <a
              className="confirmacion-contacto confirmacion-contacto-mapa"
              href={ubicacionMaps}
              target="_blank"
              rel="noreferrer"
            >
              <span className="confirmacion-contacto-icono">
                <FaMapMarkerAlt />
              </span>

              <span>
                <strong>Ubicación</strong>
                <small>Ubicentro, Calle San José 755, Chiclayo</small>
              </span>

              <FaArrowRight className="confirmacion-contacto-flecha" />
            </a>
          </div>

          <a
            className="confirmacion-mapa"
            href={ubicacionMaps}
            target="_blank"
            rel="noreferrer"
          >
            <FaMapMarkerAlt />
            Ver ubicación en Google Maps
            <FaArrowRight />
          </a>
        </section>

        <section className="confirmacion-desarrollador">
          <div className="confirmacion-desarrollador-icono">
            <FaLaptopCode />
          </div>

          <span className="confirmacion-desarrollador-etiqueta">
            ¿NECESITAS UNA PÁGINA WEB?
          </span>

          <h2>
            Tu negocio también puede tener presencia digital.
          </h2>

          <p>
            Desarrollo de páginas web modernas, adaptables a celulares y
            computadoras, con catálogos, presentación de productos y
            funcionalidades personalizadas.
          </p>

          <a
            href={whatsappDesarrollador}
            target="_blank"
            rel="noreferrer"
            className="confirmacion-boton-desarrollador"
          >
            <FaWhatsapp /> Consultar servicios web <FaArrowRight />
          </a>

          <p className="confirmacion-numero-desarrollador">
            Contacto del desarrollador: +51 964 618 454
          </p>
        </section>

        <div className="confirmacion-regreso">
          <Link to="/inicio" className="confirmacion-boton-inicio">
            <FaHome /> Volver al inicio
          </Link>

          <Link to="/productos" className="confirmacion-boton-catalogo">
            Seguir explorando <FaArrowRight />
          </Link>
        </div>
      </div>
    </main>
  );
}

export default ConfirmacionCompra;
