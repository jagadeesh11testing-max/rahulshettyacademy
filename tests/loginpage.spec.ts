import{test,expect} from '@playwright/test'
import { ExcelUtils } from '../utils/ExcelUtils'
import {LoginPage} from '../pages/LoginPage'
import {RegisterPage} from '../pages/RegisterPage'
import path from 'path'    


const filepath = path.join(__dirname,'../TestData/testdata.xlsx')
const sheetName = 'Login'
let logindata 
try{
    const rows = ExcelUtils.getExcelData(filepath, sheetName)
    logindata = rows ? rows[0] : null
}
catch(e){

}

let loginpage:LoginPage
let registerpage:RegisterPage
test.beforeEach(async ({page})=>{

    loginpage = new LoginPage(page)
    registerpage = new RegisterPage(page)
  
    
    await registerpage.launchurl(logindata.url)
    
})
test("validate login creds", async ()=>{
    await loginpage.validLogin(logindata.email, logindata.password)
    await expect(loginpage.loginsuccess).toBeVisible()
})

