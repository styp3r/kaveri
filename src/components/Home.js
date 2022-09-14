import React, { useState } from 'react';
import { supabase } from '../supabaseClient';


function Home() {

    const [itemArr, setItemArr] = useState([])

    async function getRevenue() {

        let { data: kav2022, error } = await supabase
            .from('kav2022')
            .select('*')


        setItemArr(kav2022)


        if (error) {
            console.log(error);
        }
    }

    function dispItems(d) {
        return d.sale;
    }

    function dispCash(c) {
        return c.cash;
    }


    let sumArr = itemArr.map(dispItems);
    let cashArr = itemArr.map(dispCash);
    let cash = 0
    let rev = 0

    for (let i in sumArr) {
        rev = rev + sumArr[i]
    }

    for (let j in cashArr) {
        cash = cash + cashArr[j]
    }

    return (
        <div id="homePage" onLoad={getRevenue()}>
            <div className="overviewBlock">

                <div className="balanceValuesBlock">
                    <div className="balanceCash">
                        <p className="balanceCashTitle">Available Cash</p>
                        <p>Rs. {cash}</p>
                    </div>
                    <div className="balanceRevenue">
                        <p className="balanceRevenueTitle">Total Revenue</p>
                        <p>Rs. {rev}</p>
                    </div>
                    {/*<button onClick={() => generateCashFlow()} className="cashFlowGenBtn">Generate</button>*/}
                </div>

                <h3>Performance Overview</h3>
                <div className="performanceChart"></div>

                <h3>Leaderboard</h3>
                <div className="outletsPerformanceBlock">
                    <div className="shopSummary">
                        <p>#1</p>
                        <p>JBN</p>
                    </div>
                    <div className="shopSummary">
                        <p>#2</p>
                        <p>BTM</p></div>
                    <div className="shopSummary">
                        <p>#3</p>
                        <p>HOR</p>
                    </div>
                    <div className="shopSummary">
                        <p>#4</p>
                        <p>VTR</p>
                    </div>
                    <div className="shopSummary">
                        <p>#5</p>
                        <p>EC</p>
                    </div>
                    <div className="shopSummary">
                        <p>#6</p>
                        <p>KTR</p>
                    </div>
                    <div className="shopSummary">
                        <p>#7</p>
                        <p>DDK</p>
                    </div>
                    <div className="shopSummary">
                        <p>#8</p>
                        <p>MLL</p>
                    </div>
                    <div className="shopSummary">
                        <p>#9</p>
                        <p>ORR</p>
                    </div>
                </div>


            </div>
        </div >
    );
}

export default Home;