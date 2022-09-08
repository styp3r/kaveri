function Home() {
    return (
        <div id="homePage">
            <h1>Overview</h1>
            <div className="overviewBlock">
                <div className="balanceValuesBlock">
                    <div className="balanceCash">
                        <p className="balanceCashTitle">Available Cash</p>
                        <p>Rs.1000</p>
                    </div>
                    <div className="balanceRevenue">
                        <p className="balanceRevenueTitle">Total Revenue</p>
                        <p>Rs.1000</p>
                    </div>
                </div>
                <div className="performanceChart"></div>
            </div>
        </div >
    );
}

export default Home;