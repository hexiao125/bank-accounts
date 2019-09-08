import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

import DataTable from "./components/DataTable";
import Transactions from "./components/Transactions";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={DataTable} />
          <Route path="/:id/transactions" component={Transactions} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
