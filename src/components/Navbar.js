import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className="homeNavContainer">
            <div className="homeNavigation">
                <div className="navLinkBlock">
                <Link className = "routerNavLink" to="/"><p className="navLink">Overview <span class="material-icons">visibility</span></p></Link>
                    <Link className = "routerNavLink" to="/accounts"><p className="navLink">Accounts <span class="material-icons">library_books</span></p></Link>
                    <Link className = "routerNavLink" to="/partners"><p className="navLink">Partners <span class="material-icons">directions_bike</span></p></Link>
                    <Link className = "routerNavLink" to="/vendors"><p className="navLink">Vendors <span class="material-icons">groups</span></p></Link>
                    <Link className = "routerNavLink" to="/licenses"><p className="navLink">Licenses <span class="material-icons">file_present</span></p></Link>
                    <Link className = "routerNavLink" to="/insights"><p className="navLink">Insights <span class="material-icons">insights</span></p></Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;