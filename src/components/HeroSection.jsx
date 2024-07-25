import "../styles/herosection.css";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-background-image"></div>
      <h1 className="hero-heading">Indulge in the Extraordinary</h1>
      <p className="hero-subtitle">
      Discover a world of refined luxury, where every fragrance is a masterpiece.
      </p>
      <Link to="/all-products">
        <button className="shop-now">Explore</button>
      </Link>
    </div>
  );
}

export default HeroSection;
