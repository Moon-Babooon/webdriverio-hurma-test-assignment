# Test Assignment - WebDriverIO

## Commands for Launching Tests:
#### Inside the project directory

### Launching all tests (Locally)
```bash
npx wdio
```
#### This will launch all 5 tests on chrome and firefox at the same time

### Test Case #1 - Verify that the pricing changes when employee count is adjusted
**Launch command:**
```bash
npx wdio --spec pricingChangeTest.e2e.js
```

### Test Case #2 - Verify that time period buttons work correctly
**Launch command:**
```bash
npx wdio --spec periodButtonsTest.e2e.js
```

### Test Case #3 - Verify that currency drop-down menu works correctly
**Launch command:**
```bash
npx wdio --spec currencyDropDownTest.e2e.js
```

### Test Case #4 - ‘More about tariffs’ section verification
**Launch command:**
```bash
npx wdio --spec demoButtonTest.e2e.js
```

### Test Case #5 - Scroll loading line verification
**Launch command:**
```bash
npx wdio --spec scrollLoadLineTest.e2e.js
```

### Launching tests in Docker
#### To Build an image:
```bash
docker build -t wdiotest .
```
#### To run test in container:
```bash
docker run --rm -it wdiotest
```