import "../styles/pagesheader.css";
import { Link } from "react-router-dom";
import Search from "../components/Search.jsx";
import headerLogo from "../assets/headerlogo.png";


function PagesHeader({ cartCount, setCartVisible }) {
  return (
    <div className="pheader-container">
      <header className="pheader">
        <Link to="/">
        <img src={headerLogo} alt="" className="header-logo" />
        </Link>
        <Search />
      </header>
    </div>
  );
}

export default PagesHeader;
