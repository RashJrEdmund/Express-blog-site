require("dotenv").config();

const express = require("express");
const expressLayout = require("express-ejs-layouts");
const mainRoute = require("./server/routes/main");

const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.static(__dirname + "/public")) // setting up static dir for our assets.
/* 
    setting static assests like this helps so that we could say something like
    /css/style.scss or /img/... without necessary moving through all the top directories.
    in other words, it makes "/" reffernce the public folder.
*/

// Templating Engine
app.use(expressLayout);
app.set("layout", "./layouts/main"); // setting up layout in the main dir
app.set("view engine", "ejs"); // setting up view engine to ejs. very important

app.use("/", mainRoute); // main route

app.listen(PORT, () => console.log(`listenning on port: ${PORT} ...`))