import { supabase } from '../supabaseClient';
import React, { useState } from 'react';

function ViewDS() {

    const [fetchDate, setFetchDate] = useState("");
    const [fetchShop, setFetchShop] = useState("");
    const [dailySheetFig, setDailySheetFig] = useState([]);

    async function getData() {
        const { data: getDS, error } = await supabase
            .from('kaveri')
            .select('*')
            .eq('key', fetchDate + fetchShop)


        if (getDS.length !== 0) {
            //console.log(data[i].date, data[i].sale, data[i].gst, data[i].discount, data[i].creditCard, data[i].digital)
            //setDailySheetFig(data[i].date + " " + data[i].sale + " " + data[i].gst + " " + data[i].discount + " " + data[i].partnerPending + " " + data[i].cash + " " + data[i].creditCard + " " + data[i].digital);
            setDailySheetFig(getDS)
            console.log(getDS[0])
        } else {
            alert("Data Does Not Exist!")
        }

        if (error) {
            console.log(error);
        }
    }

    return (
        <div id="viewDSPage">
            <div className="viewBlock">
                <div className="viewCard">
                    <div className="viewCardTitle">
                        <p>View Daily Sheet</p>
                    </div>
                    <div className="viewCardInputFields">
                        <input className="viewCardDateInput" onChange={(e) => setFetchDate(e.target.value)} type="date" />
                        <select className="viewCardShopUpload" onChange={(e) => setFetchShop(e.target.value)} required>
                            <option value="none" selected disabled hidden>Select Branch</option>
                            <option value="BTM">BTM</option>
                            <option value="EC2">EC2</option>
                            <option value="JBN">JBN</option>
                            <option value="VTR">VTR</option>
                            <option value="HRU">HRU</option>
                            <option value="KTR">KTR</option>
                            <option value="DDK">DDK</option>
                            <option value="MLL">MLL</option>
                            <option value="ORR">ORR</option>
                        </select>
                        <button className="viewCardGetDataBtn" onClick={() => getData()}>View</button>
                    </div>
                </div>

                <div className="displayCardViewDS">

                </div>
            </div>
        </div>
    );
}

export default ViewDS;