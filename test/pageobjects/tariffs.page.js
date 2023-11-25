import Page from './page.js';

class TariffsPage extends Page {

    get tariffsCards () {
        return $('#tariff-page .tariff-cards');
    }
    get primaryCard () {
        return $('.tariff-cards>div:first-child');
    }
    get primaryDropDown () {
        return $('.primary .custom-select>select');
    }
    get primaryDropDownOptions () {
        return $$('.primary .custom-select>select>option')
    }
    get primaryPrice () {
        return $('.primary .price-per-month');
    }
    get primaryCurrency () {
        return $('.primary .currency');
    }
    get individualPrice () {
        return $('.primary .individual-price>h4');
    }
    get periodControlMenu () {
        return $('.period-and-currency .period-control');
    }
    get oneMonth () {
        return $('.period-control>div:nth-child(1)');
    }
    get threeMonths () {
        return $('.period-control>div:nth-child(2)');
    }
    get sixMonths () {
        return $('.period-control>div:nth-child(3)');
    }
    get twelweMonths () {
        return $('.period-control>div:nth-child(4)');
    }
    get currencySelect () {
        return $('.period-and-currency .currency-select>select');
    }
    get EUR () {
        return $('.period-and-currency .currency-select>select>option:nth-child(1)');
    }
    get USD () {
        return $('.period-and-currency .currency-select>select>option:nth-child(2)');
    }
    get UAH () {
        return $('.period-and-currency .currency-select>select>option:nth-child(3)');
    }
    get employeeNumberSelect () {
        return $('.primary .custom-select>select');
    }
    get moreButton () {
        return $('.expand-button>button');
    }
    get bookDemoButton () {
        return $('.book-demo>button');
    }
    get tariffsTable () {
        return $('.tariffs .tariff-table');
    }
    get scrollLine () {
        return $('#scroll_loading #line_scroling');
    }
    get footer () {
        return $('footer .footer__rights');
    }

    open () {
        return super.open('tariffs');
    }
}

export default new TariffsPage();
