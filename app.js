let formidable = require("formidable");
let http = require("http");
let fs = require('fs');

http
  .createServer(function (req, res) {
    if (req.url == "/fileupload") {
      let form = new formidable.IncomingForm();
      form.parse(req, function (err, field, files) {
        let oldpath = files.fileupload.path;
        let newpath = '/Users/arm/Desktop/github/practice-nodejs-basic/img/'+ files.fileupload.name;
        fs.rename(oldpath, newpath, function(err){
            if(err) throw err;
            res.write('File uploaded and moved');
            res.write('xxxx');
            res.end();
        });
      });
    } else {
      res.writeHead("200", { "Content-Type": "text/html" });
      res.write(
        '<form action="fileupload" method="post" enctype="multipart/form-data">'
      );
      res.write('<input type="file" name="fileupload"></br>');
      res.write('<input type="submit">');
      res.write("</form>");
      return res.end();
    }
  })
  .listen(8000);
