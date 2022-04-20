import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/content/0">
                            Content
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/register">
                            Register
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">
                            Login
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/mypage">
                            Mypage
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;