const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/:method", (req, res) => {
    var numberOne = parseInt(req.body.numberOne);
    var numberTwo = parseInt(req.body.numberTwo);
    var result = 0;
    switch(req.params.method){
        case "addition":
            result = numberOne+numberTwo;
            break;
        case "subtraktion":
            result = numberOne-numberTwo;
            break;
        case "multiplikation":
            result = numberOne*numberTwo;
            break;
         case "division":
            if(numberTwo == 0){
                res.statusCode = 500;
                result = "Division durch Null nicht möglich!";
            } else {
                result = numberOne/numberTwo;
            }
            break;
        default:
            res.statusCode = 200;
            break;
    }
    var data = {
        "result":result
    }
    console.log(data);
    
    res.send(JSON.stringify(data));
    
    res.end;
});

console.log("Trying to start server");
app.listen(3001, () => console.log("server started successfully"));