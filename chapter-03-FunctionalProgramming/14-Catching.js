import { average } from "./13-ImprovedAverage.js";
import fs from "fs"
import path, { dirname } from "path";

try {
    console.log(average(8, 6, 9, 2))
} catch (e) {
    console.log(e);
    console.log('Make sure all the argments in the average function are of type "numbers"');
}

try {
    const __dirname = path.resolve()
    const universalPath = path.join(__dirname, 'chapter-03' ,'some_text.txt')
    const data = fs.readFileSync(universalPath, 'utf8')
    console.log(data)
} finally {
    console.log("Worked a treat");
}
