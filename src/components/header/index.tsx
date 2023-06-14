import {useLocation, useNavigate} from "react-router-dom";

import './header.css';

const Header = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    return (
        <header>
            <div className="container">
                <div className="header_inner">
                    <div className="logo">
                        <h2>Logo.</h2>
                    </div>
                    <nav className="navbar">
                        <ul>
                            <li onClick={() => navigate('/')}><span className={pathname === '/' ? 'active' : ''}></span>Employees</li>
                            <li onClick={() => navigate('tasks')}><span className={pathname === '/tasks' ? 'active' : ''}></span>Tasks</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;