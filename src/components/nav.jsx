const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand text-white fs-3">Users</a>
          <form className="d-flex" role="search">
            <button className="btn btn-success fs-5" type="submit">
              + Add User
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
