import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/Navbar';

function navbar() {
    return (
        <NavBar bg="dark" expand="lg" variant="dark" className="text-white" style={{ color: "white" }}>
        <NavBar.Brand href="/">Blog on Hobbit</NavBar.Brand>
        <NavBar.Toggle aria-controls="navbarNav" />
        <NavBar.Collapse id="navbarNav">
          <Nav class="navbar-nav">
              <Nav.Link href="#">Home <span class="sr-only"></span></Nav.Link>
            
            {/* <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </li>  */}
                          <Nav.Link href="#poster">Poster<span class="sr-only"></span></Nav.Link>
                          <Nav.Link href="#posts">Posts <span class="sr-only"></span></Nav.Link>
                          <Nav.Link href="#creds">Credits<span class="sr-only"></span></Nav.Link>

          </Nav>
        </NavBar.Collapse>
      </NavBar>
    )
}
export default navbar;