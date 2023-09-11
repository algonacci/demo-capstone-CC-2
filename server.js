const jsonServer = require("json-server");
const cors = require("cors");
const server = jsonServer.create();
const router = jsonServer.router("data.json");
const middlewares = jsonServer.defaults({ noCors: false });
const port = process.env.PORT || 5000;

const IP = "192.168.0.109";

server.use(middlewares);
server.use(cors());
server.use(router);
console.log(`🚀 [SERVER] is running on port http://localhost:${port}`);
server.listen(port);
