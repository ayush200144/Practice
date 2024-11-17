const express = require("express");
const app = express();
//for this link link-> add/1/3
app.get('/add/:a/:b', function(req, res){
    //parseFloat() converts the query parameters a and b into numbers (supports decimal values).
    //parseint() converts the query parameters a and b into numbers .
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    res.json({
        ans: a + b
    });
});
app.get('/sub/:a/:b', function(req, res){
    //parseFloat() converts the query parameters a and b into numbers (supports decimal values).
    //parseint() converts the query parameters a and b into numbers .
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    res.json({
        ans: a - b
    });
});
app.get('/multiply/:a/:b', function(req, res){
    //parseFloat() converts the query parameters a and b into numbers (supports decimal values).
    //parseint() converts the query parameters a and b into numbers .
    const a = req.params.a;
    const b = req.params.b;
    res.json({
        ans: a * b
    });
});
app.get('/divide/:a/:b', function(req, res){
    //parseFloat() converts the query parameters a and b into numbers (supports decimal values).
    //parseint() converts the query parameters a and b into numbers .
    const a = req.params.a;
    const b = req.params.b;
    res.json({
        ans: a / b
    });
});

app.listen(3000);