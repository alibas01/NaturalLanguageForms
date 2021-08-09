//exported functions

// declared variables
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require('morgan');
const path = require('path')
const app = express();
// app.use executions
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('tiny'));
app.use('/static', express.static(path.join(__dirname, 'public')))
const PORT = 2329;




// GET /
app.get("/", (req, res) => {
  res.redirect("/static");
});


// server listen on port 8080
app.listen(PORT, () => {
  console.log(`NaturalLanguageForms listening on port ${PORT}! 😎 `);
});