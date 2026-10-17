
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Portada from "./pages/Portada";
import Inicio from "./pages/Inicio";
import Productos from "./pages/Productos";
import DetalleProducto from "./pages/DetalleProducto";
import Carrito from "./pages/Carrito";
import Pago from "./pages/Pago";
import ConfirmacionCompra from "./pages/ConfirmacionCompra";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Ofertas from "./pages/Ofertas";
import SoporteTecnico from "./pages/SoporteTecnico";

export interface ProductoCarrito {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
}

function ContenidoApp() {
  const [carrito, setCarrito] = useState<ProductoCarrito[]>([]);
  const location = useLocation();

  // La portada no debe mostrar el navbar ni el footer.
  const mostrarLayout = location.pathname !== "/";

  const agregarAlCarrito = (producto: ProductoCarrito) => {
    setCarrito((actual) => [...actual, producto]);
  };

  const eliminarDelCarrito = (id: number) => {
    setCarrito((actual) => {
      const indice = actual.findIndex(
        (producto) => producto.id === id
      );

      if (indice === -1) {
        return actual;
      }

      return actual.filter((_, index) => index !== indice);
    });
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <>
      {mostrarLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Portada />} />

        <Route path="/inicio" element={<Inicio />} />

        <Route
          path="/productos"
          element={
            <Productos agregarAlCarrito={agregarAlCarrito} />
          }
        />

        <Route
          path="/producto/:id"
          element={
            <DetalleProducto agregarAlCarrito={agregarAlCarrito} />
          }
        />

        <Route
          path="/carrito"
          element={
            <Carrito
              carrito={carrito}
              eliminarDelCarrito={eliminarDelCarrito}
            />
          }
        />

        <Route
          path="/pago"
          element={
            <Pago
              carrito={carrito}
              vaciarCarrito={vaciarCarrito}
            />
          }
        />

        <Route
          path="/confirmacion"
          element={<ConfirmacionCompra />}
        />

        <Route path="/login" element={<Login />} />

        <Route path="/registro" element={<Registro />} />

        <Route path="/ofertas" element={<Ofertas />} />

        <Route path="/soporte" element={<SoporteTecnico />} />

        <Route
          path="*"
          element={<Navigate to="/inicio" replace />}
        />
      </Routes>

      {mostrarLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ContenidoApp />
    </BrowserRouter>
  );
}

export default App;
