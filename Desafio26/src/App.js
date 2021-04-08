import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Sidebar from "./components/Sidebar";

import CreatePost from "./routes/CreatePost";
import ListPosts from "./routes/ListPosts";
import EditPost from "./routes/EditPost";
import "react-toastify/dist/ReactToastify.css";
import "./styles/style.css";

const App = () => (
  <Router>
    <ToastContainer/>
    <div className="container">
      <Switch>
      <Route path="/home" component={Sidebar} />
      <Route exact path="/" component={Sidebar} />
        <Route path="/list" component={ListPosts} />
        <Route path="/edit" component={EditPost} />
        <Route path="/create" component={CreatePost} />
      </Switch>
    </div>
  </Router>
);

export default App;
