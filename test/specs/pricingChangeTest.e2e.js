import TariffsPage from '../pageobjects/tariffs.page.js'
import { expect } from '@wdio/globals';
import { assert } from "chai";

describe('Verify that the pricing changes when employee count is adjusted', () => {

    before(() => {
        TariffsPage.open();
    });

    it('Tariffs cards should be displayed', async () => {
        await expect(TariffsPage.tariffsCards).toBePresent();
    })

    it('Option 31 - 50 should be selected', async () => {
        await TariffsPage.employeeNumberSelect.selectByVisibleText('31– 50');
    });

    it('Primary price should change to $157.5/mo*', async () => {
        const expectedPrice = '$157.5/mo*';
        const actualPrice = (await TariffsPage.primaryPrice.getText()).toString();
        assert.equal(expectedPrice, actualPrice, 'Prices does not match');
    });

    it('Option 150 - 200 should be selected', async () => {
        await TariffsPage.employeeNumberSelect.selectByVisibleText('150 – 200');
    });

    it('Primary price should change to $310.5/mo*', async () => {
        const expectedPrice = '$310.5/mo*';
        const actualPrice = (await TariffsPage.primaryPrice.getText()).toString();
        assert.equal(expectedPrice, actualPrice, 'Prices do not match');
    });

    it('Option > 300 should be selected', async () => {
        await TariffsPage.employeeNumberSelect.selectByVisibleText('> 300');
    });

    it('Individual price should be displayed', async () => {
        const expectedText = 'Individual price';
        const actualText = (await TariffsPage.individualPrice.getText()).toString();
        assert.equal(expectedText, actualText, 'Text on the card is incorrect');
    });
})

