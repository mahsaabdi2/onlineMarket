const Navbar=()=>{
    return(
        <nav className="navbar navbar-light" style={{backgroundColor:" #e3f2fd"}}>
        <a className="navbar-brand mx-4">Navbar</a>
        <form className="form-inline mx-4 d-flex justify-content-between m-2 ">
          <input className="form-control mr-ms-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </nav>
    )
};

export default Navbar;