import { mouse, up } from "@nut-tree/nut-js";

export const moveMouseUp = async (args: string[]) => {
    const offset = Number(args[0])

    await mouse.move(up(offset))

    return `mouse moved up ${offset} px`
}
