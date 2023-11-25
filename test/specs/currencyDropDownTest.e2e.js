import TariffsPage from '../pageobjects/tariffs.page.js'
import { expect } from "@wdio/globals";
import { assert } from 'chai';

describe('Verify that currency drop-down menu works correctly', () => {

    before(() => {
        TariffsPage.open();
    });

    it('Currency drop down menu should be clickable', async () => {
        expect(TariffsPage.currencySelect).toBeClickable();
    });

    it('€ EUR option should be selected successfully', async () => {
        await TariffsPage.currencySelect.selectByAttribute('value', 'eur')
        const currency = (await TariffsPage.primaryCurrency.getText()).toString();
        await expect(TariffsPage.EUR).toBeSelected();
        assert.equal(currency, '€', 'Currency is displayed incorrectly');
    });

    it('$ USD option should be selected successfully', async () => {
        await TariffsPage.currencySelect.selectByAttribute('value', 'usd')
        const currency = (await TariffsPage.primaryCurrency.getText()).toString();
        await expect(TariffsPage.USD).toBeSelected();
        assert.equal(currency, '$', 'Currency is displayed incorrectly');
    });

    it('₴ UAH option should be selected successfully', async () => {
        await TariffsPage.currencySelect.selectByAttribute('value', 'uah')
        const currency = (await TariffsPage.primaryCurrency.getText()).toString();
        await expect(TariffsPage.UAH).toBeSelected();
        assert.equal(currency, '₴', 'Currency is displayed incorrectly');
    });
});