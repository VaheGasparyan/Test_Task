import './header.css';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header_inner">
                    <div className="logo">
                        <h2>Logo.</h2>
                    </div>
                    <nav className="navbar">
                        <ul>
                            <li>Employees</li>
                            <li>Tasks</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;