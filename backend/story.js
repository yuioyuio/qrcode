
const fs = require('fs');
const qr = require('qr-image');

exports.list_all_codes = function (req, res) {
   fs.readFile( __dirname + "/" + "codes.json", "utf8", function (err, data) {
       console.log( data );
       // should we use res.json(data) instead?
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
exports.add_or_update_code = function (req, res) {
  const fname = __dirname + "/" + "codes.json"
  fs.readFile(fname, "utf8", function (err, data) {
      dataobj = JSON.parse(data);
      
      story_id = req.params.id
      console.log(req.body);
      const item = dataobj[story_id];
      
      // new entry
      const message   = req.body.message || 'empty message'
      const timestamp = req.body.timestamp || new Date()
      const new_entry = {'message': message, 'timestamp': timestamp}
      const coord     = req.body.coord || [0.0, 0.0]

      if (item) {
        console.log('item already exists!')
        item.entries.push()
      }
      else {
        console.log('new item coming through!')
        dataobj.story_id = {}
        dataobj.story_id.entries = [new_entry]
        dataobj.story_id.coord = coord
      }
      
      fs.writeFile(fname, JSON.stringify(dataobj), 'utf8')

      res.json(item );

   });
  };
