const sheets = require('./sheets');
 
sheets.append(
    "Foglio1!A1",
    [
        ["data 1", "data 2", "data3"]
    ]
);

sheets.update(
    "Foglio1!A7",
    [
        ["UPDATE", "UPDATE", "UPDATE"]
    ]
);
