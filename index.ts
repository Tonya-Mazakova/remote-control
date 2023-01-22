import { httpServer } from "./src/http_server";
import { runWebSocketServer } from "./src/ws_server";
// import { mouse } from "@nut-tree/nut-js";

const HTTP_PORT = 8181;
const WSS_PORT = 8081;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

runWebSocketServer(WSS_PORT);
