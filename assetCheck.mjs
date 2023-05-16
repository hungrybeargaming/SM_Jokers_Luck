// https://www.npmjs.com/package/glob
import { glob, globSync, globStream, globStreamSync, Glob } from "glob";
// https://www.npmjs.com/package/image-size
import sizeOf from "image-size";

const asyncCheckAssets = async () => {
    const pngX2files1 = await glob("./dist/assets/images/**/@2x/**/*.png", { ignore: "node_modules/**" });
    const pngX2files2 = await glob("./dist/assets/images/**/@2x/*.png", { ignore: "node_modules/**" });
    const pngX2files = pngX2files1.concat(pngX2files2);

    const pngX1files1 = await glob("./dist/assets/images/**/@1x/**/*.png", { ignore: "node_modules/**" });
    const pngX1files2 = await glob("./dist/assets/images/**/@1x/*.png", { ignore: "node_modules/**" });
    const pngX1files = pngX1files1.concat(pngX1files2);

    const jpgX2files1 = await glob("./dist/assets/images/**/@2x/**/*.jpg", { ignore: "node_modules/**" });
    const jpgX2files2 = await glob("./dist/assets/images/**/@2x/*.jpg", { ignore: "node_modules/**" });
    const jpgX2files = jpgX2files1.concat(jpgX2files2);

    const jpgX1files1 = await glob("./dist/assets/images/**/@1x/**/*.jpg", { ignore: "node_modules/**" });
    const jpgX1files2 = await glob("./dist/assets/images/**/@1x/*.jpg", { ignore: "node_modules/**" });
    const jpgX1files = jpgX1files1.concat(jpgX1files2);

    if (pngX2files.length !== pngX1files.length) {
        console.log("\x1b[91mERROR - different number of PNGS between @2x and @1x\x1b[0m");
        // could we dump out the diffs?
        return;
    }
    if (jpgX2files.length !== jpgX1files.length) {
        console.log("\x1b[91mERROR - different number of JPGS between @2x and @1x\x1b[0m");
        // could we dump out the diffs?
        return;
    }

    let errorFound = false;
    for (let i = 0; i < pngX2files.length; i++) {
        const x2Size = sizeOf(pngX2files[i]);
        const x1Filename = pngX2files[i].replace("\\@2x\\", "\\@1x\\");
        const x1Size = sizeOf(x1Filename);

        if (x1Size.width * 2 !== x2Size.width || x1Size.height * 2 !== x2Size.height) {
            // this isnt correct
            errorFound = true;
            console.log(`\x1b[33m${x1Filename} dimensions arent half the size of ${pngX2files[i]}\x1b[0m`);
        }
    }

    if (errorFound === true) {
        console.log("\x1b[91mERROR DETECTED WITH ASSETS - PLEASE DOUBLE CHECK \x1b[0m");
        return;
    }

    for (let i = 0; i < jpgX2files.length; i++) {
        const x2Size = sizeOf(jpgX2files[i]);
        const x1Filename = jpgX2files[i].replace("\\@2x\\", "\\@1x\\");
        const x1Size = sizeOf(x1Filename);

        if (x1Size.width * 2 !== x2Size.width || x1Size.height * 2 !== x2Size.height) {
            // this isnt correct
            errorFound = true;
            console.log(`\x1b[33m${x1Filename} dimensions arent half the size of ${jpgX2files[i]}\x1b[0m`);
        }
    }

    if (errorFound === true) {
        console.log("\x1b[91mERROR DETECTED WITH ASSETS - PLEASE DOUBLE CHECK \x1b[0m");
        return;
    }

    console.log("\x1b[92mAssets Check PASSED!!\x1b[0m");
};

asyncCheckAssets();
