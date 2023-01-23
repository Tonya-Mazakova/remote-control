import { screen, mouse, Region } from '@nut-tree/nut-js';
import Jimp from 'jimp';

export const printScreen = async (args: string[]) => {
    const { x, y } = await mouse.getPosition();
    const region =
        new Region(x - 100, y - 100, 200, 200);

    const imgRGBA = await (await screen.grabRegion(region)).toRGB();

    const jimp = new Jimp({
        data: imgRGBA.data,
        width: imgRGBA.width,
        height: imgRGBA.height,
    });

    const base64buffer = await jimp.getBufferAsync(Jimp.MIME_PNG);
    const base64 = base64buffer.toString('base64');

    return `prnt_scrn ${base64}`;
}
