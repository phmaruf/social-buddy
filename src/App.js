import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
// import Post from './components/Post/Post';
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import BlogDetails from './components/BlogDetails/BlogDetails';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/blog/:blogId">
            <BlogDetails/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
