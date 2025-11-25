const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <a className="navbar-brand" href="#">BrandName</a>

      <button 
        className="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">Opportunities</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Experience</a>
          </li>
        </ul>

        <div>
          <button className="btn btn-outline-light me-2">Login</button>
          <button className="btn btn-primary">Signup</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
