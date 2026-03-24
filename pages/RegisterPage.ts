import { Page , Locator} from "playwright";
export class RegisterPage {
    page: Page;
    registernow: Locator;
    firstName: Locator;
    lastName: Locator
    email: Locator;
    occupation: Locator;
    gender: Locator;
    phoneNumber:Locator
    password: Locator;
    confirmPassword: Locator;
    AgecheckBox: Locator;
    registerButton: Locator
    registerIdentifier:Locator
    

    constructor(page: Page) {
        
        this.page = page;
        this.registernow = this.page.getByText('Register here')
        this.firstName = this.page.locator('#firstName')
        this.lastName = this.page.locator('#lastName')
        this.email = this.page.locator('#userEmail')
        this.phoneNumber = this.page.locator('#userMobile')
        this.occupation = this.page.locator('.custom-select')
        this.gender = this.page.locator('input[value="Male"]')
        this.password = this.page.locator('#userPassword')
        this.confirmPassword = this.page.locator('#confirmPassword')
        this.AgecheckBox = this.page.locator('input[type="checkbox"]')
        this.registerButton = this.page.locator('#login')
        this.registerIdentifier = this.page.locator('h1.login-title')


    }
    async launchurl(url:string)
    {
        await this.page.goto(url)

    }
    async clickOnRegister(){
        await this.registernow.click()
    }

    async register(firstname:string, lastname:string, email:string, phonenum:string, occup:string, password:string, confpassword:string){
        await this.firstName.fill(firstname)
        await this.lastName.fill(lastname)
        await this.email.fill(email)
        await this.phoneNumber.fill(String(phonenum))
        await this.occupation.selectOption(occup)
        await this.gender.check()
        await this.password.fill(password)
        await this.confirmPassword.fill(confpassword)
        await this.AgecheckBox.check()

    }
}
