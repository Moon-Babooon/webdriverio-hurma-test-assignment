## Commands for Launching Tests:

### Test Case #1 - Verify that the pricing changes when employee count is adjusted
**Command:**
```bash
npx wdio run ./wdio.conf.js --spec pricingChangeTest.e2e.js
```

### Test Case #2 - Verify that time period buttons work correctly
**Launch command:**
```bash
npx wdio run ./wdio.conf.js --spec periodButtonsTest.e2e.js
```

### Test Case #3 - Verify that currency drop-down menu works correctly
**Launch command:**
```bash
npx wdio run ./wdio.conf.js --spec currencyDropDownTest.e2e.js
```

### Test Case #4 - ‘More about tariffs’ section verification
**Launch command:**
```bash
npx wdio run ./wdio.conf.js --spec demoButtonTest.e2e.js
```

### Test Case #5 - Scroll loading line verification
**Launch command:**
```bash
npx wdio run ./wdio.conf.js --spec scrollLoadLineTest.e2e.js
```