import React from "react";
import Home from './Home';
import Comments from './Comments';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {

  return ( 
    <div>
<Router>
<Switch>
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
</Router>
</div>
  );

 
}

export default App;