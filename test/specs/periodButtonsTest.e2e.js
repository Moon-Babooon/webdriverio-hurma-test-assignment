import { expect } from '@wdio/globals';
import TariffsPage from '../pageobjects/tariffs.page.js';

describe('Verify that time period buttons work correctly', () => {

    before(() => {
        TariffsPage.open();
    });

    it('Period menu should be displayed', async () => {
        await expect(TariffsPage.periodControlMenu).toBeClickable();
    });

    it('3 months should be selected by default', async () => {
        await expect(TariffsPage.threeMonths).toHaveElementClass('active');
    });

    it('1 month should be selected', async () => {
        await TariffsPage.oneMonth.click();
        expect(TariffsPage.oneMonth).toHaveElementClass('active');
    });

    it('6 months should be selected', async () => {
        await TariffsPage.sixMonths.click();
        expect(TariffsPage.sixMonths).toHaveElementClass('active');
    });

    it('12 months should be selected', async () => {
        await TariffsPage.twelweMonths.click();
        expect(TariffsPage.twelweMonths).toHaveElementClass('active');
    });
});