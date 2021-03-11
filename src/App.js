import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './component/Home/Home';
import Team from './component/Team/Team';

function App() {
  
  return (
      <header className="App-header">
        <Router>
            <Switch>
                <Route path="/home">
                  <Home/>
                </Route>
                <Route exact path="/">
                  <Home/>
                </Route>
                <Route path="/detail/:idTeam">
                  <Team />
                </Route>
                <Route path="*">
                  <h1 className="error-text">404!! Something went wrong!</h1>
                </Route>
            </Switch>
        </Router>
      </header>
  );
}

export default App;
