/* eslint-disable */
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
    <nav className="navbar bg-body-tertiary header">
      <div className="container-fluid ">
        <Link className="navbar-brand mb-0 h1" to="/">SHARETRADE.com</Link>
      </div>
    </nav>
    <Outlet/>
    </>
    
  );
};
export default Header;
