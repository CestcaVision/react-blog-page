import React from 'react';
import { render } from 'react-dom';
import './style/main.scss';
import App from './App';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/contact' component={Contact}/>
      <IndexRoute component={Home}/>
    </Route>

  </Router>
  , document.getElementById('root'))
