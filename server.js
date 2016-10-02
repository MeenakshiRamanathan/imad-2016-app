var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles= {
var articleOne :  {
    title:'Article-One||Meenakshi Ramanathan', 
heading: 'Article-One',
date: 'October 20',
content: ` </p> I have to develop a web app...And this would be the 1st page of it</p><p> I have to develop a web app...And this would be the 1st page of it</p><p> I have to develop a web app...And this would be the 1st page of it</p><p> I have to develop a web app...And this would be the 1st page of it</p>`
    },
var articleTwo={title:'Article2||Meenakshi Ramanathan',
    heading:'Article-Two',
    date:'October 20',
    content: ` </p> I have to develop a web app...And this would be the 2nd page of it</p><p> I have to develop a web app...And this would </p>`},
var articleThree={title:'Article3||Meenakshi Ramanathan',
    heading:'Article-Three',
    date:'October 20',
    content: ` </p> I have to develop a web app...And this would be the 3rd page of it</p>`},
var articleFour={title:'Article4||Meenakshi Ramanathan',
    heading:'Article-Four',
    date:'October 20',
    content: ` </p> I have to develop a web app...And this would be the 4th page of it</p>`}
};

function createTemplate(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    
    
var htmlTemplate = `
                  <html> 
<head>
<title>
${title}
</title>
<meta name="viewport" content="width-device-width ,  initial-scale=1"/>
<link href="/ui/style.css" rel="stylesheet"/>
</head>

<body>
<div class="container">
<div>
<a href="/">Home</a>
</div>
<hr/>
<h3>
${heading}
</h3>
<div>
${date}
</div>
${content}
</div>
</body>
</html>`
;

return htmlTemplate;
}







app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function(req,res){
    res.send(createTemplate(article-one));
});

app.get('/article-two',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three',function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/article-four',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-four.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
