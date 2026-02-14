import { Link } from "react-router-dom";
import type { ProductoCarrito } from "../App";

interface Props {
  carrito: ProductoCarrito[];
  eliminarDelCarrito: (id: number) => void;
}

function Carrito({ carrito, eliminarDelCarrito }: Props) {
  const total = carrito.reduce((acc, producto) => acc + producto.precio, 0);

  if (carrito.length === 0) {
    return (
      <div className="container text-center my-5">
        <div style={{ fontSize: "80px" }}>🛒</div>
        <h3 className="mt-3">Tu carrito está vacío</h3>
        <p>Agrega productos para comenzar</p>

        <Link to="/productos" className="btn btn-primary mt-3">
          Ver productos
        </Link>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2 className="mb-4">Tu Carrito</h2>

      {carrito.map((producto) => (
        <div
          key={producto.id}
          className="d-flex align-items-center justify-content-between border rounded p-3 mb-3 shadow-sm"
        >
          <div className="d-flex align-items-center">
            <img
              src={producto.imagen}
              alt={producto.nombre}
              width="80"
              className="me-3 rounded"
            />

            <div>
              <h5 className="mb-1">{producto.nombre}</h5>
              <p className="mb-0">S/ {producto.precio}</p>
            </div>
          </div>

          {/* BOTÓN X */}
          <button
            className="btn btn-danger"
            onClick={() => eliminarDelCarrito(producto.id)}
          >
            X
          </button>
        </div>
      ))}

      <div className="text-end mt-4">
        <h4>Total: S/ {total}</h4>

        <button className="btn btn-success mt-2">
          Finalizar compra
        </button>
      </div>
    </div>
  );
}

export default Carrito;
