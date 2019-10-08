const fs = require('fs');
const {authorize} = require('./config');
const { google } = require('googleapis');
// Change it with your id.
const spreadsheetId = "1loKwBpwaJatUb1hlH91-AwNZyLshbyBH-KVXZ8Frlzc";
 
const append = (range, values) => {
    fs.readFile('credentials.json', (err, content) => {
        if (err) return console.log('Error loading client secret file:', err);
        // Authorize a client with credentials, then call the Google Sheets API.
        authorize(JSON.parse(content), (auth) => {
            const sheets = google.sheets({ version: 'v4', auth });
            const valueInputOption = 'USER_ENTERED';
            const resource = {values};
            sheets.spreadsheets.values.append({
                spreadsheetId, range, valueInputOption, resource
            }, (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Success!");
                }
            });
        });
    });
}
module.exports = {append};
