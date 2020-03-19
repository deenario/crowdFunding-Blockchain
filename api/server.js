require('dotenv').config();
const app = require("./app");
const http = require('http');

const port = process.env.PORT || 3000;

app.set('port', port);
const httpServer = http.createServer(app);

let server = httpServer.listen(port, () => {
    console.log('HTTPS Server running on port ', process.env.PORT);
});
