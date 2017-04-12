
const fs = require('fs');
const qr = require('qr-image');

exports.list_all_codes = function (req, res) {
   fs.readFile( __dirname + "/" + "codes.json", "utf8", function (err, data) {
       console.log( data );
       res.end( data );
   });
};
exports.list_all_codes_svg = function (req, res) {
   fs.readFile( __dirname + "/" + "codes.json", "utf8", function (err, data) {
       dataobj = JSON.parse(data)
       // take the item based on it's id
       item = dataobj[req.params.id]
       // convert message to qr code
       qrdata = qr.imageSync(item['entries'][req.params.msg]['message'])
       console.log( qrdata );
       res.end( qrdata );
   });
};
