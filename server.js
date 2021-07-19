let http = require("http");
// let dt = require("./myfirstmodule");
let url = require("url");
let fs = require("fs");


/* Address Query String */
// let adr = 'http://localhost:8000/default.html?year=2020&month=May';
// let q = url.parse(adr, true);

// console.log(q.host); //return localhost:8000
// console.log(q.pathname); 
// console.log(q.search);

// let qdata = q.query;
// console.log(qdata.month);


/* Initial */
// http.createServer(function (req, res){
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(req.url);
//     res.write('The date and time currently :' +dt.myDateTime());
//     res.end('Hello World');
// }).listen(8000);

/* Splte Query String */
// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     let q = url.parse(req.url, true).query;
//     let txt = q.year + " " + q.month;
//     res.end(txt);
//   })
//   .listen(8000);

http.createServer(function (req, res) {
    let q = url.parse(req.url , true);
    let filename = "." +q.pathname;

    fs.readFile(filename, function (err, data) {
        if(err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end('404 Not Found');
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
  }).listen(8000);


/* File System */  
// fs.appendFile("myFile.txt", "Hello, World", function (err) {
//   if (err) throw error;
//   console.log("Saved!");
// });

// fs.open("myFile2.txt", "w", function (err, file) {
//   if (err) throw err;
//   console.log("Saved");
// });

// fs.writeFile("myFile3.txt", "This is New File 3 OKOK", function (err) {
//   if (err) throw err;
//   console.log("Saved");
// });

/* appent data file */
// fs.appendFile("myFile3.txt", "This is New File 3 OKOK Update", function (err) {
//     if (err) throw err;
//     console.log("Saved");
// });


/* delete file */
// fs.unlink("myFile3.txt", function (err) {
//     if (err) throw err;
//     console.log("File Deleted");
// });

/* rename file */
// fs.rename("myFile2.txt", 'renameFile2.txt',function (err) {
//     if (err) throw err;
//     console.log("File Renamed!");
// });