var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles= {
     'articleOne' :{title:'Article1||Meenakshi Ramanathan',
    heading:'This  love that feels right',
    date:'October 10',
    
    content:`"Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled 

with 'real' content. This is required when, for example, the final text is not yet available. "`,
    content1:`<p>
Life would have been easier had it been possible for us to plan falling in love , More importantly, avoid falling in love...'Love is not 

for you,' she told herself. Inside, just like any girl,she desired to be loved.</p>

<p>She had accepted her life the way it was, till one day love showed up unannounced, uninvited! That's the thing with love. It 

doesn't take permission. It's in its very nature to gatecrash into our lives Standing face-to-face with love, she finds herself asking, 

'Is this love right?'...The answer is not simple. It never was...This intense love story will shake every belief you've ever 

had.".According to the writer "The definition of love is changing, today if one's desires are not fulfilled with his/her partner, they 

start searching that anywhere else.</p>

<p>Having an extra relationship is very common these days. In other words, one start having different partners for different 

expectations.
 </p>`,
 content2:`<p>"Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled 

with 'real' content. This is required when, for example, the final text is not yet available."</p>`},
     
     'articleTwo' :{title:'Article2||Meenakshi Ramanathan',
    heading:'Article-Two',
    date:'October 20',
    content: ` <p> I have to develop a web app...And this would be the 2nd page of it</p>`},
       
        'articleThree':{title:'Article3||Meenakshi Ramanathan',
    heading:'Article-Three',
    date:'October 20',
    
    content: `<p> I have to develop a web app...And this would be the 3rd page of it</p>`},
          
          'articleFour':{title:'Article4||Meenakshi Ramanathan',
    heading:'Article-Four',
    date:'October 20',
    content: `</p> I have to develop a web app...And this would be the 4th page of it</p>`},
};

function createTemplate(data){
    var title=data.title;
    
    var heading=data.heading;
    var content=data.content;
    
    var content1=data.content1;
    var content2=data.content2;
    


 
    
var htmlTemplate = `<html xmlns="http://www.w3.org/1999/xhtml">
<head>

<title>${title}</title>

<meta name="viewport" content="width-device-width ,  initial-scale=1"/>
<link href="/ui/style.css" rel="stylesheet"/>

</head>
<body>

<div class="container">
<div id="wrapper">

<div class="tittle">
<h1>${heading}</h3>

</div>


<div class="col-md-3 col-sm-3">
<div class="quotes">
<p>${content}</p>
</div>
<div class="links">
<h2>Some links are</h4>
<ul>
<li><a href="">Amazon</a></li>
<li><a href="">Snapdeal</a></li>
<li><a href="">Flipkart</a></li>
<li><a href="">Lorem Imposem</a></li>
</ul>
</div>
</div>
<div class="col-md-6 col-sm-6" style="background:#2E84A6; padding:15px">

<div class="banner"><center>
<img src="https://kbimages1-a.akamaihd.net/43db11f0-3085-4f63-90eb-43d95d0a2647/166/300/False/this-love-that-feels-

right.jpg"/></center>
</div>
<div class="content">
<p>
${content1}
 </p>
 
</div>
<div class="user">
<h6>User Rating: <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Star_rating_4.5_of_5.png"></h6>
<h6>Rate of Book: <span style="color:#990100">$100</span></h6>
</div>
<div class="form">
<form>
<label>Comment : </label>
<textarea placeholder="Comment"></textarea>
<input type="submit" value="Submit" class="submit"/>
<form>
</div>
</div>

<div class="col-md-3 col-sm-3">
<div class="bio">
<img src="https://upload.wikimedia.org/wikipedia/commons/5/54/Ravinder_Singh.jpg">
<p>${content2}</p>
</div>
</div>
</div></div>
</body>
</html>
`;
return htmlTemplate
}







app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
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
