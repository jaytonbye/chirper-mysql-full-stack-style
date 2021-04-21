import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

const App = (props: AppProps) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/compose"></Route>
      </Switch>
    </BrowserRouter>
  );
};

interface AppProps {}

export default App;
