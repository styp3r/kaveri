import React from 'react';


function Home() {

    return (
        <div id="homePage">
            <div className="overviewBlock">
                <div className="overviewSummary">
                    <div className="performanceChart"></div>

                    <div className="balanceValuesBlock">
                        <div className="balanceCash">
                            <p className="balanceCashTitle">Available Cash</p>
                            <p>Rs. 1000</p>
                        </div>
                        <div className="balanceRevenue">
                            <p className="balanceRevenueTitle">Total Revenue</p>
                            <p>Rs. 1000</p>
                        </div>
                        {/*<button onClick={() => generateCashFlow()} className="cashFlowGenBtn">Generate</button>*/}
                    </div>
                </div>

                <div className = "leaderboard">
                    <p>Hello</p>
                    <p>Hello</p>
                    <p>Hello</p>
                    <p>Hello</p>
                    <p>Hello</p>
                    <p>Hello</p>
                    <p>Hello</p>
                    <p>Hello</p>
                    <p>Hello</p>
                </div>
            </div>
        </div >
    );
}

export default Home;