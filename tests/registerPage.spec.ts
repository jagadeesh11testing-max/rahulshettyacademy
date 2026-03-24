import {test, expect} from '@playwright/test';
import { ExcelUtils } from '../utils/ExcelUtils';
import {RegisterPage} from '../pages/RegisterPage';
import path from 'path'


const filePath = path.join(__dirname, '../TestData/testdata.xlsx');
const sheetName = 'Register';
let RegisterData
try{
    const rows = ExcelUtils.getExcelData(filePath, sheetName);
    RegisterData = rows ? rows[0] : null;
}
catch(e){
}

let registerPage: RegisterPage;

test("register with valid data", async ({page})=>{
    registerPage = new RegisterPage(page);
    await registerPage.launchurl(RegisterData.url)
    await expect(registerPage.registerIdentifier).toBeVisible()
    await registerPage.clickOnRegister()
    await registerPage.register(RegisterData.FirstName, RegisterData.LastName, RegisterData.email, RegisterData.PhoneNumber, RegisterData.Occupation, RegisterData.Password, RegisterData.ConfirmPassword)

})

