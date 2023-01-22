import { mouse, left } from "@nut-tree/nut-js";

export const moveMouseLeft = async (args: string[]) => {
    const offset = Number(args[0])

    await mouse.move(left(offset))

    return `mouse moved left ${offset} px`
}
