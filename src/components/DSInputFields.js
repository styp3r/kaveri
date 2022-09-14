import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

function DSInputFields() {

    //Daily Sheet Parameters
    const [date, setDate] = useState("");
    const [sale, setSale] = useState(0);
    const [gst, setGST] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [partnerPending, setPartnerPending] = useState(0);
    const [cash, setCash] = useState(0);
    const [creditCard, setCreditCard] = useState(0);
    const [digital, setDigital] = useState(0);

    const [isEnabled, setIsEnabled] = useState(false);

    if (isEnabled === true) {
        document.getElementById("uploadDSBtn").style.backgroundColor = "#00e6b8";
    }

    async function handleUpload() {
        //If entry already exists, overwrite. Else, Upload.
        if (isEnabled !== false) {
            //console.log(date, sale, gst, discount, creditCard, digital)
            let year = date.substring(0, 4);
            //console.log(year);

            await supabase
                .from("kav"+year)
                .upsert([{ date: date, sale: sale, gst: gst, discount: discount, partnerPending: partnerPending, cash: cash, creditCard: creditCard, digital: digital }])

            alert("Successfully Uploaded!");
        }
        else {
            alert("Date field cannot be left empty!");
        }
    }

    return (
        <div className="inputFieldsForUploadBlock">
            <h3>Enter Daily Sheet Parameters</h3>
            <div className="inputBlock">
                <input onChange={(e) => { setIsEnabled(true); setDate(e.target.value) }} className = "dateInputBox" id="dateUpload" type="date" required />
                <input onChange={(e) => setSale(e.target.value)} id="saleUpload" type="number" placeholder="Total Net" required />
                <input onChange={(e) => setGST(e.target.value)} id="gstUpload" type="number" placeholder="Total Tax" required />
                <input onChange={(e) => setDiscount(e.target.value)} id="discountUpload" type="number" placeholder="Partner Discount" required />
                <input onChange={(e) => setPartnerPending(e.target.value)} id="pPendingUpload" type="number" placeholder="Partner Pending" required />
                <input onChange={(e) => setCash(e.target.value)} id="cashUpload" type="number" placeholder="Cash" required />
                <input onChange={(e) => setCreditCard(e.target.value)} id="creditCardUpload" type="number" placeholder="Credit Card Sales" required />
                <input onChange={(e) => setDigital(e.target.value)} id="digitalUpload" type="number" placeholder="Digital Payment Sales" required />
                <button onClick={() => handleUpload()} id="uploadDSBtn">Upload</button>
            </div>
        </div>
    );
}

export default DSInputFields;