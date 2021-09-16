import { Switch, Route } from "react-router-dom";
import Characters from "./screens/Characters";
import Inicio from "./screens/Inicio";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/characters" component={Characters} />
        {/* {/* <Route exact path="/signup" component={Signup} /> */}
      </Switch>
    </div>
  );
}

export default App;
