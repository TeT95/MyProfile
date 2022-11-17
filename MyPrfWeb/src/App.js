import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import ProfilePage from "./pages/profilePage";
import EditPage from "./pages/editPage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/edit" component={EditPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
