import { FaCog, FaWhatsapp } from "react-icons/fa";

function SoporteTecnico() {
  return (
    <div className="container my-5">
      
      <div className="text-center mb-4">
        <FaCog size={50} className="text-primary mb-3" />
        <h2>Soporte Técnico</h2>
        <p className="text-muted">
          ¿Tienes algún problema con tu producto? Escríbenos.
        </p>
      </div>

      <div className="card shadow p-4">
        <form>
          
          {/* Nombre */}
          <div className="mb-3">
            <label className="form-label">Nombre completo</label>
            <input type="text" className="form-control" required />
          </div>

          {/* Correo */}
          <div className="mb-3">
            <label className="form-label">Correo electrónico</label>
            <input type="email" className="form-control" required />
          </div>

          {/* Tipo de producto */}
          <div className="mb-3">
            <label className="form-label">Tipo de producto</label>
            <select className="form-select">
              <option>Laptop</option>
              <option>Televisor</option>
              <option>Celular</option>
              <option>Otro</option>
            </select>
          </div>

          {/* Descripción */}
          <div className="mb-3">
            <label className="form-label">Descripción del problema</label>
            <textarea
              className="form-control"
              rows={4}
              placeholder="Describe qué ocurrió..."
              required
            ></textarea>
          </div>

          {/* Botón enviar */}
          <button type="submit" className="btn btn-primary w-100">
            Enviar solicitud
          </button>

        </form>

        {/* WhatsApp */}
        <div className="text-center mt-4">
          <p className="mb-2">¿Tienes alguna otra duda?</p>
          
          <a
            href="https://wa.me/51947792061"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success"
          >
            <FaWhatsapp className="me-2" />
            Contáctanos por WhatsApp
          </a>
        </div>

      </div>
    </div>
  );
}

export default SoporteTecnico;
