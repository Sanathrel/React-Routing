import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Course from './containers/Course/Course'
import Users from './containers/Users/Users';

class App extends Component {
  render () {
    return (
    	<BrowserRouter>
	      <div className="App">
	        <ul style={{ listStyle: 'none' }}>
	        	<li><Link to='/courses'>Courses</Link></li>
	        	<li><Link to='/users'>Users</Link></li>
	        </ul>
	        <Route path='/courses' exact component={Courses} />
	        <Route path='/users' component={Users} />
	        <Route path='/courses/:courseID/:courseTitle' component={Course} />
	      </div>
      </BrowserRouter>
    );
  }
}

export default App;
