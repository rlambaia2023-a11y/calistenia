const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3000;
const MIME = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.svg':'image/svg+xml'};
const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');
  if (url.pathname === '/health') { res.writeHead(200, {'Content-Type':'application/json'}); res.end(JSON.stringify({ok:true, app:'calistenia', volume_necessario:false, dados:'localStorage no navegador'})); return; }
  let file = url.pathname === '/' ? 'index.html' : url.pathname.replace(/^\//, '');
  file = path.normalize(file).replace(/^(\.\.[\/\\])+/, '');
  const full = path.join(__dirname, file);
  if (!full.startsWith(__dirname)) { res.writeHead(403); res.end('Forbidden'); return; }
  fs.readFile(full, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    res.writeHead(200, {'Content-Type': MIME[path.extname(full)] || 'application/octet-stream', 'Cache-Control':'no-cache'});
    res.end(data);
  });
});
server.listen(PORT, () => console.log('Calistenia na porta ' + PORT));
