const Navbar = () => {
  return (
    <>
      <nav
        className="navbar sticky-top navbar-dark navbar-expand-lg bg-dark shadow-sm"
        style={{
          backgroundColor: "rgba(29, 2, 2, 0.8)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
        }}
      >
        <div className="container-fluid">
          {/* Logo */}
          <a className="navbar-brand fw-bold text-light" href="#">
            <span style={{ color: "#00d4ff" }}></span> 
          </a>

          {/* Botón para móviles */}
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active text-light fw-semibold" aria-current="page" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light fw-semibold" href="#">
                  Acerca de
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light fw-semibold" href="#">
                  Servicios
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-light fw-semibold"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Productos
                </a>
                <ul className="dropdown-menu bg-dark border-0">
                  <li>
                    <a className="dropdown-item text-light fw-light" href="#">
                      Nuevo
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-light fw-light" href="#">
                      Más vendidos
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider bg-secondary" />
                  </li>
                  <li>
                    <a className="dropdown-item text-light fw-light" href="#">
                      Ver todos
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light fw-semibold" href="#">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Estilos adicionales */}
      <style>
        {`
          .nav-link:hover, .dropdown-item:hover {
            color: #00d4ff !important;
            transform: scale(1.05);
            transition: 0.3s;
          }
          .dropdown-menu {
            min-width: 180px;
            border-radius: 10px;
            overflow: hidden;
            background: rgba(0, 0, 0, 0.9);
          }
          .navbar {
            transition: all 0.3s ease-in-out;
          }
        `}
      </style>
    </>
  );
};

export default Navbar;
