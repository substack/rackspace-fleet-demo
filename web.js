var http = require('http');
var upnode = require('upnode');
var qs = require('querystring');

var up = upnode.connect(process.argv[4]);

http.createServer(function (req, res) {
    if (req.url.match(/^\/login/)) {
        var param = qs.parse(req.url.split('?')[1]);
        up(function (remote) {
            remote.auth(param.user, param.pass, function (err) {
                res.end(err ? err : 'OK!');
            });
        });
    }
    else {
        res.write('#' + process.argv[3] + '\n');
        res.end('beep boop!');
    }
}).listen(parseInt(process.argv[2], 10));
