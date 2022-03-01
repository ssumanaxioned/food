import Header from "./Components/Header";
import About from "./Components/About"
import Shop from "./Components/Shop";
import Menu from "./Components/Menu";
import Clients from "./Components/Clients";
import Prices from "./Components/Prices";
import Navbar from "./Components/Navbar";

const App = () => {

  return (
    <div className="bg-banner bg-fixed bg-cover bg-no-repeat">
      <Navbar />
      <Header />
      <About />
      <Shop />
      <Menu />
      <Clients />
      <Prices />
    </div>
  );
}

export default App;
