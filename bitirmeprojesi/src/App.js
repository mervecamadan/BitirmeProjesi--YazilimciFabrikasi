import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import UserPage from "./UserPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/user" component={UserPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;



