import { mouse, down } from "@nut-tree/nut-js";

export const moveMouseDown = async (args: string[]) => {
    const offset = Number(args[0])

    await mouse.move(down(offset))

    const msg = `mouse moved down ${offset} px`;

    console.log(msg);
    return msg
}
