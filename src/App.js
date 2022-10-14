import React, { Component } from 'react';
import './App.css';
import Home from './Pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Contact from './Pages/Contact';
import About from './Pages/About';
import Post from './Pages/Post';
import Category from './Pages/Category';


class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/post" element={<Post />} />
            {/* <Route path="/post/:id" element={<Post />} /> */}
            <Route path="/category" element={<Category />} />
          </Routes>
        </Router>

        {/* <Home /> */}
      </div>
    );
  }
}

export default App;
