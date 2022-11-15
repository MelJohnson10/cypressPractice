describe('Home Test', () => {
    it('Visit Webpage', () => {
        cy.visit("https://dealerfinancial.dev.worthwhilek8s.com/");
        
        //login as user Carl
        cy.get("#username").type("dealer")

        //password for user Carl
        cy.get("#password").type("Test123!")

        //click login
        cy.get("#kc-login").click()

        //verify correct url
        cy.url().should('include', '/search/')

  
         //create asset
         cy.get('[data-test=new-item-button]').click()
         cy.get('[data-test=goto-new-asset]').click()

         cy.get('[data-test=asset-form-block]').click().type('444')
         cy.get('[data-test=asset-form-contract]').click().type('112233')
         cy.get('[data-test=buyer-first-name]').click().type('Mary')
         cy.get('[data-test=buyer-last-name]').click().type('Lamb')
         cy.get('[data-test=buyer-phone]').click().type('999-234-5678')
         cy.get('[data-test=buyer-dob]').click().type('1976-12-07')
         cy.get('[data-test=buyer-address]').click().type('432 Danger Lane')
         cy.get('[data-test=buyer-city]').click().type('Las Vegas')
         cy.get('[data-test=buyer-zip]').click().type('89126')


         cy.get('[data-test="buyer-state"] > .relative > .multiselect-search').click()

        cy.get('.multiselect-option span')
        .each(($e1, index, $1ist) => {
            if($e1.text() === 'California')
            {
                cy.wrap($e1).click()
            }
        })
       
         cy.get('[data-test=buyer-state]').click().type('Nevada' +  '{enter}')
         cy.get('[data-test=note-cash-down]').click().clear().type('3500')
         cy.get('[data-test=note-purchase-price]').click().clear().type('10,000')
         cy.get('[data-test=note-deferred-down]').click().clear().type('1000')
         cy.get('[data-test=note-amount-financed]').click().clear().type('5500')
         cy.get('[data-test=note-contract-date]').click()
         cy.get('.v3dp__elements > :nth-child(13) > span').click()
         cy.get('[data-test=note-finance-charge]').click().type('2000')
         cy.get('[data-test=note-payment]').click().type('272.65')
         cy.get('[data-test=asset-payment-select]').click().type('Monthly' +  '{enter}')
         cy.get('[data-test=vehicle-vin]').click().type('1HRBH41JXMN103456')
         cy.get('[data-test=vehicle-make]').click().type('Dodge')
         cy.get('[data-test="vehicle-make"] > .relative > .multiselect-search').click()
         cy.get('.multiselect-option span')
         .each(($e1, index, $1ist) => {
             if($e1.text() === 'Dodge')
             {
                 cy.wrap($e1).click()
             }
         })
         cy.get('[data-test="vehicle-model"] > .relative > .multiselect-search').click()
         cy.get('.multiselect-option span')
         .each(($e1, index, $1ist) => {
             if($e1.text() === 'Ram 1500 Truck')
             {
                 cy.wrap($e1).click()
             }
         })
         
         cy.get('[data-test=vehicle-year]').click().type('2019')
         cy.get('[data-test=vehicle-trim]').click().type('Big Horn')
         cy.get('[data-test=vehicle-mileage]').click().type('66,480')
         cy.get('[data-test=vehicle-wholesale-price]').click().type('14,580')
         cy.get('[data-test=vehicle-value-source]').click().type('Non-Auction' +  '{enter}')
         cy.get('[data-test=vehicle-source]').click().type('unknown')
         cy.get('[data-test=gps-manufacturer]').click().type('Teltonika')
         cy.get('[data-test=gps-model-number]').click().type('TM2500')
         cy.get('[data-test=gps-serial-number]').click().type('987654321012345')

         //submit form 
        cy.get('[data-test=create-asset]').click()
        cy.get('[data-test=submit-asset]').click()
        cy.get('[data-test=add-to-block]').click()

        
    });
})