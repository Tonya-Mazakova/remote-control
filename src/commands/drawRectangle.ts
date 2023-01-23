import { Button, down, left, mouse, right, up } from "@nut-tree/nut-js";

export const drawRectangle = async(args: string[]) => {
    const width = Number(args[0]);
    const length = Number(args[1]);

    await mouse.pressButton(Button.LEFT);
    await mouse.move(left(width));
    await mouse.move(up(length));
    await mouse.move(right(width));
    await mouse.move(down(length));
    await mouse.releaseButton(Button.LEFT);

    return `Rectangle is drawn with width - ${width} and length - ${length}`
}
