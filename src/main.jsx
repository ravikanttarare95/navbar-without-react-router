import { createRoot } from "react-dom/client";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
const root = createRoot(document.getElementById("root"));

const path = window.location.pathname;

if (path === "/") {
  root.render(
    <>
      <Home />
    </>
  );
} else if (path === "/about") {
  root.render(
    <>
      <About />
    </>
  );
} else if (path === "/contact") {
  root.render(
    <>
      <Contact />
    </>
  );
} else {
  root.render(
    <>
      <h1>404 Not Found</h1>
    </>
  );
}

