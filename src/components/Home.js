import React from 'react';
import PerformanceChart from './PerformanceChart';


function Home() {

    return (
        <div id="homePage">
            <div id="greetingsBlock">
                <p id="greetings">Welcome, Navjyot! &#x1F44B;</p>
                <p id="greetingsSubText" className="subTextColor">Here's what's happening today.</p>
            </div>
            <div className="overviewBlock">
                <div className="overviewSummary">
                    <div className="performanceChartContainer">
                        <PerformanceChart />
                    </div>

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

                <div className="leaderboard">
                    <p className="leaderboardItem">BTM</p>
                    <p className="leaderboardItem">VTR</p>
                    <p className="leaderboardItem">JBN</p>
                    <p className="leaderboardItem">HRU</p>
                    <p className="leaderboardItem">KTR</p>
                    <p className="leaderboardItem">ORR</p>
                    <p className="leaderboardItem">EC2</p>
                    <p className="leaderboardItem">MLL</p>
                    <p className="leaderboardItem">DDK</p>
                </div>
            </div>
        </div >
    );
}

export default Home;