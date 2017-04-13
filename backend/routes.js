"use strict";

module.exports = function(app) {
  var controller = require("./story");
  
  app.route("/qrcodes")
    .get(controller.list_all_codes);
  app.route('/qrcodessvg/:id/:msg')
    .get(controller.list_all_codes_svg);
  app.route('/qrcode/:id')
    .post(controller.add_or_update_code);
};
