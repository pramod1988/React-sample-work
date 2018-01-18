import React, { Component } from 'react';
import Layout from './Layout';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import Topics from './Topics.js';
import Employee from './Employee.js';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';



class App extends Component {
	
  render() {
    return (
      <Router>
    <div>
      <Layout>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/emp/:id" component={Employee} />
          <Route path="/topics" component={Topics}/>
          <Route path="/contact" component={Contact}/>
          <Route exact path="/"  component={Home} />
        </Switch>
      </Layout>
    </div>
  </Router>
    );
  }
}

export default App;
