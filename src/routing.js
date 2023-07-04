import { Link, Route, Switch } from "react-router-dom";
import Home from "./App";
import Result from "./result";

const RoutePage = () => {
  return (
    <>
    <Switch>

      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/result">
        <Result />
      </Route>
    </Switch>
    </>
  );
};
export default RoutePage;
