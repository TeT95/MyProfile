import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
