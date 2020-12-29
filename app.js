const https = require("https");
const fs = require("fs");
const Io = require("socket.io")(server);

const option = {
    key: fs.readFileSync("privkey.pem"),
    cert:fs.readFileSync("cert.pem")
};

var server = https.createServer(option, (req,res)=> {
    res.writeHead(200);
    res.end("heyy");
})

