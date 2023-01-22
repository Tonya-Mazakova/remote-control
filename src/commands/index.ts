import { mouse, left, up, right, down } from '@nut-tree/nut-js'

export const runCommand = async (command: string) => {
    await mouse.move(left(500));
    await mouse.move(up(500));
    await mouse.move(right(500));
    await mouse.move(down(500))
}
