import React, { useState } from "react";
import * as ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import { supabase } from '../supabaseClient';

function DailySheetExcelTemplate() {

  const [monthDate, setMonthDate] = useState("")
  const [itemArr, setItemArr] = useState([])

  //Retrieve data and generate excel sheet for data between this date range
  async function generateCashFlow() {

    let { data: kav, error } = await supabase
      .from('kaveri')
      .select('*')


    setItemArr(kav)
    document.getElementById("downloadDSXLBtn").style.display = "block";
    document.getElementById("DSGenBtn").style.display = "none";

    if (error) {
      console.log(error);
    }
  }

  function setItemsToCells(d) {
    //Send retrieved values to excel generator
    if ((d.date).includes(monthDate)) {

      if (d.shop === "BTM") {
        setDataForBTM(d.date, d.shop, d.sale, d.gst, d.discount, d.creditCard, d.digital, d.partnerPending, d.cash)
      }
    }
  }


  const workbook = new ExcelJS.Workbook();
  workbook.creator = 'Styp3r';
  workbook.created = new Date();
  workbook.modified = new Date();
  const worksheet = workbook.addWorksheet('Daily Sheet', { pageSetup: { paperSize: 9, orientation: 'landscape' } });
  worksheet.headerFooter.oddFooter = "Page &P of &N";
  worksheet.autoFilter = {
    from: 'A1',
    to: 'C1',
  }

  worksheet.columns = [
    { header: 'Purchases', key: 'purchases', width: 30 },
    { header: 'Shop', key: 'shop', width: 10 },
    { header: 'Sales for the day', key: 'sales', width: 20 },
    { header: 'BTM', key: 'btm', width: 10 },
    { header: 'Amount', key: 'amount', width: 10 },
    { header: 'Shop', key: 'shop', width: 10 },
    { header: 'Receipts', key: 'receipts', width: 20 },
  ];

  function setDataForBTM(date, shop, sale, gst, discount, credit, digital, pPending) {
    worksheet.getCell('A3').value = "Chicken";
    worksheet.getCell('A1').value = date;
    worksheet.getCell('A3').value = "Chicken";
    worksheet.getCell('A16').value = "Total Expense";
    worksheet.getCell('B3').value = shop;
    worksheet.getCell('D3').value = "Sales";
    worksheet.getCell('E3').value = sale;
    worksheet.getCell('D4').value = "+GST";
    worksheet.getCell('E4').value = gst;
    worksheet.getCell('F2').value = "Amount";
    worksheet.getCell('F4').value = sale + gst;
    worksheet.getCell('G5').value = "Card";
    worksheet.getCell('G6').value = "Digital";
    worksheet.getCell('H5').value = credit;
    worksheet.getCell('H6').value = digital;
    worksheet.getCell('D8').value = "discount";
    worksheet.getCell('F8').value = discount;
    worksheet.getCell('D10').value = "Pending Swiggy";
    worksheet.getCell('F10').value = pPending;
    worksheet.getCell('D11').value = "Zomato";
    worksheet.getCell('D12').value = "Amazon";
    worksheet.getCell('F11').value = 5562;
    worksheet.getCell('F12').value = 453;
    worksheet.getCell('F16').value = (sale + gst) - (discount + pPending);
    worksheet.getCell('H16').value = credit + digital;
    worksheet.getCell('I16').value = 0;
  }

  function test() {
    workbook.xlsx.writeBuffer().then(function (buffer) {
      // done
      console.log(buffer);

      const blob = new Blob([buffer], { type: "applicationi/xlsx" });
      saveAs(blob, "myexcel.xlsx");
    });
  }

  return (
    <div className="template">
      <h1>Download Daily Sheet</h1>
      <p>Enter Date</p>
      <div className="monthDateBlock">
        <input onChange={(e) => {
          document.getElementById("downloadDSXLBtn").style.display = "none";
          document.getElementById("DSGenBtn").style.display = "block";
          setMonthDate(e.target.value)
        }} className="dateInputBox" type="month" />
      </div>
      <button onClick={() => generateCashFlow()} className="DSGenBtn">Generate</button>
      <button onClick={() => test()} id="downloadDSXLBtn">Download</button>
      {itemArr.map(setItemsToCells)}
    </div>
  );
}

export default DailySheetExcelTemplate;