import { WebSocketServer, WebSocket, createWebSocketStream } from 'ws';
import { runCommand } from "../commands";

export const runWebSocketServer = (port: number) => {
    const wss = new WebSocketServer({ port })

    console.log(`Start webSocket server on the ${port} port!`);

    wss.on('connection', async (ws: WebSocket) => {
        const duplex = createWebSocketStream(ws, {
            decodeStrings: false,
            encoding: 'utf8',
        });

        duplex.on('data', async (command: string) => {
            try {
                const result = await runCommand(command)
                duplex.write(result)

            } catch (e: any) {
                console.error(JSON.stringify(e));
            }
        });

        ws.on('close', () => {
            console.log('WebSocket client is disconnected');
        });
    })
}
