import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
  <Link to="/" className="navbar-brand">
      Inicio
  </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link to="/" className="nav-link active">Inicio</Link>
        </li>
        <li className="nav-item">
        <Link to="/base" className="nav-link">Base</Link>
        </li>
        <li className="nav-item">
        <Link to="/usuarios" className="nav-link">Usuarios</Link>
        </li>


      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Header
