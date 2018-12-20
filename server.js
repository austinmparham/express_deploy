
var express = require("express");
var app = express();
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.get("/", function (request, response){
    response.render('about_me');
})
app.get("/tech_skills", function (request, response){
    response.render('tech_skills');
})
app.get("/projects", function (request, response){
    response.render('projects');
})
app.get("/contact", function (request, response){
    response.render('contact');
})
app.listen(8000, function() {
  console.log("listening on port 8000");
})