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
        } else {
            alert("Data Does Not Exist!")
        }

        if (error) {
            console.log(error);
        }
    }

    function dispDS(d) {
        return (
            <div className="displayCardViewDS">
                    <div className="displayCardViewDSTitle">
                        <p>{d.shop}</p>
                        <p className="viewDSDate">{d.date}</p>
                    </div>

                    <div className="displayCardViewDSContainer">

                        <div className="saleFiguresViewDSLeft">
                            <h3>Total Sale</h3>
                            <p>Rs.{d.sale}</p>
                            <h3>Total Tax</h3>
                            <p>Rs.{d.gst}</p>
                            <h3>Cash</h3>
                            <p>Rs.{d.cash}</p>
                        </div>

                        <div className="saleFiguresViewDSRight">
                            <div className="partnerFiguresViewDS">
                                <p>Partner Discount: {d.discount}</p>
                                <p>Partner Pending: {d.partnerPending}</p>
                            </div>

                            <div className="otherFiguresViewDS">
                                <p>Credit Card Sales: {d.creditCard}</p>
                                <p>Digital Sales: Rs.{d.digital}</p>
                            </div>
                        </div>

                    </div>
    </div>
        );
    }

    return (
        <div id="viewDSPage">
            <div className="viewDSPageContainer">
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

                {dailySheetFig.map(dispDS)}
            </div>
        </div>
    );
}

export default ViewDS;