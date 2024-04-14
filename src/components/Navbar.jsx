const Navbar = ({setCategory}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"> <span className="badge bg-light text-dark fs-4">News</span> 
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" onClick={()=>setCategory("technology")} aria-current="page" href="#">
            Technology
            </a>
            <a className="nav-link " onClick={()=>setCategory("business")} aria-current="page" href="#">
              Business
            </a>
            <a className="nav-link" onClick={()=>setCategory("health")} aria-current="page" href="#">
              Health
            </a>
            <a className="nav-link" onClick={()=>setCategory("sports")} aria-current="page" href="#">
              Sports
            </a>
            <a className="nav-link" onClick={()=>setCategory("entertainment")} aria-current="page" href="#">
              Entertainment
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
