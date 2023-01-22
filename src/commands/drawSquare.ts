import { Button, down, left, mouse, right, up } from "@nut-tree/nut-js";

export const drawSquare = async (args: string[]) => {
    const width = Number(args[0]);

    await mouse.pressButton(Button.LEFT);
    await mouse.move(left(width));
    await mouse.move(up(width));
    await mouse.move(right(width));
    await mouse.move(down(width));
    await mouse.releaseButton(Button.LEFT);

    return `Square is drawn with width - ${width}`
}
