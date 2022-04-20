import './App.css';
import react, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Mypage from "./pages/Mypage.jsx";
import Content from "./pages/Content.jsx";
import PostDetail from "./pages/PostDetail.jsx";
import Nav from "./components/Nav.jsx";

function App() {

  return (
    <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/mypage">
            <Mypage />
          </Route>
          <Route path="/content">
            <Content />
          </Route>
          <Route path="/postdetail/:post_id">
            <PostDetail />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
