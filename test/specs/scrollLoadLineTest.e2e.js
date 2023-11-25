import tariffsPage from '../pageobjects/tariffs.page.js';
import TariffsPage from '../pageobjects/tariffs.page.js';
import { expect } from '@wdio/globals';

describe('Scroll loading line verification', () => {

    before(() => {
        TariffsPage.open();
    });

    it('Loading line should be have width 100% at the bottom of the page', async () => {
        await TariffsPage.footer.scrollIntoView();
        await expect(tariffsPage.scrollLine).toHaveAttribute('style', 'width: 100%;');
    });
    
});