import {Outlet} from "react-router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {useLayoutEffect} from "react";
import {useLocation} from "react-router-dom";

function App() {
  const location = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [location.pathname]);

  return (
    <div className="App">
      <Outlet />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
