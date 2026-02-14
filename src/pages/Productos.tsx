import { useState } from "react";
import type { ProductoCarrito } from "../App";

// 🔥 IMPORTAR IMÁGENES LOCALES
import Acer from "../assets/productos/Acer.jpg";
import Asus from "../assets/productos/Asus.jpg";
import Lenovo from "../assets/productos/Lenovo.jpg";
import Tcl from "../assets/productos/Tcl.jpg";
import Tlc2 from "../assets/productos/Tlc2.jpg";
import Jvc from "../assets/productos/Jvc.jpg";
import iphone14 from "../assets/productos/iphone14.jpg";
import iphone15 from "../assets/productos/iphone15.jpg";
import Zflip4 from "../assets/productos/Zflip4.jpg";
import mac from "../assets/productos/mac.jpg";
import acer1 from "../assets/productos/acer1.jpg";
import lenovo1 from "../assets/productos/lenovo1.jpg";
import lenovo2 from "../assets/productos/lenovo2.jpg";
import hp from "../assets/productos/hp.jpg";
import lenovo3 from "../assets/productos/lenovo3.jpg";
import acer2 from "../assets/productos/acer2.jpg";
import asus1 from "../assets/productos/asus1.jpg";
import lenovo4 from "../assets/productos/lenovo4.jpg";
import oppo from "../assets/productos/oppo.jpg";
import honor1 from "../assets/productos/honor1.jpg";
import honor2 from "../assets/productos/honor2.jpg";
import samsung1 from "../assets/productos/samsung1.jpg";
import honor3 from "../assets/productos/honor3.jpg";
import samsung2 from "../assets/productos/samsung2.jpg";
import honor4 from "../assets/productos/honor4.jpg";
import redmi1 from "../assets/productos/redmi1.jpg";
import motorola1 from "../assets/productos/motorola1.jpg";
import hyundai from "../assets/productos/hyundai.jpg";
import lgtv from "../assets/productos/lgtv.jpg";
import hisense1 from "../assets/productos/hisense1.jpg";
import tasamsung1 from "../assets/productos/tasamsung1.jpg";
import talenovo1 from "../assets/productos/talenovo1.jpg";
import taredmi1 from "../assets/productos/taredmi1.jpg";
import ipad1 from "../assets/productos/ipad1.jpg";
import taadvance1 from "../assets/productos/taadvance1.jpg";
import xboom1 from "../assets/productos/xboom1.jpg";
import xboom2 from "../assets/productos/xboom2.jpg";
import sony1 from "../assets/productos/sony1.jpg";
import torre1 from "../assets/productos/torre1.jpg";
import parasonic1 from "../assets/productos/parasonic1.jpg";
import parla3 from "../assets/productos/parla3.jpg";
import ps41 from "../assets/productos/ps41.jpg";
import ps42 from "../assets/productos/ps42.jpg";
import ps43 from "../assets/productos/ps43.jpg";
import ps51 from "../assets/productos/ps51.jpg";
import ps52 from "../assets/productos/ps52.jpg";
import nintendo1 from "../assets/productos/nintendo1.jpg";
import canon1 from "../assets/productos/canon1.jpg";
import canon2 from "../assets/productos/canon2.jpg";
import nikon1 from "../assets/productos/nikon1.jpg";
import pc1 from "../assets/productos/pc1.jpg";
import pc2 from "../assets/productos/pc2.jpg";
import pc3 from "../assets/productos/pc3.jpg";
import epson1 from "../assets/productos/epson1.jpg";
import epson2 from "../assets/productos/epson2.jpg";
import brother1 from "../assets/productos/brother1.jpg";
import gen1 from "../assets/productos/gen1.jpg";
import taladro1 from "../assets/productos/taladro1.jpg";
import taladro2 from "../assets/productos/taladro2.jpg";

interface Props {
  agregarAlCarrito: (producto: ProductoCarrito) => void;
}

interface Producto {
  id: number;
  nombre: string;
  categoria: string;
  descripcion: string;
  precio: number;
  garantia: string;
  imagen: string;
  disponible: boolean;
}

function Productos({ agregarAlCarrito }: Props) {
  const [busqueda, setBusqueda] = useState("");
  const [filtro, setFiltro] = useState("Todos");

  const productos: Producto[] = [

    // ================= LAPTOPS (12 TOTAL) =================
    { id: 1, nombre: "Laptop Gamer Acer Nitro V15", categoria: "Laptops", descripcion: "8GB RAM - 512GB SSD", precio: 2100, garantia: "3 meses de garantía oficial", imagen: Acer, disponible: true },
    { id: 2, nombre: "Laptop Asus TUF Gaming F15", categoria: "Laptops", descripcion: "8GB RAM - 512GB SSD", precio: 2200, garantia: "3 meses de garantía oficial", imagen: Asus, disponible: true },
    { id: 3, nombre: "Laptop Lenovo V15 G3 IAP", categoria: "Laptops", descripcion: "8GB RAM - 512GB SSD", precio: 1050, garantia: "3 meses de garantía oficial", imagen: Lenovo, disponible: false },
    { id: 4, nombre: "Laptop Macbook Air A2336 M1", categoria: "Laptops", descripcion: "8GB RAM - 256GB SSD", precio: 2100, garantia: "3 meses de garantía oficial", imagen: mac, disponible: true },
    { id: 5, nombre: "Laptop Acer Nitro 5 N22C1", categoria: "Laptops", descripcion: "8GB RAM - 512 SSD", precio: 2250, garantia: "3 meses de garantía oficial", imagen: acer1, disponible: true },
    { id: 6, nombre: "Laptop Lenovo Ideapad 3 15IAH8", categoria: "Laptops", descripcion: "8GB RAM - 512GB SSD", precio: 1250, garantia: "3 meses de garantía oficial", imagen: lenovo1, disponible: true },
    { id: 7, nombre: "Laptop Lenovo Ideapad 3 15ADA05", categoria: "Laptops", descripcion: "8GB RAM - 256GB SSD", precio: 1200, garantia: "3 meses de garantía oficial", imagen: lenovo2, disponible: true },
    { id: 8, nombre: "Laptop HP FC0079LA", categoria: "Laptops", descripcion: "8GB RAM - 512GB SSD", precio: 1300, garantia: "3 meses de garantía oficial", imagen: hp, disponible: true },
    { id: 9, nombre: "Laptop Lenovo V15G13/8217", categoria: "Laptops", descripcion: "8GB RAM - 512GB SSD", precio: 990, garantia: "3 meses de garantía oficial", imagen: lenovo3, disponible: true },
    { id: 10, nombre: "Laptop Acer Aspire GO 15", categoria: "Laptops", descripcion: "8GB RAM - 128GB SSD", precio: 1080, garantia: "3 meses de garantía oficial", imagen: acer2, disponible: true },
    { id: 11, nombre: "Laptop Asus X1605ZA", categoria: "Laptops", descripcion: "8GB RAM - 512GB SSD", precio: 1300, garantia: "3 año de garantía oficial", imagen: asus1, disponible: true },
    { id: 12, nombre: "Laptop Lenovo V15-IIL", categoria: "Laptops", descripcion: "8GB RAM - 240 SSD", precio: 1300, garantia: "3 año de garantía oficial", imagen: lenovo4, disponible: true },

    // ================= TELEVISORES (6 TOTAL) =================
    { id: 13, nombre: "TCL 55 Google TV", categoria: "Televisores", descripcion: "Smart TV 4K UHD", precio: 1120, garantia: "3 meses de garantía oficial", imagen: Tcl, disponible: true },
    { id: 14, nombre: "TCL 50 Google TV", categoria: "Televisores", descripcion: "Smart TV 4K UHD", precio: 990, garantia: "3 meses de garantía oficial", imagen: Tlc2, disponible: false },
    { id: 15, nombre: "JVC 50 Google TV", categoria: "Televisores", descripcion: "Smart TV 4K UHD", precio: 850, garantia: "3 meses de garantía oficial", imagen: Jvc, disponible: true },
    { id: 16, nombre: "HYUNDAI 43 LED TV", categoria: "Televisores", descripcion: "Smart TV 4K", precio: 500, garantia: "3 meses de garantía oficial", imagen: hyundai, disponible: true },
    { id: 17, nombre: "LG 50 Smart 4K TV", categoria: "Televisores", descripcion: "Smart TV 4K", precio: 1000, garantia: "3 meses de garantía oficial", imagen: lgtv, disponible: true },
    { id: 18, nombre: "Hisense UHD 4K TV", categoria: "Televisores", descripcion: "Smart TV 4K UHD", precio: 800, garantia: "3 meses de garantía oficial", imagen: hisense1, disponible: true },

    // ================= CELULARES (12 TOTAL) =================
    { id: 19, nombre: "iPhone 14", categoria: "Celulares", descripcion: "128GB - Cámara 12MP", precio: 1890, garantia: "12 días de garantía oficial", imagen: iphone14, disponible: true },
    { id: 20, nombre: "iPhone 15", categoria: "Celulares", descripcion: "128GB - Cámara 48MP", precio: 2200, garantia: "12 días de garantía oficial", imagen: iphone15, disponible: true },
    { id: 21, nombre: "Samsung Z Flip 4", categoria: "Celulares", descripcion: "8GB RAM - 256GB", precio: 1450, garantia: "12 días de garantía oficial", imagen: Zflip4, disponible: false },
    { id: 22, nombre: "Oppo A60", categoria: "Celulares", descripcion: "8GB RAM - 256GB", precio: 400, garantia: "12 días de garantía oficial", imagen: oppo, disponible: true },
    { id: 23, nombre: "Honor X7C", categoria: "Celulares", descripcion: "8GB RAM - 256GB", precio: 500, garantia: "12 días de garantía oficial", imagen: honor1, disponible: true },
    { id: 24, nombre: "Honor X6A", categoria: "Celulares", descripcion: "4GB RAM - 128GB", precio: 400, garantia: "12 días de garantía oficial", imagen: honor2, disponible: true },
    { id: 25, nombre: "Samsung A36", categoria: "Celulares", descripcion: "8GB RAM - 256GB", precio: 930, garantia: "12 días de garantía oficial", imagen: samsung1, disponible: true },
    { id: 26, nombre: "Honor 200 Lite", categoria: "Celulares", descripcion: "8GB RAM - 256GB", precio: 650, garantia: "12 días de garantía oficial", imagen: honor3, disponible: true },
    { id: 27, nombre: "Samsung A25 5G", categoria: "Celulares", descripcion: "8GB RAM - 256GB", precio: 550, garantia: "12 días de garantía oficial", imagen: samsung2, disponible: true },
    { id: 28, nombre: "Honor Magic 7 Lite", categoria: "Celulares", descripcion: "8GB RAM - 256GB", precio: 950, garantia: "12 días de garantía oficial", imagen: honor4, disponible: true },
    { id: 29, nombre: "Redmi 14C", categoria: "Celulares", descripcion: "4GB RAM - 128GB", precio: 480, garantia: "12 días de garantía oficial", imagen: redmi1, disponible: true },
    { id: 30, nombre: "Motorola G53 5G", categoria: "Celulares", descripcion: "4GB RAM - 256GB", precio: 450, garantia: "12 días de garantía oficial", imagen: motorola1, disponible: true },

    // ================= TABLETS (5) =================
    { id: 31, nombre: "Tablet Samsung TAB S9", categoria: "Tablets", descripcion: "128GB - 10.9 pulgadas", precio: 1390, garantia: "2 meses de garantía oficial", imagen: tasamsung1, disponible: true },
    { id: 32, nombre: "Tablet Lenovo TAB 11", categoria: "Tablets", descripcion: "128GB - 6 RAM", precio: 750, garantia: "2 meses de garantía oficial", imagen: talenovo1, disponible: true },
    { id: 33, nombre: "Tablet Redmi PAD", categoria: "Tablets", descripcion: "128GB - 8.7 pulgadas", precio: 480, garantia: "2 meses de garantía oficial", imagen: taredmi1, disponible: true },
    { id: 34, nombre: "IPAD 8TH", categoria: "Tablets", descripcion: "128GB - 3 RAM", precio: 800, garantia: "2 meses de garantía oficial", imagen: ipad1, disponible: true },
    { id: 35, nombre: "Tablet Advance Prime", categoria: "Tablets", descripcion: "128GB - 4 RAM", precio: 350, garantia: "2 meses de garantía oficial", imagen: taadvance1, disponible: true },

    // ================= SONIDOS (6) =================
    { id: 37, nombre: "Equipo LG CJ45", categoria: "Sonidos", descripcion: "750 Watts", precio: 550, garantia: "2 meses de garantía oficial", imagen: xboom1, disponible: true },
    { id: 38, nombre: "Minicomponente LG XBOOM CL98", categoria: "Sonidos", descripcion: "3500 Watts", precio: 1400, garantia: "2 meses de garantía oficial", imagen: xboom2, disponible: true },
    { id: 39, nombre: "Minicomponente Sony Shake X30D", categoria: "Sonidos", descripcion: "1200 Watts", precio: 1500, garantia: "2 meses de garantía oficial", imagen: sony1, disponible: true },
    { id: 40, nombre: "Torre De Sonido Bluetooth XBOOM RN5", categoria: "Sonidos", descripcion: "750 Watts", precio: 500, garantia: "2 meses de garantía oficial", imagen: torre1, disponible: true },
    { id: 41, nombre: "Minicomponente Parasonic AKX-930", categoria: "Sonidos", descripcion: "2200 Watts", precio: 1050, garantia: "2 meses de garantía oficial", imagen: parasonic1, disponible: true },
    { id: 42, nombre: "Parlante Activo Halion ", categoria: "Sonidos", descripcion: "1500 Watts", precio: 900, garantia: "2 meses de garantía oficial", imagen: parla3, disponible: true },

    // ================= CONSOLAS (6) =================
    { id: 43, nombre: "PlayStation 4 Slim", categoria: "Consolas", descripcion: "1TB + 1 mando + 1 disco", precio: 750, garantia: "3 meses de garantía oficial", imagen: ps41, disponible: true },
    { id: 44, nombre: "PlayStation 4 Slim", categoria: "Consolas", descripcion: "1TB + 2 mandos + 2 discos", precio: 850, garantia: "3 meses de garantía oficial", imagen: ps42, disponible: true },
    { id: 45, nombre: "PlayStation 5", categoria: "Consolas", descripcion: "825 GB + 1 mando + 3 discos", precio: 1850, garantia: "3 meses de garantía oficial", imagen: ps51, disponible: true },
    { id: 46, nombre: "PlayStation 5 Slim", categoria: "Consolas", descripcion: "1TB + 1 mando", precio: 1600, garantia: "3 meses de garantía oficial", imagen: ps52, disponible: true },
    { id: 47, nombre: "Nintendo Switch Neón", categoria: "Consolas", descripcion: "256GB", precio: 850, garantia: "3 meses de garantía oficial", imagen: nintendo1, disponible: true },
    { id: 48, nombre: "PlayStation 4 Slim", categoria: "Consolas", descripcion: "1TB + 1 mando + 3 discos", precio: 750, garantia: "3 meses de garantía oficial", imagen: ps43, disponible: true },

    // ================= CAMARAS (3) =================
    { id: 49, nombre: "Camara Canon EOS REBEL T100", categoria: "Camaras", descripcion: "24MP - Full HD", precio: 1300, garantia: "1 mes de garantía oficial", imagen: canon1, disponible: true },
    { id: 50, nombre: "Camara Canon EOS 750D", categoria: "Camaras", descripcion: "24MP - Full HD", precio: 1550, garantia: "1 mes de garantía oficial", imagen: canon2, disponible: true },
    { id: 51, nombre: "Camara Nikon D3400", categoria: "Camaras", descripcion: "24MP - 4K", precio: 850, garantia: "1 mes de garantía oficial", imagen: nikon1, disponible: true },
   
    // ================= COMPUTADORAS (3) =================
    { id: 55, nombre: "PC Completa Corei7 3era Gen", categoria: "Computadoras", descripcion: "8GB RAM - 1TB HDD", precio: 850, garantia: "3 meses de garantía oficial", imagen: pc1, disponible: true },
    { id: 56, nombre: "PC HP Pro Mini 400 G9 Corei7 14TH", categoria: "Computadoras", descripcion: "32GB RAM - 1TB SSD", precio: 2100, garantia: "3 meses de garantía oficial", imagen: pc2, disponible: true },
    { id: 57, nombre: "PC Game Completa Corei5 11TH", categoria: "Computadoras", descripcion: "16GB RAM - 240GB SSD", precio: 1800, garantia: "3 meses de garantía oficial", imagen: pc3, disponible: true },

    // ================= IMPRESORAS (3) =================
    { id: 58, nombre: "Impresora Epson L3250", categoria: "Impresoras", descripcion: "WiFi - Láser", precio: 500, garantia: "1 mes de garantía oficial", imagen: epson1, disponible: true },
    { id: 59, nombre: "Impresora Multifuncional Epson ECOTANK L3150", categoria: "Impresoras", descripcion: "Conectividad WIFI", precio: 450, garantia: "1 mes de garantía oficial", imagen: epson2, disponible: true },
    { id: 60, nombre: "Impresora Brother T420", categoria: "Impresoras", descripcion: "Multifuncional WiFi", precio: 500, garantia: "1 mes de garantía oficial", imagen: brother1, disponible: true },

    // ================= OTROS (3 TALADROS) =================
    { id: 61, nombre: "Generador Electrico Monofasico", categoria: "Otros", descripcion: "3500 Watts 220V", precio: 970, garantia: "2 meses de garantía oficial", imagen: gen1, disponible: true },
    { id: 62, nombre: "Taladro Percutor Stanley STDH8013KA ", categoria: "Otros", descripcion: "800 Watts", precio: 150, garantia: "2 meses de garantía oficial", imagen: taladro1, disponible: true },
    { id: 63, nombre: "Taladro Percutor Electrifo Bauker ", categoria: "Otros", descripcion: "650 Watts", precio: 170, garantia: "2 meses de garantía oficial", imagen: taladro2, disponible: true },

  ];

  const productosFiltrados = productos.filter((producto) => {
    const coincideBusqueda = producto.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());

    const coincideCategoria =
      filtro === "Todos" || producto.categoria === filtro;

    return coincideBusqueda && coincideCategoria;
  });

  return (
    <div className="container my-5">
      <h2 className="mb-4">Nuestros Productos</h2>

      <div className="row mb-4">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar producto..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>

        <div className="col-md-4">
          <select
            className="form-select"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
          >
            <option value="Todos">Todos</option>
            <option value="Laptops">Laptops</option>
            <option value="Televisores">Televisores</option>
            <option value="Celulares">Celulares</option>
            <option value="Tablets">Tablets</option>
            <option value="Sonidos">Sonidos</option>
            <option value="Consolas">Consolas</option>
            <option value="Camaras">Cámaras</option>
            <option value="Computadoras">Computadoras</option>
            <option value="Impresoras">Impresoras</option>
            <option value="Otros">Otros</option>
          </select>
        </div>
      </div>

      <div className="row g-4">
        {productosFiltrados.map((producto) => (
          <div className="col-md-4" key={producto.id}>
            <div className="card shadow-sm h-100">
              <img
                src={producto.imagen}
                className="card-img-top"
                alt={producto.nombre}
                style={{ height: "220px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5>{producto.nombre}</h5>
                <p className="text-muted">{producto.descripcion}</p>
                <p className="text-secondary small">🛡 {producto.garantia}</p>
                <h6 className="fw-bold">S/ {producto.precio}</h6>

                {producto.disponible ? (
                  <span className="badge bg-success mb-2">Disponible</span>
                ) : (
                  <span className="badge bg-danger mb-2">Vendido</span>
                )}

                <button
                  className="btn btn-primary mt-auto"
                  disabled={!producto.disponible}
                  onClick={() =>
                    agregarAlCarrito({
                      id: producto.id,
                      nombre: producto.nombre,
                      precio: producto.precio,
                      imagen: producto.imagen,
                    })
                  }
                >
                  Agregar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {productosFiltrados.length === 0 && (
        <p className="mt-4">No se encontraron productos.</p>
      )}
    </div>
  );
}

export default Productos;
