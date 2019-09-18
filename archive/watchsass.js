var fs = require('fs');
const chokidar = require('chokidar');

chokidar.watch("src/components/**/*.scss").on('all', (event, path) => {
    console.log(event, path);
    if (event === "change") {
        const date = new Date();
        fs.utimesSync("./src/index.scss", date, date);
    }
});
