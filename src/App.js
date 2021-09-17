import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import Characters from "./screens/Characters";
import Inicio from "./screens/Inicio";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/characters" component={Characters} />
        <Redirect to="/characters" />
        {/* {/* <Route exact path="/signup" component={Signup} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
