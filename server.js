var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');

var servicePort = 8081;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'))

var port = process.env.PORT || servicePort;


var router = express.Router();

router.get('/', function(req, res) {
    res.render('index.html');
});

app.listen(port);
console.log(`service listening on port: ` + port);