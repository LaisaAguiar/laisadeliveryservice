import React from "react";
import Home from './Home';
import Comments from './Comments';
import CreatePost from './CreatePost';
import { ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.min.css'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {

  return ( 
    <div>
<Router>
<Switch>
<Route path="/create-post">
  <CreatePost />
</Route>
<Route path="/home">
<Home />
</Route>
<Route path="/comments">
  <Comments />
</Route>
<Route path="/">
<Home />
</Route>
</Switch>
<ToastContainer/>
</Router>
</div>
  );

 
}

export default App;