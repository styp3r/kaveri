import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { Link } from 'react-router-dom';
import DisplayItemsFromServer from './DisplayItemsFromServer'
import DailySheetExcelTemplate from './DailySheetExcelTemplate';

function AccountsPage() {

    const [monthDate, setMonthDate] = useState("")
    const [itemArr, setItemArr] = useState([])

    //Retrieve data and generate excel sheet for data between this date range
    async function generateCashFlow() {

        let { data: kav, error } = await supabase
            .from('kaveri')
            .select('*')


        setItemArr(kav)

        if (error) {
            console.log(error);
        }
    }

    function dispItems(d) {
        //Send retrieved values to excel generator instead of just displaying items
        if ((d.date).includes(monthDate)) {
            return (
                <DisplayItemsFromServer key={d.key} date={d.date} shop= {d.shop} sale={d.sale} gst={d.gst} discount={d.discount} cred={d.creditCard} dig={d.digital} pPending={d.partnerPending} cash={d.cash} />
            );
        }
    }

    

    return (
        <div id="accountsPage">

            {/* Daily Sheet */}
            <div className="dailySheetBlock">
                <h1>Daily Sheets</h1>
                <p className = "subTextColor">View, Upload or Edit Daily Sheets</p>
                <div className="dailySheetsMenu">
                    <Link className="viewDSLinkBtn" to="/viewDS">
                        <div className="viewDailySheet">
                            <span class="material-icons" id="viewList">view_list</span>
                        </div>
                    </Link>

                    <Link className="uploadDSLinkBtn" to="/uploadDS">
                        <div className="uploadDailySheet">
                            <span class="material-icons" id="postAdd">file_upload</span>
                        </div>
                    </Link>

                    <Link className="editDSLinkBtn" to="/editDS">
                        <div className="editDailySheet">
                            <span class="material-icons" id="editNote">edit_note</span>
                        </div>
                    </Link>
                </div>
                <DailySheetExcelTemplate />
            </div>

            {/* Cash Flow */}
            <div className="cashFlowBlock">
                <h1>Cash Flow Report</h1>
                <p className = "subTextColor">Select the Month and Year To Generate Cash Flow Report</p>
                <div className="monthDateBlock">
                    <input onChange={(e) => setMonthDate(e.target.value)} className="dateInputBox" type="month" />
                </div>
                <button onClick={() => generateCashFlow()} className="cashFlowGenBtn">Generate</button>
                {itemArr.map(dispItems)}
            </div>

        </div>
    );
}

export default AccountsPage;