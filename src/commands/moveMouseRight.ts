import { mouse, right } from "@nut-tree/nut-js";

export const moveMouseRight = async (args: string[]) => {
    const offset = Number(args[0])

    await mouse.move(right(offset))

    const msg = `mouse moved right ${offset} px`

    console.log(msg)
    return msg
}
