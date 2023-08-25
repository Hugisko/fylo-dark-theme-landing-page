import "./App.css";
import {
  Contact,
  Features,
  Footer,
  Header,
  Hero,
  Productivity,
  Testimonials,
} from "./containers";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Productivity />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
