import PagesHeader from "../components/PagesHeader.jsx";
import Footer from "../components/Footer.jsx";
import BottomBar from "../components/BottomBar.jsx";
import "../styles/about.css";

function About() {
  return (
    <div className="about-us-page">
      <PagesHeader />

      <main className="about-main-content">
        <section className="about-intro">
          <h1>About ELIXIR</h1>
          <p className="tagline">
            An Elixir of Emotion, Distilled from Nature's Heart.
          </p>
          <p>
          At Elixir, we believe fragrance is more than scent; it’s an emotional journey. 
          </p>
        </section>

        <section className="our-mission">
          <h2>Our Mission</h2>
          <p>
          Our mission is to capture the essence of nature and transform it into olfactory 
          masterpieces that evoke deep-seated emotions. We are dedicated to crafting fragrances
           that are as unique and captivating as the individuals who wear them.
          </p>
        </section>

        <section className="our-products">
          <h2>Our Products</h2>
          <p>
          Our fragrances are an elixir of luxury, meticulously blended with the finest natural
           ingredients. Each scent is a story, a moment captured in time, and an invitation to 
           indulge your senses.
          </p>
        </section>

        <section className="visit-us">
          <h2>Visit Us</h2>
          <p>
            Want to learn more or get in touch with us? Visit our{" "}
            <a href="/contact">Contact Page</a> and let's start a conversation.
          </p>
        </section>
      </main>

      <Footer />
      <BottomBar />
    </div>
  );
}

export default About;
