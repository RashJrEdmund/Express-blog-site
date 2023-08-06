const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    const locals = { // this is to be rendered in the layouts/main.ejs a
        title: "Blog Site",
        description: "Simple blog created with Nodes.js and MongoDb"
    }


    res.render("pages/index", {locals}) // this automatically searches in the views directory
    /* 
        The res.render() function is used to render a view and sends the rendered HTML string to the client.
        so i'm currently rendering the index page as our index route
    */
})

router.get("/about", (req, res) => {
    res.render("pages/about")
})

module.exports = router;
