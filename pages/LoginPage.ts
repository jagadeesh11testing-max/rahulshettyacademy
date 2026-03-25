import { Locator, Page } from "@playwright/test";
import { log } from "node:console";
export class LoginPage{

    page:Page
    username:Locator
    password:Locator
    loginbutton:Locator
    incorrectloginmsg:Locator
    loginsuccess:Locator

    constructor(page:Page)
    {
        this.page=page
        this.username= this.page.locator('#userEmail')
        this.password= this.page.locator('#userPassword')
        this.loginbutton= this.page.locator('#login')
        this.incorrectloginmsg= this.page.locator('.toast-message')
        this.loginsuccess= this.page.locator('[routerlink="/dashboard/"]')

    }

   
    async validLogin(username:string, password:string){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginbutton.click()
    }

    async InvalidLogin(username:string, password:string)
    {
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginbutton.click()
    }

}