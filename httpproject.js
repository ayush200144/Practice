const express = require("express");
const app = express();
//for this link link-> add/?a=1&b=3
app.get('/add', function(req, res){
    //parseFloat() converts the query parameters a and b into numbers (supports decimal values).
    //parseint() converts the query parameters a and b into numbers .
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    res.json({
        ans: a + b
    });
});
app.get('/sub', function(req, res){
    //parseFloat() converts the query parameters a and b into numbers (supports decimal values).
    //parseint() converts the query parameters a and b into numbers .
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    res.json({
        ans: a - b
    });
});
app.get('/multiply', function(req, res){
    //parseFloat() converts the query parameters a and b into numbers (supports decimal values).
    //parseint() converts the query parameters a and b into numbers .
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a * b
    });
});
app.get('/divide', function(req, res){
    //parseFloat() converts the query parameters a and b into numbers (supports decimal values).
    //parseint() converts the query parameters a and b into numbers .
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a / b
    });
});

app.listen(3000);