const express = require("express");
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
//without using cors by bringing html file in the cors.js using sendfile and giving the path of the html
//before start this see the cros.html path which is written
// app.get('/', (req, res)=>{
//     res.sendFile(__dirname+"/cros.html");
// })
app.post('/sum', (req, res)=>{
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        ans: a+b
    });
});
app.listen(3000);