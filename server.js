var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles= {
     'articleOne' :{title:'Article1||Meenakshi Ramanathan',
    heading:'Article-One',
    date:'October 10',
    img : {url:'http://image2',props:[],else:'val'},
    content:`<p> I have to develop a web app...And this would be the 2nd page of it</p>`},
     
     ' articleTwo':{title:'Article2||Meenakshi Ramanathan',
    heading:'Article-Two',
    date:'October 20',
    content: ` <p> I have to develop a web app...And this would be the 2nd page of it</p>`},
       
        'articleThree':{title:'Article3||Meenakshi Ramanathan',
    heading:'Article-Three',
    date:'October 20',
    img : {url:'http://image2',props:[],else:'val'},
    content: `<p> I have to develop a web app...And this would be the 3rd page of it</p>`},
          
          'articleFour':{title:'Article4||Meenakshi Ramanathan',
    heading:'Article-Four',
    date:'October 20',
    content: `</p> I have to develop a web app...And this would be the 4th page of it</p>`}
};

function createTemplate(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    var img=data.img;

}
    
    
var htmlTemplate = `
                  <html> 
<head>
<title>
${title}
</title>
<meta name="viewport" content="width-device-width ,  initial-scale=1"/>
<link href="/ui/style.css" rel="stylesheet"/>
</head>
${heading}
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

<div>
${img}
</div>
 <div>
${content}
</div>
</div>
</body>
</html>`
;

return htmlTemplate
}







app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/counter',function(req,res){
   counter=counter+1;
   res.send(counter.toString());
});




app.get('/:articleName',function(req,res){
    
    //articleName==articleOne
    //articles[articleName]=={}content object for article one
    
    var articleName=req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});






app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});


app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});






app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
