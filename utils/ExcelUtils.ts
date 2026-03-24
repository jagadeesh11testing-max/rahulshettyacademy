import xlsx from 'xlsx';
export class ExcelUtils {
    static getExcelData(filePath: string, sheetName: string){
    try{
        const workbook = xlsx.readFile(filePath);
        const sheets =  workbook.Sheets[sheetName];
        const data = xlsx.utils.sheet_to_json(sheets);
        return data;

    }
    catch(error){
        console.error(`Error reading Excel file: ${error}`);
        return null;
    }

}
}