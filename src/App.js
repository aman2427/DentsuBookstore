import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component";
import BooksList from "./components/bookslist.component";


function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Route path="/" exact component = {BooksList} />
    </Router>
  );
}

export default App;
