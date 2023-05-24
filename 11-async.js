const { error } = require("console");
const fs = require("fs");
fs.readFile(`./content/test1.txt`, 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    fs.readFile(`./content/test2.txt`, `utf8`, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        fs.writeFile(
            `./content/result-async.txt`,
            `Here is the result :- ${first}, ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(result);
            }
        )
    })
})
