import { Route, Switch } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import CoffeeList from "./components/CoffeeList";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import PlantList from "./components/PlantList";

function App() {
  return (
    <div className="App">
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
