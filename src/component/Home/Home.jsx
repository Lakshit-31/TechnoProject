import Navbar from "../Navbar/Navbar";
import Content from "../Content/Content";
import Services from "../Services/Services";
import Reviews from "../Reviews/Reviews";
import Contact from "../Contact/Contact";
import About from "../About/About";

function Home() {
  return (
    <>
      <Navbar />
      <section id="content">
        <Content />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="reviews">
        <Reviews />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default Home;
