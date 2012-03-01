var dnode = require('dnode');
var upnode = require('upnode');

var server = dnode(function (remote, conn) {
    this.auth = function (user, pass, cb) {
        var users = {
            foo : 'bar'
        };
        var p = users[user];
        if (p === pass) cb(null)
        else cb('ACCESS DENIED')
    };
});
server.use(upnode.ping);
server.listen(process.argv[2]);
