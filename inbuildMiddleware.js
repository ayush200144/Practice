const express = require ("express");
//const bodyParser  = require("bodyParser");
const app = express();

//or app.use(bodyParser) is old but new is express.json, this contain the bodyParser under the hood.
app.use(express.json());
app.get('/add', (req, res)=> {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    res.json({
        ans: a+b
    });
});
app.get('/sub', (req, res)=> {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    res.json({
        ans: a-b
    });
});
app.get('/mul', (req, res)=> {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    res.json({
        ans: a*b
    });
});
app.get('/div', (req, res)=> {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    res.json({
        ans: a/b
    });
});

app.listen(3000);