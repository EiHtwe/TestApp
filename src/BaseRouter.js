import React, {Component} from 'react';
import Header from './Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

class BaseRouter extends Component {
  render() {
    return (
      	<div className="base-router">
	      	<Router>
		      	<div>
		      	      <Header />

		          <Route exact path="/about" component = {About}>
		          </Route>
		          <Route exact path="/topics" component = {Topics}>
		          </Route>
		          <Route exact path="/" component = {Home}>
		          </Route>
		          <Route exact path="/opened" component = {Opened}>
		          </Route>
		          <Route exact path="/closed" component = {Closed}>
		          </Route>
		        
		      	</div>
	    	</Router>
      	</div>
    );
  }
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Topics() {
  return <h2>Topics</h2>;
}

function Opened() {
  return <h2>Opened</h2>;
}

function Closed() {
  return <h2>Closed</h2>;
}

export default BaseRouter;
