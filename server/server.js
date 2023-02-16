const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const database = require("./config/database");

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "..", "client/build")));

app.use('/api/auth', require("./controllers/Auth"));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "client/public/index.html"));
});

app.set('port', process.env.PORT | 5005); 

app.listen(app.get('port'), () => console.log("Listen on " + app.get('port')));
