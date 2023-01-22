import { drawSquare } from "./drawSquare";
import { drawRectangle } from "./drawRectangle";
import { drawCircle } from "./drawCircle";

export const runCommand = async (command: string) => {
    const commandArr = command.split(" ");
    const [currentCommand, ...args] = commandArr;

    const commands = {
        draw_square: drawSquare,
        draw_rectangle: drawRectangle,
        draw_circle: drawCircle
    }

    commands[currentCommand as keyof typeof commands].call(this, args);
}
