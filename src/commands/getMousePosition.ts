import { mouse } from "@nut-tree/nut-js";

export const getMousePosition = async (args: string[] ): Promise<string> => {
    const coord = await mouse.getPosition()

    return `mouse_position ${coord.x},${coord.y}`
}
