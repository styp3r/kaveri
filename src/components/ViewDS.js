import { supabase } from '../supabaseClient';
import React from 'react';

function ViewDS() {

    async function getData() {
        const { data, error } = await supabase.from('2022').select('*');

        if(data){
            console.log(data[0].date, data[0].sale, data[0].gst, data[0].discount, data[0].creditCard, data[0].digital)
        }

        if(error){
            console.log(error);
        }
    }

    return (
        <div id="viewDSPage">
            <h1>View Daily Sheet</h1>
            <button onClick={() => getData()}>Get Data</button>
        </div>
    );
}

export default ViewDS;