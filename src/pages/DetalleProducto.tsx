
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaShieldAlt,
  FaShoppingCart,
  FaTag,
  FaTimesCircle,
} from "react-icons/fa";
import type { ProductoCarrito } from "../App";
import "./DetalleProducto.css";

interface ProductoDetalle {
  id: number;
  nombre: string;
  categoria: string;
  descripcion: string;
  precio: number;
  precioOferta?: number;
  garantia: string;
  imagen: string;
  disponible: boolean;
}

interface Props {
  agregarAlCarrito: (producto: ProductoCarrito) => void;
}

function formatoPrecio(precio: number): string {
  return precio.toLocaleString("es-PE", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function DetalleProducto({ agregarAlCarrito }: Props) {
  const location = useLocation();
  const navigate = useNavigate();

  const producto = location.state?.producto as
    | ProductoDetalle
    | undefined;

  // Si alguien abre la ruta sin seleccionar un producto,
  // regresamos al catálogo para evitar una ficha vacía.
  if (!producto) {
    return (
      <main className="detalle-producto-pagina">
        <section className="detalle-no-encontrado">
          <h1>Selecciona un producto</h1>
          <p>
            Entra al catálogo y selecciona el producto que deseas consultar.
          </p>
          <button
            type="button"
            onClick={() => navigate("/productos")}
          >
            <FaArrowLeft /> Volver al catálogo
          </button>
        </section>
      </main>
    );
  }

  const tieneOferta =
    producto.precioOferta !== undefined &&
    producto.precioOferta > 0 &&
    producto.precioOferta < producto.precio;

  const precioFinal = tieneOferta
    ? producto.precioOferta!
    : producto.precio;

  const porcentajeDescuento = tieneOferta
    ? Math.round(
        ((producto.precio - precioFinal) / producto.precio) * 100
      )
    : 0;

  const manejarAgregar = () => {
    if (!producto.disponible) return;

    agregarAlCarrito({
      id: producto.id,
      nombre: producto.nombre,
      precio: precioFinal,
      imagen: producto.imagen,
    });

    navigate("/carrito");
  };

  return (
    <main className="detalle-producto-pagina">
      <div className="container detalle-producto-contenedor">
        <button
          type="button"
          className="detalle-volver"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft />
          Volver al catálogo
        </button>

        <div className="detalle-producto-panel">
          {/* IMAGEN */}
          <section className="detalle-producto-galeria">
            <div className="detalle-producto-imagen">
              <img src={producto.imagen} alt={producto.nombre} />
            </div>

            {tieneOferta && (
              <span className="detalle-etiqueta-oferta">
                <FaTag />
                {porcentajeDescuento}% de descuento
              </span>
            )}
          </section>

          {/* INFORMACIÓN */}
          <section className="detalle-producto-informacion">
            <span className="detalle-categoria">
              {producto.categoria}
            </span>

            <h1>{producto.nombre}</h1>

            <p className="detalle-descripcion">
              {producto.descripcion}
            </p>

            <div className="detalle-disponibilidad">
              {producto.disponible ? (
                <>
                  <FaCheckCircle />
                  <span>Producto disponible</span>
                </>
              ) : (
                <>
                  <FaTimesCircle />
                  <span>Producto no disponible actualmente</span>
                </>
              )}
            </div>

            <div className="detalle-separador" />

            {/* PRECIO */}
            <div className="detalle-precios">
              {tieneOferta && (
                <>
                  <span className="detalle-precio-anterior">
                    Precio anterior: S/ {formatoPrecio(producto.precio)}
                  </span>

                  <span className="detalle-ahorro">
                    Ahorras S/ {formatoPrecio(producto.precio - precioFinal)}
                  </span>
                </>
              )}

              <span className="detalle-precio-etiqueta">
                {tieneOferta ? "Precio promocional" : "Precio"}
              </span>

              <strong className="detalle-precio-actual">
                S/ {formatoPrecio(precioFinal)}
              </strong>
            </div>

            {/* GARANTÍA */}
            <div className="detalle-garantia">
              <FaShieldAlt />

              <div>
                <strong>Garantía del producto</strong>
                <p>{producto.garantia}</p>
              </div>
            </div>

            {/* BOTÓN */}
            <button
              type="button"
              className="detalle-boton-agregar"
              disabled={!producto.disponible}
              onClick={manejarAgregar}
            >
              <FaShoppingCart />
              {producto.disponible
                ? "Agregar al carrito"
                : "Producto no disponible"}
            </button>

            <p className="detalle-nota">
              Verifica las características, el precio y la garantía
              antes de continuar con tu compra.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

export default DetalleProducto;
