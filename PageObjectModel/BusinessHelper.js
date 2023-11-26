export const configData = (filename) => {
    return require("../cypress/fixtures/" + filename + ".json");

}

export const sendKeys = (locator, setText) => {

    return cy.get(locator).type(setText);

}

export const btnClick = (locator) => {

    return cy.get(locator).click();
}

export const contain = (locator,value) => {

    return cy.get(locator).contains(value);
}

export const should_value = (locator,value)=>{

    return cy.get(locator).should('have.value',value);

}

export const should_Text = (locator,value) => {

    return cy.get(locator).should('have.text',value);
}

export const select_value= (locator,value) => {

    return cy.get(locator).select(value);
}

export const checkBtn = (locator) => {

    return cy.get(locator).check().should('be.checked');
}
