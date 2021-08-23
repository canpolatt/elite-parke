import React, { useEffect } from "react";
import ReactGa from "react-ga";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./index.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Aboutus from "./pages/Aboutus";
import Contact from "./pages/Contact";
import Doors from "./pages/Doors";
import Lamine from "./pages/Lamine";
import Laminant from "./pages/Laminant";
import Skirts from "./pages/Skirts";
import References from "./pages/References";
import ScrollToTop from "./scrollToTop";
import NotFound from "./pages/NotFound";

function App() {
  useEffect(() => {
    ReactGa.initialize("G-0X0PHNDFMQ");

    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/urunler" component={Products} />
          <Route exact path="/hakkimizda" component={Aboutus} />
          <Route exact path="/iletisim" component={Contact} />
          <Route exact path="/urunler" component={Products} />
          <Route exact path="/referanslar" component={References} />
          <Route exact path="/urunler/kapilar" component={Doors} />
          <Route exact path="/urunler/lamineler" component={Lamine} />
          <Route exact path="/urunler/laminantlar" component={Laminant} />
          <Route exact path="/urunler/supurgelikler" component={Skirts} />
          <Route exact path="/404" component={NotFound} />
          <Redirect to="/404" />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
