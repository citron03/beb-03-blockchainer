import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Mypage from "./pages/Mypage.jsx";
import Content from "./pages/Content.jsx";
import PostDetail from "./pages/PostDetail.jsx";
import Nav from "./components/Nav.jsx";
import GlobalStyle from './GlobalStyle';
import Write from './pages/Write';
import Modify from './pages/Modify';

function App() {

  return (
    <Router>
        <GlobalStyle />
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
          <Route path="/content/:page">
            <Content />
          </Route>
          <Route path="/postdetail/:post_id">
            <PostDetail />
          </Route>
          <Route path="/write">
            <Write />
          </Route>
          <Route path="/modify/:post_id">
            <Modify />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
