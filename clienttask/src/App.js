import React from 'react';
import { BrowserRouter as Router , Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import PostList from "./components/AllPosts";
import EditPost from "./components/editPost";
import CreatePost from "./components/createPost";

function App() {
  return (
    <div className="container">
    <Router>
    <Navbar/>
  <br/>
  <Route path="/" exact component={PostList} />
  <Route path="/edit/:id" exact component={EditPost} />
  <Route path="/create" exact component={CreatePost} />
  
    </Router>
    </div>
  );
}

export default App;