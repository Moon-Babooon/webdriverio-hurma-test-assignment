export default class Page {
    open (path) {
        // return browser.url(`https://hurma.work/en${path}`)
        return browser.url(path);
    }
}
