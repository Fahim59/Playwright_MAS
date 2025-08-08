const xlsx = require('xlsx');

function readExcelData(filePath, sheetName) {
  const workbook = xlsx.readFile(filePath);

  if (!workbook.SheetNames.includes(sheetName)) {
    throw new Error(`❌ Sheet "${sheetName}" not found in ${filePath}`);
  }

  const worksheet = workbook.Sheets[sheetName];
  return xlsx.utils.sheet_to_json(worksheet);
}

module.exports = { readExcelData };