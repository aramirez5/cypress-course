/// <reference types="cypress" />

describe("Test Datepicker via webdriveruni", () => {
    it("Select date from the datepicker", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#datepicker').invoke('removeAttr', 'target').click({force:true})
        cy.get('#datepicker').click();

        // let date3 = new Date();
        // date3.setDate(date3.getDate())
        // cy.log("Get current day: " + date3.getDate())

        // let date2 = new Date();
        // date2.setDate(date2.getDate() + 5)
        // cy.log("Get current day plus a quantity: " + date2.getDate())

        var date = new Date();
        date.setDate(date.getDate() + 3);

        var futureYear = date.getFullYear();
        // Check the language of the datepicker first
        var futureMonth = date.toLocaleString("en-GB", {month: "long"});
        var futureDay = date.getDate();

        cy.log("Future year to select: " + futureYear);
        cy.log("Future month to select: " + futureMonth);
        cy.log("Future day to select: " + futureDay);

        function selectMonthAndYear() {
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                if(!currentDate.text().includes(futureYear)) {
                    cy.get('.next').first().click();
                    selectMonthAndYear();
                }
            }).then(() => {
                cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                    if(!currentDate.text().includes(futureMonth)) {
                        cy.get('.next').first().click();
                        selectMonthAndYear();
                    }
                })
            })
        }

        function selectFutureDay() {
            cy.get('[class="day"]').contains(futureDay).click();
        }

        selectMonthAndYear();
        selectFutureDay();
    });
})