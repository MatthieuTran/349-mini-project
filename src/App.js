import "./App.css";
import Create from './Create';
import Notes from './Notes';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <h1>Note Creator App</h1>
        <nav>
          <Link to="/create">
            <button className="nav-btn">Create New Note</button>
          </Link>
          <Link to="/notes">
            <button className="nav-btn">View Notes</button>
          </Link>
        </nav>
        <div>
          <Switch>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/notes">
              <Notes />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

export default App;
