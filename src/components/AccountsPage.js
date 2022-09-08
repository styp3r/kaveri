import { Link } from 'react-router-dom';

function AccountsPage() {
    return (
        <div id="accountsPage">
            <h1>Accounts</h1>
            <div className="dailySheetBlock">
                <h3>Daily Sheets</h3>
                <div className="dailySheetsMenu">
                    <div className="viewDailySheet">
                        <span class="material-icons" id="viewList">view_list</span>
                    </div>
                    <Link className = "uploadDSLinkBtn" to="/uploadDS">
                        <div className="uploadDailySheet">
                            <span class="material-icons" id="postAdd">post_add</span>
                        </div>
                    </Link>

                    <Link className = "editDSLinkBtn" to="/editDS">
                    <div className="editDailySheet">
                        <span class="material-icons" id="editNote">edit_note</span>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default AccountsPage;