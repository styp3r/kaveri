const workbook = new ExcelJS.Workbook();
const sheet = workbook.addWorksheet('Cash Flow Sheet', { pageSetup: { paperSize: 9, orientation: 'landscape' } });

worksheet.columns = [
    { header: 'Id', key: 'id', width: 10 },
    { header: 'Name', key: 'name', width: 32 },
    { header: 'D.O.B.', key: 'DOB', width: 10, outlineLevel: 1 }
  ];