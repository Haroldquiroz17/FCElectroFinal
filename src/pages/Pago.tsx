
import { Link, useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaArrowRight,
  FaLock,
  FaShieldAlt,
} from "react-icons/fa";
import type { ProductoCarrito } from "../App";
import "./Pago.css";

interface Props {
  carrito: ProductoCarrito[];
  vaciarCarrito: () => void;
}

function formatoPrecio(precio: number) {
  return precio.toLocaleString("es-PE", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function Pago({ carrito, vaciarCarrito }: Props) {
  const navigate = useNavigate();

  const subtotal = carrito.reduce(
    (total, producto) => total + producto.precio,
    0
  );

  const confirmarSimulacion = () => {
    if (carrito.length === 0) {
      navigate("/carrito");
      return;
    }

    const resumen = {
      productos: carrito.map((producto) => ({ ...producto })),
      total: subtotal,
      fecha: new Date().toLocaleString("es-PE"),
    };

    vaciarCarrito();

    navigate("/confirmacion", {
      state: resumen,
    });
  };

  if (carrito.length === 0) {
    return (
      <main className="pago-page">
        <section className="pago-vacio">
          <h1>No hay productos para pagar</h1>

          <p>
            Primero agrega productos al carrito para continuar con la
            simulación de compra.
          </p>

          <Link to="/productos" className="pago-boton-principal">
            Ir al catálogo <FaArrowRight />
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="pago-page">
      <div className="pago-container">
        <Link to="/carrito" className="pago-volver">
          <FaArrowLeft /> Volver al carrito
        </Link>

        <header className="pago-encabezado">
          <span className="pago-eyebrow">FC ELECTRO</span>
          <h1>Finaliza tu pedido</h1>
          <p>Revisa el resumen y completa la demostración.</p>
        </header>

        <div className="pago-aviso">
          <FaShieldAlt />
          <div>
            <strong>Entorno de demostración</strong>
            <p>
              Esta pantalla no procesa pagos ni se conecta a un banco.
              No introduzcas datos de tarjetas reales.
            </p>
          </div>
        </div>

        <div className="pago-layout">
          <section className="pago-panel">
            <h2 className="pago-panel-titulo">Método de pago demostrativo</h2>

            <div className="pago-tarjeta">
              <div className="pago-tarjeta-superior">
                <div className="pago-tarjeta-logo">
                  FC <span>ELECTRO</span>
                </div>

                <FaLock className="pago-tarjeta-candado" />
              </div>

              <div className="pago-chip" aria-hidden="true">
                <span />
              </div>

              <div className="pago-tarjeta-numero">
                0000 0000 0000 0000
              </div>

              <div className="pago-tarjeta-pie">
                <div>
                  <span className="pago-tarjeta-etiqueta">TITULAR</span>
                  <strong>USUARIO DEMO</strong>
                </div>

                <div>
                  <span className="pago-tarjeta-etiqueta">VENCIMIENTO</span>
                  <strong>00/00</strong>
                </div>

                <div className="pago-tarjeta-marca">DEMO</div>
              </div>
            </div>

            <div className="pago-seguridad">
              <FaShieldAlt />
              <p>
                La tarjeta que ves es una ilustración ficticia. No hay
                campos para introducir datos financieros.
              </p>
            </div>

            <h2 className="pago-resumen-titulo">Productos seleccionados</h2>

            <div className="pago-productos">
              {carrito.map((producto, indice) => (
                <article
                  className="pago-producto"
                  key={`${producto.id}-${indice}`}
                >
                  <div className="pago-producto-imagen">
                    <img
                      src={producto.imagen}
                      alt={producto.nombre}
                      onError={(event) => {
                        event.currentTarget.style.visibility = "hidden";
                      }}
                    />
                  </div>

                  <div className="pago-producto-info">
                    <h3>{producto.nombre}</h3>
                    <span>Unidad seleccionada</span>
                  </div>

                  <strong>S/ {formatoPrecio(producto.precio)}</strong>
                </article>
              ))}
            </div>
          </section>

          <aside className="pago-panel pago-panel-resumen">
            <h2 className="pago-panel-titulo">Resumen del pedido</h2>

            <div className="pago-linea">
              <span>Productos</span>
              <strong>{carrito.length}</strong>
            </div>

            <div className="pago-linea">
              <span>Subtotal</span>
              <strong>S/ {formatoPrecio(subtotal)}</strong>
            </div>

            <div className="pago-linea">
              <span>Entrega</span>
              <strong>Por coordinar</strong>
            </div>

            <div className="pago-total">
              <span>Total referencial</span>
              <strong>S/ {formatoPrecio(subtotal)}</strong>
            </div>

            <button
              type="button"
              className="pago-boton-principal pago-boton-confirmar"
              onClick={confirmarSimulacion}
            >
              Confirmar compra simulada <FaArrowRight />
            </button>

            <Link to="/carrito" className="pago-boton-secundario">
              Revisar carrito
            </Link>

            <p className="pago-nota-final">
              Al confirmar, solo verás una pantalla de demostración.
              No se efectuará ningún cobro ni transacción financiera.
            </p>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default Pago;
