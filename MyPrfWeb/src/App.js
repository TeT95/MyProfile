import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import ProfilePage from "./pages/profilePage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/profile" component={ProfilePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
