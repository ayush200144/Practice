const express = require ("express");
const app = express();
let count = 0;
function check(req, res, next){
    count = 1+count;
    next();
};
app.get('/add', check, (req, res)=> {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans: a+b
    });
});
app.get('/sub', check, (req, res)=> {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans: a-b
    });
});
app.get('/mul', check, (req, res)=> {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans: a*b
    });
});
app.get('/div', check, (req, res)=> {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans: a/b
    });
});
app.get('/final', (req, res)=> {
    res.json({
        "final count": count
    });
});
app.listen(3000);