

import { Routes, Route } from "react-router-dom";
import { Header } from "./common/header";
import Hero from "./common/hero";
import About from "./pages/about";
import ContactForm from "./pages/form";
import Services from "./pages/services";
import Education from "./pages/education";
import Projects from "./pages/project";

function HomePage() {
  return (
    <main>
      <section id="portfolio"><Hero /></section>
      <section id="about"><About /></section>
      <section id="services"><Services /></section>
      <section id="education"><Education /></section>
      <section id="contact"><ContactForm /></section>

      {/* <footer className="text-center p-4 bg-gray-100 text-gray-600 w-full">
        made with <span className="text-fuchsia-600">&hearts;</span> by lily
      </footer> */}
      <footer className="text-center p-4 bg-gray-100 text-gray-700 text-sm w-full border-t border-gray-200">
  <p>
    © {new Date().getFullYear()} Taskeen Sadiq. Built with <span className="text-fuchsia-600">&hearts;</span> and dedication.
  </p>
</footer>

    </main>
  );
}

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
