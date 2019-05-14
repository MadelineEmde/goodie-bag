import React from "react";
import ConnectedCandies from "./GoodiesList";
import { HashRouter as Router, Route, Link } from "react-router-dom";

const Root = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/candies" className="nav-link">
            Candies
          </Link>
        </nav>
        <main>
          <h1>Welcome to the Goodie Bag!</h1>
          <div className="container">
            <Route path="/candies" component={ConnectedCandies} />
          </div>
        </main>
      </div>
    </Router>
  );
};

export default Root;
