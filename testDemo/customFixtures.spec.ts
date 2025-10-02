import {test as base, expect } from '@playwright/test'

    const test = base.extend({
        testData: async ({ }, use) => {
            const data = { email:"gabrielgoto@bymail.com", password: "Gabo456789@"}
            await use (data)
        }
    })

    test("Should login with test data", async ({ page, testData }) => {
         await page.goto('https://practicesoftwaretesting.com/auth/login')

         const emailInput = page.getByRole('textbox', {name: 'Email address'})
         await emailInput.fill(testData.email)

         const passwordInput = page.getByRole('textbox', {name: 'Password'})
         await passwordInput.fill(testData.password)

         const loginButton = page.getByRole('button',{name : 'Login'} )
         await loginButton.click()

        
    })
