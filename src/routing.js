import { Link, Route, Switch } from "react-router-dom";
import Home from "./App";
import Result from "./result";
import TxnEnquiry from "./components/TxnEnquiry";
import Refund from "./components/Refund";


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
        <Route path="/txnenquiry">
          <TxnEnquiry />
        </Route>
        <Route path="/refund">
          <Refund />
        </Route>
      </Switch>
    </>
  );
};
export default RoutePage;
