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
import FindUsername from './pages/FindUsername';
import FindPassword from './pages/FindPassword';
import Write from './pages/Write';
import Modify from './pages/Modify';
import ContentPage from './pages/ContentPage';
import Footer from './components/Footer';
import Nfts from './pages/Nfts';
import NftDetail from './pages/NftDetail';
import SearchPost from './pages/SearchPost';

function App() {
  window.addEventListener("scroll", () => {
    // console.log(window.scrollX, window.scrollY);
    if (window.scrollY > 90) {
      document.querySelector("#nav_header").classList.add("scrolled");
    } else {
      document.querySelector("#nav_header").classList.remove("scrolled");
    }
  });

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
          <Route path="/findusername">
            <FindUsername />
          </Route>
          <Route path="/findpassword">
            <FindPassword />
          </Route>
          <Route path="/mypage">
            <Mypage />
          </Route>
          <Route exact path="/content">
            <Content />
          </Route>
          <Route path="/content/:page">
            <ContentPage/>
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
          <Route path="/nfts">
            <Nfts />
          </Route>
          <Route path="/nftdetail/:nft_id">
            <NftDetail />          
          </Route>
          <Route path="/searchpost/:query">
            <SearchPost />          
          </Route>
        </Switch>
        <Footer/>
    </Router>
  );
}

export default App;
