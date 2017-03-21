
var fs = require('fs');

exports.list_all_codes = function (req, res) {
   fs.readFile( __dirname + "/" + "codes.json", "utf8", function (err, data) {
       console.log( data );
       res.end( data );
   });
};
