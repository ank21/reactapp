import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './component/Home';
import About from './component/About';

class Navigation extends React.Component {
    render() {
        return (
          <Router>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <a className="navbar-brand" href="#">Logo</a>
  

  <ul className="navbar-nav">
    <li className="nav-item">
    <Link to="/">Home</Link>
    </li>
    <li className="nav-item">
     <Link to="/about">About</Link>
    </li>
  </ul>
</nav>

 <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
</Router>
        )
    }
}

export default Navigation;