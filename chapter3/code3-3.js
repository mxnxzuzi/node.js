const http = require("http");
const url = require("url");
http //createServer 리팩터링
    .createServer((req, res) => {
        const path = url.parse(req.url, true).pathname;
        res.setHeader("Content-Type", "text/html");

        if(path ===  "/user") {
            // res.end("[user] name : minju, age: 20");
            user(req, res);
        } else if (path === "/feed") {
            // res.end(`<ul>
            // <li>picture1</li>
            // <li>picture2</li>
            // <li>picture3</li>
            // </ul>`);
            feed(req ,res);
        } else {
            // res.statusCode = 404;
            // res.end("404 page not found");
            notFound(req, res);
        }
    })
    .listen("3000", () => console.log("라우터를 만들어보자!"));

const user = (req, res) => {
    res.end(`[user] name : minju, age: 20`);
};

const feed = (req, res) => {
    res.end(`<ul>
    <li>picture1</li>
    <li>picture2</li>
    <li>picture3</li>
    </ul>`);
};

const notFound = (req, res) => {
    res.statusCode = 404;
    res.end("404 page not found");
};