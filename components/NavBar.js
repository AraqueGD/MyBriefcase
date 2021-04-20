import Link from "next/link";
import { Navbar, Nav } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar bg="dark" expand="lg" className="navbar-dark">
      <Link href="/">
        <Navbar.Brand>My Briefcase</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link href="/github">
            <a className="active nav-link">Github</a>
          </Link>
          <Link href="/contact">
            <a className="nav-link">Contact</a>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
