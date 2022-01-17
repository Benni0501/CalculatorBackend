const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/login", (req, res) => {
    
});

console.log("Trying to start server");
app.listen(3001, () => console.log("server started successfully"));