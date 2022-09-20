import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

function PerformanceChart() {

    const d = new Date();
    let month = (d.getMonth() + 1).toString().padStart(2, "0");

    const [selectDate, setSelectDate] = useState(d.getFullYear() + "-" + month);

    const [btmArr, setBTMArr] = useState([]);
    const [jbnArr, setJBNArr] = useState([]);
    const [vtrArr, setVTRArr] = useState([]);
    const [orrArr, setORRArr] = useState([]);
    const [ddkArr, setDDKArr] = useState([]);
    const [mllArr, setMLLArr] = useState([]);
    const [hruArr, setHRUArr] = useState([]);
    const [ktrArr, setKTRArr] = useState([]);
    const [ec2Arr, setEC2Arr] = useState([]);

    const [rows, setRows] = useState(0);

    let sum = 0;
    let count = 0;

    function getChartData() {
        getShopWiseData('JBN');
        getShopWiseData('BTM');
        getShopWiseData('VTR');
        getShopWiseData('ORR');
        getShopWiseData('DDK');
        getShopWiseData('MLL');
        getShopWiseData('HRU');
        getShopWiseData('KTR');
        getShopWiseData('EC2');
    }

    async function getShopWiseData(shop) {
        const { data: getCD, error } = await supabase
            .from('kaveri')
            .select('*')
            .eq('shop', shop)

        setRows(getCD.length)
        if (getCD.length !== 0) {
            //console.log(data[i].date, data[i].sale, data[i].gst, data[i].discount, data[i].creditCard, data[i].digital)
            //setDailySheetFig(data[i].date + " " + data[i].sale + " " + data[i].gst + " " + data[i].discount + " " + data[i].partnerPending + " " + data[i].cash + " " + data[i].creditCard + " " + data[i].digital);
            if (shop === 'JBN')
                setJBNArr(getCD)
            if (shop === 'BTM')
                setBTMArr(getCD)
            if (shop === 'VTR')
                setVTRArr(getCD)
            if (shop === 'ORR')
                setORRArr(getCD)
            if (shop === 'DDK')
                setDDKArr(getCD)
            if (shop === 'MLL')
                setMLLArr(getCD)
            if (shop === 'HRU')
                setHRUArr(getCD)
            if (shop === 'KTR')
                setKTRArr(getCD)
            if (shop === 'EC2')
                setEC2Arr(getCD)


        } else {
            alert("Data Does Not Exist!")
        }

        if (error) {
            console.log(error);
        }
    }

    function dispCD(cd) {
        sum = sum + cd.sale;
        count = count + 1;

        if (count === rows) {
            let finalSum = sum;
            sum = 0;
            count = 0;
            return <p>{cd.shop + " " + finalSum}</p>

        }
    }

    useEffect(() => {
        // Update the document title using the browser API
        getChartData();
      }, []);


    return (
        <div id="PerformanceChart">
            <input onChange={(e) => { setSelectDate(e.target.value) }} className="perfChartDateInput" value={selectDate} type="month" />
            {btmArr.map(dispCD)}
            {jbnArr.map(dispCD)}
            {vtrArr.map(dispCD)}
            {orrArr.map(dispCD)}
            {ddkArr.map(dispCD)}
            {mllArr.map(dispCD)}
            {hruArr.map(dispCD)}
            {ktrArr.map(dispCD)}
            {ec2Arr.map(dispCD)}
            {/*<button onClick={() => { getChartData() }}>Get</button>*/}
        </div>
    );
}

export default PerformanceChart;