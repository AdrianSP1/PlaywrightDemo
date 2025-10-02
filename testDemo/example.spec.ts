import { test, expect, chromium } from '@playwright/test';

test('Sign in with Google Button is visible', async ({page}) => {
  await page.goto('https://practicesoftwaretesting.com/auth/login')
  const loginButton = page.getByRole('button',{name : 'Sign in with Google'} )
  await expect(loginButton).toBeVisible()
  
})