import { Link } from 'react-router-dom';
import KaveriLogo from '../images/kaveriLogo.png';


function Navbar() {
    return (
        <div className="homeNavContainer">
            <div className="homeNavBlock">
                <div id="logoBlock">
                    <img className="kaveriLogo" src={KaveriLogo} width="70" height="70" alt = "kaveriLogo"/>
                    <p className="siteVersion">FloWerk.v0.1</p>
                </div>
                <div className="homeNavigation">
                    <div className="navLinkBlock">
                        <Link className="routerNavLink" to="/"><p className="navLink"><span class="material-icons overviewIcon">analytics</span> Overview</p></Link>
                        <Link className="routerNavLink" to="/accounts"><p className="navLink"><span class="material-icons accountsIcon">library_books</span> Accounts</p></Link>
                        <Link className="routerNavLink" to="/partners"><p className="navLink"><span class="material-icons partnersIcon">directions_bike</span> Partners</p></Link>
                        <Link className="routerNavLink" to="/vendors"><p className="navLink"><span class="material-icons vendorsIcon">groups</span> Vendors</p></Link>
                        <Link className="routerNavLink" to="/licenses"><p className="navLink"><span class="material-icons licensesIcon">file_present</span> Licenses</p></Link>
                        <Link className="routerNavLink" to="/insights"><p className="navLink"><span class="material-icons insightsIcon">insights</span> Insights</p></Link>
                        <Link className="routerNavLink" to="/inventory"><p className="navLink"><span class="material-icons inventoryIcon">inventory</span> Inventory</p></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;