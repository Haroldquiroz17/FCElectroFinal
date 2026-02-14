import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Inicio from "./pages/Inicio";
import Productos from "./pages/Productos";
import Carrito from "./pages/Carrito";
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

function App() {
  const [carrito, setCarrito] = useState<ProductoCarrito[]>([]);

  const agregarAlCarrito = (producto: ProductoCarrito) => {
    setCarrito([...carrito, producto]);
  };

  const eliminarDelCarrito = (id: number) => {
    setCarrito(carrito.filter((producto) => producto.id !== id));
  };

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Redirección inicial */}
        <Route path="/" element={<Navigate to="/inicio" />} />

        <Route path="/inicio" element={<Inicio />} />

        <Route
          path="/productos"
          element={<Productos agregarAlCarrito={agregarAlCarrito} />}
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

        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/ofertas" element={<Ofertas />} />
        <Route path="/soporte" element={<SoporteTecnico />} />

        {/* Ruta no encontrada */}
        <Route path="*" element={<Navigate to="/inicio" />} />
      </Routes>

      {/* FOOTER GLOBAL */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
