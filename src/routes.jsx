import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Terms from "./pages/Terms";

const routes = [
  {
    name: "About",
    path: "/about",
    element: <About />,
  },
  {
    name: "Contact Us",
    path: "/contact",
    element: <Contact />,
  },
  {
    name: "Services",
    path: "/services",
    element: <Services />,
  },
  {
    name: "Terms and Conditions",
    path: "/terms-and-conditions",
    element: <Terms />,
  },
];

export default routes;
