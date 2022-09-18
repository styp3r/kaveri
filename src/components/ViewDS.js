import { supabase } from '../supabaseClient';
import React, { useState } from 'react';

function ViewDS() {

    const [fetchDate, setFetchDate] = useState("");
    const [fetchShop, setFetchShop] = useState("");
    const [dailySheetFig, setDailySheetFig] = useState("");

    async function getData() {
        const { data, error } = await supabase
            .from('kaveri')
            .select('*')
            .eq('key', fetchDate+fetchShop)

        
        if (data.length !== 0) {
            for (let i in data) {
                if(!data[i].date){
                    console.log(data[i].date)
                }
                //console.log(data[i].date, data[i].sale, data[i].gst, data[i].discount, data[i].creditCard, data[i].digital)
                setDailySheetFig(data[i].date + " " + data[i].sale + " " + data[i].gst + " " + data[i].discount + " " + data[i].partnerPending +" " + data[i].cash + " " + data[i].creditCard + " " + data[i].digital);
            }
        } else{
            alert("Data Does Not Exist!")
        }

        if (error) {
            console.log(error);
        }
    }

    return (
        <div id="viewDSPage">
            <h1>View Daily Sheet</h1>
            <input onChange={(e) => setFetchDate(e.target.value)} type="date" />
            <select id="shopUpload" onChange={(e) => setFetchShop(e.target.value)} required>
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
            <p>{dailySheetFig}</p>
            <button onClick={() => getData()}>Get Data</button>
        </div>
    );
}

export default ViewDS;