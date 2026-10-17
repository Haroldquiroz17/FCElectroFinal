
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaArrowRight,
  FaShoppingCart,
  FaTrashAlt,
} from "react-icons/fa";
import type { ProductoCarrito } from "../App";
import "./Carrito.css";

interface Props {
  carrito: ProductoCarrito[];
  eliminarDelCarrito: (id: number) => void;
}

function formatoPrecio(precio: number) {
  return precio.toLocaleString("es-PE", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function Carrito({ carrito, eliminarDelCarrito }: Props) {
  const subtotal = carrito.reduce(
    (total, producto) => total + producto.precio,
    0
  );

  if (carrito.length === 0) {
    return (
      <main className="carrito-page">
        <div className="carrito-container">
          <section className="carrito-vacio">
            <div className="carrito-vacio-icono">
              <FaShoppingCart />
            </div>

            <span className="carrito-eyebrow">FC ELECTRO</span>

            <h1>Tu carrito está vacío</h1>

            <p>
              Todavía no has agregado productos. Explora nuestro catálogo
              y encuentra el equipo que necesitas.
            </p>

            <Link to="/productos" className="carrito-btn-principal">
              Explorar productos <FaArrowRight />
            </Link>

            <Link to="/inicio" className="carrito-volver">
              <FaArrowLeft /> Volver al inicio
            </Link>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="carrito-page">
      <div className="carrito-container">
        <Link to="/productos" className="carrito-volver">
          <FaArrowLeft /> Seguir comprando
        </Link>

        <header className="carrito-encabezado">
          <div>
            <span className="carrito-eyebrow">FC ELECTRO</span>
            <h1>Mi carrito</h1>
            <p>Revisa tus productos antes de continuar.</p>
          </div>

          <span className="carrito-contador">
            {carrito.length} {carrito.length === 1 ? "producto" : "productos"}
          </span>
        </header>

        <div className="carrito-layout">
          <section className="carrito-lista">
            {carrito.map((producto, indice) => (
              <article
                className="carrito-producto"
                key={`${producto.id}-${indice}`}
              >
                <div className="carrito-producto-imagen">
                  <img
                    src={producto.imagen}
                    alt={producto.nombre}
                    onError={(event) => {
                      event.currentTarget.style.visibility = "hidden";
                    }}
                  />
                </div>

                <div className="carrito-producto-info">
                  <span className="carrito-producto-etiqueta">
                    Producto seleccionado
                  </span>

                  <h2>{producto.nombre}</h2>

                  <p className="carrito-producto-precio">
                    S/ {formatoPrecio(producto.precio)}
                  </p>
                </div>

                <button
                  type="button"
                  className="carrito-eliminar"
                  onClick={() => eliminarDelCarrito(producto.id)}
                  aria-label={`Eliminar ${producto.nombre}`}
                  title="Eliminar producto"
                >
                  <FaTrashAlt />
                </button>
              </article>
            ))}
          </section>

          <aside className="carrito-resumen">
            <h2>Resumen del pedido</h2>

            <div className="carrito-resumen-linea">
              <span>Productos</span>
              <span>{carrito.length}</span>
            </div>

            <div className="carrito-resumen-linea">
              <span>Subtotal</span>
              <span>S/ {formatoPrecio(subtotal)}</span>
            </div>

            <div className="carrito-resumen-linea">
              <span>Entrega</span>
              <span>Por coordinar</span>
            </div>

            <div className="carrito-resumen-total">
              <span>Total referencial</span>
              <strong>S/ {formatoPrecio(subtotal)}</strong>
            </div>

            <Link to="/pago" className="carrito-btn-principal carrito-btn-pagar">
              Continuar al pago <FaArrowRight />
            </Link>

            <p className="carrito-nota">
              <FaShoppingCart /> La compra y el pago son demostrativos.
              No se realizará ningún cobro.
            </p>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default Carrito;
