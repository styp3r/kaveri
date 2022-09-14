import { Link } from 'react-router-dom';

function AccountsPage() {



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
                <h2>Cash Flow</h2>
                <p>Select the date range for which you want to generate Cash Flow report</p>
                <div className = "startDateBlock">
                    <p>Start Date: </p>
                    <input className="dateInputBox" type="date" />
                </div>
                <div className = "endDateBlock">
                    <p>End Date: </p>
                    <input className="dateInputBox" type="date" />
                </div>
                <button className="cashFlowDownloadBtn">Download</button>
            </div>

        </div>
    );
}

export default AccountsPage;