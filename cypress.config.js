const { defineConfig } = require('cypress');
const xlsx = require('node-xlsx').default;
const fs = require('fs'); // for file
const path = require('path');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        parseXlsx({ filePath }) {
          return new Promise((resolve, reject) => {
            try {
              const jsonData = xlsx.parse(fs.readFileSync(filePath));
              resolve(jsonData);
            } catch (error) {
              reject(error);
            }
          });
        },
      });
    },
  },
});
