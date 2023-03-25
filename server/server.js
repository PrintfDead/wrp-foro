const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const database = require("./config/database");

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "..", "client/build")));

app.use(cookieParser());
app.use(session({
    secret: "123asd312312dw2e12eawdf",
    saveUninitialized: true,
    resave: true
}));

app.use('/api/auth', require("./controllers/Auth"));
app.use('/api/pcu', require("./controllers/PCUdata"));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "client/public/index.html"));
});

app.set('port', process.env.PORT | 5005); 

app.listen(app.get('port'), () => console.log("Listen on " + app.get('port')));
console.log("hola");
