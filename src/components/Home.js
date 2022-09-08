function Home() {
    return (
        <div id="homePage">

            <div className="homePageContainer">

                <div className="homeNavContainer">
                    <div className="homeNavigation">
                        <div className="navLinkBlock">
                            <p className = "navLink">Accounts <span class="material-icons">library_books</span></p>
                            <p className = "navLink">Vendors <span class="material-icons">groups</span></p>
                            <p className = "navLink">Licenses <span class="material-icons">file_present</span></p>
                            <p className = "navLink">Insights <span class="material-icons">insights</span></p>
                        </div>
                    </div>
                </div>

                <div className="homeSummary"></div>
            </div>
        </div>
    );
}

export default Home;