import { Route, Switch } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import CoffeeList from "./components/CoffeeList";
import { Footer } from "./components/Footer";
import ButtonAppbar from "./components/ButtonAppbar";
import PlantList from "./components/PlantList";
import 'fontsource-roboto'
import Typography from '@material-ui/core/Typography'

function App() {
  return (
    <div className="App">
      <ButtonAppbar></ButtonAppbar>
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
