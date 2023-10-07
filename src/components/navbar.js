import {
  Navbar,
  NavbarBrand,
  Dropdown,

} from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import "./header.css";
import { useSelector } from "react-redux";
export default function Header() {
  return (
    <div className="header row d-flex justify-content-center">
      <Navbar expand="lg" className="mx-3">
        <Logo />
        <Options />
      </Navbar>
    </div>
  );
}
function Logo() {
  return (
    <div className="col-6 d-flex justify-content-start px-4">
      <NavbarBrand className="Logo">
        <Link to="/" className="text-decoration-none">
          Movie App
        </Link>
      </NavbarBrand>
    </div>
  );
}
function Options() {
  return (
    <div className="col-6 d-flex justify-content-end px-4">
      <Dropdown className="d-inline m-2 ">
        <Dropdown.Toggle
          variant="outline-primary"
          id="dropdown-custom-components"
        >
          En
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">En</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Ar</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <WatchListIcon />
    </div>
  );
}
function WatchListIcon() {
  const selector = useSelector((state) => state.thelist);
  return (
    <Link
      to="/watched-list"
      className=" d-flex align-items-center text-decoration-none d-inline mx-2 "
    >
      <span className="p-2 watchedicon">
        <AiFillHeart />
      </span>
      Watched List
      {` ${selector.length}`}
    </Link>
  );
}
