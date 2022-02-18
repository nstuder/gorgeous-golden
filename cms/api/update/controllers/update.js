"use strict";
const { exec } = require("child_process");
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async updateFrontend(ctx) {
    exec("npm run --prefix ../frontend build", (err, stdout, stderr) => {
      if (err) {
        console.log(stdout);
        return;
      }
      console.log("Successfully updated Frontend");
    });
    return "start to update Frontend";
  },
};
