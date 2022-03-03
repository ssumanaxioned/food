import Header from "./Components/Header";
import About from "./Components/About"
import Shop from "./Components/Shop";
import Menu from "./Components/Menu";
import Clients from "./Components/Clients";
import Prices from "./Components/Prices";
import Navbar from "./Components/Navbar";
import { useState } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <div className={`bg-banner bg-fixed bg-cover bg-no-repeat ${darkMode && 'dark'}`}>
      <Navbar darkMode={darkMode} handleMode={handleMode} />
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
