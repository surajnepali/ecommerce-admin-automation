class LoginPage{

    constructor(){
        this.title = 'h1.text-neutral-800',
        this.semiTitle = '.mt-2.text-normal.text-neutral-600',
        this.emailField = 'input[name="email"]',
        this.passwordField = 'input[name="password"]',
        this.btn = 'button[type="submit"]',
        this.toastMessage = 'div[role="status"]'
    }

    getTitle(){
        return cy.get(this.title)
    }

    getSemiTitle(){
        return cy.get(this.semiTitle)
    }

    getEmailField(){
        return cy.get(this.emailField)
    }

    getPasswordField(){
        return cy.get(this.passwordField)
    }

    getBtn(){
        return cy.get(this.btn)
    }

    getToastMessage(){
        return cy.get(this.toastMessage)
    }

}

export default LoginPage;