const http = require('http');
const fs = require ('fs');
const server = http.createServer((req,res) => {
fs.readFile('data.txt', 'utf8', (err,data) => {
if (err) {
res.writeHead(500, { 'Content-Type': 'text/html' });
res.Write('<h1> ERROR </h1>');
res.end();
} else {
res.writeHead(200, { 'Content-Type': 'text/plain' });
res.write(data);
res.end();
}
});
});
server.listen(8081, '127.0.0.1', () => {
console.log('Good Day');
});