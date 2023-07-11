const http = require('http');
const url = require('url');
const server = http.createServer((req,res) => {
const { pathname,query } = url.parse(req.url, true);
if(pathname === '/add') {
const a = parseInt (query.a, 10) ||2;
const b = parseInt (query.b, 10) ||3;
const c = a + b;
res.writeHead(200, { 'Content-Type': 'text/html' });
res.write(`<h1>Sum of ${a} and ${b} is ${c}</h1>`);
res.end();
} else {
res.writeHead(404, { 'Content-Type': 'text/html' });
res.write('<h1>404 Not Found</h1>');
res.end();
}
});
server.listen(9090,'localhost', () => {
console.log('Good Day');
});