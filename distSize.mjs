// https://www.npmjs.com/package/get-folder-size
import getFolderSize from "get-folder-size";
// https://www.npmjs.com/package/filesize
import { filesize } from "filesize";

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const packageData = require("./package.json");

const folderDataRequired = [
    {
        folders: [
            "./dist/honeypot/ui/common/fonts/", //
            "./dist/honeypot/ui/default/fonts/",
            "./dist/honeypot/ui/slotmasters/fonts/",
        ],
        output: "7a Framework Fonts = <%size%>",
    },
    {
        folders: [
            "./dist/assets/fonts/", //
        ],
        output: "7b Client Fonts = <%size%>",
    },
    {
        folders: [
            "./dist/honeypot/ui/common/sounds/", //
            "./dist/honeypot/ui/default/sounds/",
            "./dist/honeypot/ui/slotmasters/sounds/",
        ],
        output: "8a Framework Sounds = <%size%>",
    },
    {
        folders: [
            "./dist/assets/sounds/", //
        ],
        output: "8b Client Sounds = <%size%>",
    },
    {
        folders: [
            "./dist/honeypot/ui/common/images/common/@2x/", //
            "./dist/honeypot/ui/common/images/en-gb/@2x/",
            "./dist/honeypot/ui/common/images/el-gr/@2x/",
            "./dist/honeypot/ui/common/images/es-es/@2x/",
            "./dist/honeypot/ui/common/images/ro-ro/@2x/",
            "./dist/honeypot/ui/common/images/ja-jp/@2x/",
            "./dist/honeypot/ui/common/images/en-us/@2x/",
            "./dist/honeypot/ui/default/images/common/@2x/", //
            "./dist/honeypot/ui/default/images/en-gb/@2x/",
            "./dist/honeypot/ui/default/images/el-gr/@2x/",
            "./dist/honeypot/ui/default/images/es-es/@2x/",
            "./dist/honeypot/ui/default/images/ro-ro/@2x/",
            "./dist/honeypot/ui/default/images/ja-jp/@2x/",
            "./dist/honeypot/ui/default/images/en-us/@2x/",
            "./dist/honeypot/ui/slotmasters/images/common/@2x/", //
            "./dist/honeypot/ui/slotmasters/images/en-gb/@2x/",
            "./dist/honeypot/ui/slotmasters/images/el-gr/@2x/",
            "./dist/honeypot/ui/slotmasters/images/es-es/@2x/",
            "./dist/honeypot/ui/slotmasters/images/ro-ro/@2x/",
            "./dist/honeypot/ui/slotmasters/images/ja-jp/@2x/",
            "./dist/honeypot/ui/slotmasters/images/en-us/@2x/",
        ],
        output: "9a Framework @2x Assets = <%size%>",
    },
    {
        folders: [
            "./dist/assets/images/common/@2x/", //
            "./dist/assets/images/en-gb/@2x/",
            "./dist/assets/images/el-gr/@2x/",
            "./dist/assets/images/es-es/@2x/",
            "./dist/assets/images/ro-ro/@2x/",
            "./dist/assets/images/ja-jp/@2x/",
            "./dist/assets/images/en-us/@2x/",
        ],
        output: "9b Client @2x Assets = <%size%>",
    },
    {
        folders: [
            "./dist/honeypot/ui/common/images/common/@1x/", //
            "./dist/honeypot/ui/common/images/en-gb/@1x/",
            "./dist/honeypot/ui/common/images/el-gr/@1x/",
            "./dist/honeypot/ui/common/images/es-es/@1x/",
            "./dist/honeypot/ui/common/images/ro-ro/@1x/",
            "./dist/honeypot/ui/common/images/ja-jp/@1x/",
            "./dist/honeypot/ui/common/images/en-us/@1x/",
            "./dist/honeypot/ui/default/images/common/@1x/", //
            "./dist/honeypot/ui/default/images/en-gb/@1x/",
            "./dist/honeypot/ui/default/images/el-gr/@1x/",
            "./dist/honeypot/ui/default/images/es-es/@1x/",
            "./dist/honeypot/ui/default/images/ro-ro/@1x/",
            "./dist/honeypot/ui/default/images/ja-jp/@1x/",
            "./dist/honeypot/ui/default/images/en-us/@1x/",
            "./dist/honeypot/ui/slotmasters/images/common/@1x/", //
            "./dist/honeypot/ui/slotmasters/images/en-gb/@1x/",
            "./dist/honeypot/ui/slotmasters/images/el-gr/@1x/",
            "./dist/honeypot/ui/slotmasters/images/es-es/@1x/",
            "./dist/honeypot/ui/slotmasters/images/ro-ro/@1x/",
            "./dist/honeypot/ui/slotmasters/images/ja-jp/@1x/",
            "./dist/honeypot/ui/slotmasters/images/en-us/@1x/",
        ],
        output: "10a Framework @1x Assets = <%size%>",
    },
    {
        folders: [
            "./dist/assets/images/common/@1x/", //
            "./dist/assets/images/en-gb/@1x/",
            "./dist/assets/images/el-gr/@1x/",
            "./dist/assets/images/es-es/@1x/",
            "./dist/assets/images/ro-ro/@1x/",
            "./dist/assets/images/ja-jp/@1x/",
            "./dist/assets/images/en-us/@1x/",
        ],
        output: "10b Client @1x Assets = <%size%>",
    },
    {
        folders: [
            `./dist/${packageData.zipFileName}.v${packageData.version}.zip`, //
        ],
        output: "11 Overall Zip file = <%size%>",
    },
];

const asyncGetFolderSizes = async () => {
    for (let i = 0; i < folderDataRequired.length; i++) {
        let folderSize = 0;
        for (let f = 0; f < folderDataRequired[i].folders.length; f++) {
            const details = await getFolderSize(folderDataRequired[i].folders[f]);
            folderSize += details.size;
        }

        console.log(folderDataRequired[i].output.replace("<%size%>", filesize(folderSize)));
    }
};

asyncGetFolderSizes();
