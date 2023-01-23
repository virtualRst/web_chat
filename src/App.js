import React, { Component } from 'react';
import './App.css';
import Home from './Pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NotFoundPage from './Pages/NotFoundPage';
import Chat from './Pages/Chat';


class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>

        {/* <Home /> */}
      </div>
    );
  }
}

export default App;
