import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { removeToken } from '../Redux/tokenSlice';
import { useHistory } from 'react-router-dom';

const NavHeader = styled.header`
  height: 90px;
  z-index: 997;
  background: #f2f2f2;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  align-items: center!important;
  display: flex!important;

  &.scrolled {
    height: 70px;
  }
`;

const Navdiv = styled.div`
  align-items: center!important;
  display: flex!important;
  justify-content: space-between!important;
  width: 100%;
  height: 90px;
  padding-right: 10rem;
  padding-left: 5rem;
  margin-right: auto;
  margin-left: auto;
`;

const Navbar = styled.nav`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;

const MyLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0 10px 30px;
  font-size: 16px;
  font-weight: 500;
  white-space: nowrap;
  text-decoration: none;
  color: inherit;

  &:hover {
    color: grey;
  }
`;

const MyUl = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  align-items: center;
`;

const MyLi = styled.li`
  position: relative;
`;

const A = styled.a`
  text-decoration: none;
  color: inherit;

  &:hover {
    color: grey;
  }
`;

const Button = styled.button`
  background: #212529;
  border: 0;
  padding: 10px 30px;
  color: #fff;
  transition: 0.4s;
  cursor: pointer;
`;


const Nav = ({ accessToken }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const tokenSelector = useSelector((state) => state.token);
  const [login, setLogin] = useState(false);

  const handleLogout = () => {
    dispatch(removeToken());
    history.push('/');
  }

  return (
    <NavHeader id='nav_header'>
      {console.log(tokenSelector)}
      <Navdiv>
        <MyLink to="/">
          <h2>BLOCKCHAINER</h2>
        </MyLink>
        <Navbar>
          <MyUl>
            <MyLi>
              <MyLink to="/">
              Home
              </MyLink>
            </MyLi>
            <MyLi>
              <MyLink to="/content">
              Content
              </MyLink>
            </MyLi>
            {tokenSelector.accessToken === "" ? (
              <>
              <MyLi>
                <MyLink to="/register">
                Register
                </MyLink>
              </MyLi>
              <MyLi>
                <MyLink to="/login">
                Login
                </MyLink>
              </MyLi>
              </>
            ) : (
              <>
                <MyLi>
                  <MyLink to="/mypage">
                  Mypage
                  </MyLink>
                </MyLi>
              </>
            )}
            {/* <MyLi>
              <MyLink to="/register">
              Register
              </MyLink>
            </MyLi>
            <MyLi>
              <MyLink to="/login">
              Login
              </MyLink>
            </MyLi>
            <MyLi>
              <MyLink to="/mypage">
              Mypage
              </MyLink>
            </MyLi> */}
          </MyUl>
        </Navbar>
        <div>
          {tokenSelector.accessToken !== "" ? (
            <Button type="button" onClick={handleLogout}>Logout</Button>
          ): (
            <Button type="button">Login</Button>
          )}
          <A href="https://github.com/codestates/beb-03-blockchainer" target="_blank">Github</A>
        </div>
      </Navdiv>
    </NavHeader>
  );
}

export default Nav;