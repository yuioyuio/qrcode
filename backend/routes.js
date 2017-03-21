"use strict";

module.exports = function(app) {
  var controller = require("./story");
  
  app.route("/qrcodes")
    .get(controller.list_all_codes);
};
