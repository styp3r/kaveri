import React, { useState } from 'react';

function PerformanceChart(){

    const d = new Date();
    let month = (d.getMonth() + 1).toString().padStart(2, "0");
    
    const [selectDate, setSelectDate] = useState(d.getFullYear() + "-" + month);

    return(
        <div id = "PerformanceChart">
            <input onChange={(e) => {setSelectDate(e.target.value)}} className="perfChartDateInput" value={selectDate} type="month" />
        </div>
    );
}

export default PerformanceChart;