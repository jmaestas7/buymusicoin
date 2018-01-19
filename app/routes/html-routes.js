var path = require('path');

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendfile(path.join(_dirname, "../public/index.html"))
    });
};