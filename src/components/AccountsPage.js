import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { Link } from 'react-router-dom';

function AccountsPage() {

    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [dailySheetFig, setDailySheetFig] = useState("")

    const [itemArr, setItemArr] = useState([])

    async function generateCashFlow() {
        //console.log(startDate, endDate)
        //Retrieve data and generate excel sheet for data between this date range

        let { data: kav2022, error } = await supabase
            .from('kav2022')
            .select('*')
            //.eq('date', startDate)

            setItemArr(kav2022)
            console.log(itemArr)
        /*if (data) {
            //console.log(data[i].date, data[i].sale, data[i].gst, data[i].discount, data[i].creditCard, data[i].digital)
            setDailySheetFig(data[0].date + " " + data[0].sale + " " + data[0].gst + " " + data[0].discount + " " + data[0].partnerPending + " " + data[0].cash + " " + data[0].creditCard + " " + data[0].digital);
        }*/

        if (error) {
            console.log(error);
        }
    }


    return (
        <div id="accountsPage">

            {/* Daily Sheet */}
            <div className="dailySheetBlock">
                <h2>Daily Sheets</h2>
                <p>View, Add or Edit Daily Sheets</p>
                <div className="dailySheetsMenu">
                    <Link className="viewDSLinkBtn" to="/viewDS">
                        <div className="viewDailySheet">
                            <span class="material-icons" id="viewList">view_list</span>
                        </div>
                    </Link>

                    <Link className="uploadDSLinkBtn" to="/uploadDS">
                        <div className="uploadDailySheet">
                            <span class="material-icons" id="postAdd">post_add</span>
                        </div>
                    </Link>

                    <Link className="editDSLinkBtn" to="/editDS">
                        <div className="editDailySheet">
                            <span class="material-icons" id="editNote">edit_note</span>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="cashFlowBlock">
                <h2>Cash Flow Report</h2>
                <p>Select the date range for which you want to generate Cash Flow report</p>
                <div className="startDateBlock">
                    <p>Start Date: </p>
                    <input onChange={(e) => setStartDate(e.target.value)} className="dateInputBox" type="date" />
                </div>
                <div className="endDateBlock">
                    <p>End Date: </p>
                    <input onChange={(e) => setEndDate(e.target.value)} className="dateInputBox" type="date" />
                </div>
                <button onClick={() => generateCashFlow()} className="cashFlowGenBtn">Generate</button>
                <p>{dailySheetFig}</p>
            </div>

        </div>
    );
}

export default AccountsPage;