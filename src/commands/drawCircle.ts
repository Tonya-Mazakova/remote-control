import { Button, mouse, straightTo, Point } from "@nut-tree/nut-js";

export const drawCircle = async(args: string[]) => {
    const { x, y } = await mouse.getPosition();
    const radius = Number(args[0]);
    let coordX = 0;
    let coordY = 0;

    await mouse.pressButton(Button.LEFT);

    for (let i = 0; i <= 360; i++) {
        coordX = x - radius + (radius * Math.cos((i * Math.PI) / 180));
        coordY = y + (radius * Math.sin((i * Math.PI) / 180));
        await mouse.move(straightTo(new Point(coordX, coordY)));
    }

    await mouse.releaseButton(Button.LEFT);

    return `Circle is drawn with radius - ${radius}`;
};
