import { defineConfig } from 'cypress';

export default defineConfig({
  env: {
    indexUrl:"./cypress/cypressAutomation.html"
  },
  e2e: {
    baseUrl: null
  }
})


