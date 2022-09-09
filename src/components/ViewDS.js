import { supabase } from '../supabaseClient';
import React, { useState } from 'react';

function ViewDS() {

    const [dailySheetFig, setDailySheetFig] = useState("");

    async function getData() {
        const { data, error } = await supabase.from('2022').select();

        if (data) {
            for (let i in data) {
                //console.log(data[i].date, data[i].sale, data[i].gst, data[i].discount, data[i].creditCard, data[i].digital)
                setDailySheetFig(data[i].date +" "+ data[i].sale +" "+ data[i].gst +" "+ data[i].discount +" "+ data[i].creditCard +" "+ data[i].digital);
            }
        }

        if (error) {
            console.log(error);
        }
    }

    return (
        <div id="viewDSPage">
            <h1>View Daily Sheet</h1>
            <p>{dailySheetFig}</p>
            <button onClick={() => getData()}>Get Data</button>
        </div>
    );
}

export default ViewDS;