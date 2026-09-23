# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\login.spec.js >> Login to Test >> login to application 
- Location: tests\smoke\login.spec.js:11:5

# Error details

```
Error: locator.fill: value: expected string, got object
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6] [cursor=pointer]:
        - img "logo" [ref=e7]
        - heading "Learn Automation Courses" [level=1] [ref=e8]
      - generic [ref=e9]:
        - img "menu" [ref=e10] [cursor=pointer]
        - generic [ref=e11]:
          - generic [ref=e12]:
            - text: Learn Automation Courses
            - img "delete" [ref=e13] [cursor=pointer]
          - generic [ref=e14]:
            - link "Home" [ref=e15] [cursor=pointer]:
              - /url: /
            - link "Practise" [ref=e17] [cursor=pointer]:
              - /url: /practise
  - generic [ref=e20]:
    - img "Login" [ref=e22]
    - generic [ref=e23]:
      - generic [ref=e25]:
        - heading "Sign In" [level=2] [ref=e26]
        - textbox "Enter Email" [ref=e27]
        - textbox "Enter Password" [ref=e28]
        - button "Sign in" [ref=e29] [cursor=pointer]
        - link "New user? Signup" [ref=e30] [cursor=pointer]:
          - /url: /signup
      - generic [ref=e31]:
        - heading "Connect with us" [level=2] [ref=e32]
        - generic [ref=e33] [cursor=pointer]:
          - link [ref=e34]:
            - /url: https://youtube.com/MukeshOtwani
          - link [ref=e38]:
            - /url: https://twitter.com/MukeshOtwani
          - link [ref=e41]:
            - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
          - link [ref=e44]:
            - /url: https://www.facebook.com/groups/256655817858291
          - link [ref=e47]:
            - /url: https://learn-automation/reddit
  - generic [ref=e62]:
    - generic [ref=e63]:
      - heading "Learn Automation By Mukesh Otwani" [level=3] [ref=e64]
      - heading "©2023 All rights reserved" [level=2] [ref=e65]
    - generic [ref=e66] [cursor=pointer]:
      - link [ref=e67]:
        - /url: https://youtube.com/MukeshOtwani
      - link [ref=e71]:
        - /url: https://twitter.com/MukeshOtwani
      - link [ref=e74]:
        - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
      - link [ref=e77]:
        - /url: https://www.facebook.com/groups/256655817858291
```

# Test source

```ts
  1  | import test from '@playwright/test';
  2  | 
  3  | export class BasePage {
  4  |     constructor(page) {
  5  |         this.page = page;
  6  |     }
  7  | 
  8  |    
  9  |     async getText(selector) {
  10 |         return await selector.textContent();
  11 |     }
  12 | 
  13 |     async type(selector, text) {
> 14 |         await selector.fill(selector, text);
     |                        ^ Error: locator.fill: value: expected string, got object
  15 |     }
  16 | 
  17 | async click(selector) { 
  18 |     await selector.click(selector); 
  19 | }
  20 | 
  21 |  async navigateToApplication(url) {
  22 |         await this.page.goto(url);
  23 |     }
  24 | 
  25 | 
  26 | async uploadFiles(selector, filePath) {
  27 |     await selector.setInputFiles(selector, filePath);
  28 | 
  29 | 
  30 | }
  31 | 
  32 | 
  33 | 
  34 | 
  35 | 
  36 | 
  37 | 
  38 | 
  39 | 
  40 | 
  41 | 
  42 | 
  43 | 
  44 | 
  45 | 
  46 | 
  47 | 
  48 | 
  49 | 
  50 | }
```