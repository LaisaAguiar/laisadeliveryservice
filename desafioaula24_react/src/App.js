import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Sidebar from "./components/Sidebar";

import CreatePost from "./routes/CreatePost";
import ListPosts from "./routes/ListPosts";

import "react-toastify/dist/ReactToastify.css";
import "./styles/style.css";

const App = () => (
  <Router>
    <ToastContainer/>
    <div className="container">
      <Sidebar />
      <Switch>
        <Route exact path="/" component={ListPosts} />
        <Route path="/create" component={CreatePost} />
      </Switch>
    </div>
  </Router>
);

export default App;
