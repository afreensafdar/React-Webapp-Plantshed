import { Route, Switch } from "react-router-dom";
import "./App.css";
// import ButtonAppBar from "./components/ButtonAppBar";
import Cart from "./components/Cart";
import CoffeeList from "./components/CoffeeList";
import Footer from "./components/Footer";
import PlantList from "./components/PlantList";
import ButtonAppBar from "./components/ButtonAppBar";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      {/* <ButtonAppBar></ButtonAppBar> */}
      <Navbar></Navbar>
      <Switch>
        <Route path="/plants">
          <PlantList />
        </Route>
        <Route path="/coffee">
          <CoffeeList />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
