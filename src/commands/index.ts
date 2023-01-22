import { drawSquare } from "./drawSquare";
import { drawRectangle } from "./drawRectangle";
import { drawCircle } from "./drawCircle";
import { getMousePosition } from "./getMousePosition";
import { moveMouseUp } from "./moveMouseUp";
import { moveMouseDown } from "./moveMouseDown";
import { moveMouseLeft } from "./moveMouseLeft";
import { moveMouseRight } from "./moveMouseRight";

export const runCommand = async (command: string) => {
    const commandArr = command.split(" ");
    const [currentCommand, ...args] = commandArr;

    const commands = {
        draw_square: drawSquare,
        draw_rectangle: drawRectangle,
        draw_circle: drawCircle,
        mouse_position: getMousePosition,
        mouse_up: moveMouseUp,
        mouse_down: moveMouseDown,
        mouse_left: moveMouseLeft,
        mouse_right: moveMouseRight
    };

    return await commands[currentCommand as keyof typeof commands](args);
};
