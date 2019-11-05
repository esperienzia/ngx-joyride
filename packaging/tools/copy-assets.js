const { PATH_SRC, PATH_DIST } = require('../config-library.js');

var fs = require("fs-extra");

fs.copy(PATH_SRC + 'assets', PATH_DIST + 'assets')
    .then(() => {
        console.info("[PACKAGING]::: Copying assets.");
    })
    .catch((err) => {
        if (err) return console.error(err)
    });
