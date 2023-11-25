import TariffsPage from '../pageobjects/tariffs.page.js';
import { expect } from '@wdio/globals';
import { assert } from 'chai';

describe("The 'More about tariffs' section verification", () => {
    
    before(() => {
        TariffsPage.open();
    });

    it("The 'More about tariffs' section should be present", async () => {
        await TariffsPage.tariffsTable.scrollIntoView();
        await expect(TariffsPage.tariffsTable).toBePresent();
    });

    it("'More' button should expand the tariffs table", async () => {
        await expect(TariffsPage.moreButton).toBeClickable();
        await TariffsPage.moreButton.click();
        await expect(TariffsPage.tariffsTable).toHaveElementClass('expanded');
    });

    it("The 'Book a demo' button should be clickable", async () => {
        await TariffsPage.bookDemoButton.scrollIntoView();
        await expect(TariffsPage.bookDemoButton).toBeClickable();
    });

    it("The 'Book a demo' button should open demo request form", async () => {
        await TariffsPage.bookDemoButton.click();
        const expectedUrl = 'https://hurma.work/en/request/';
        const actualUrl = (await browser.getUrl()).toString();
        assert.equal(expectedUrl, actualUrl, 'Received URL is incorrect');
    });
});