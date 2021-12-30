// Import of Link component to create a sigle page navigation
import { NavLink } from 'react-router-dom';


// File for the header
const Header = () => (
    <header className="main-header">
    <div className="ed-grid s-grid-5 lg-grid-4">
      <div className="s-cols-4 lg-cols-1 s-cross-center">
        <a href="/">
          <img className="main-logo" src="https://cdn-icons-png.flaticon.com/512/2503/2503796.png" alt="Logo ED Cupcake"/>
        </a>
      </div>
      <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links">
        <nav className="main-menu" id="main-menu">
          <ul>
            <li><NavLink to="/">Inicio</NavLink></li>
            <li><NavLink to="/cupcakes">Cupcakes</NavLink></li>
            <li><NavLink to="/nosotros">Nosotros</NavLink></li>
          </ul>
        </nav>
        <div className="main-menu-toggle to-l" id="main-menu-toggle"></div>
      </div>
    </div>
  </header>
)

// exportamos el header
export default Header;