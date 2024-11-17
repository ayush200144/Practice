const express = require ("express");
const app = express();
let count = 0;
function check(req, res, next){
    console.log("method is ", req.method);
    console.log("route is ", req.url);
    console.log("hostname is ", req.name);
    console.log(new Date());
    next();
};
app.use(check);
app.get('/add', (req, res)=> {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans: a+b
    });
});
app.get('/sub', (req, res)=> {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans: a-b
    });
});
app.get('/mul', (req, res)=> {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans: a*b
    });
});
app.get('/div', (req, res)=> {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans: a/b
    });
});

app.listen(3000);