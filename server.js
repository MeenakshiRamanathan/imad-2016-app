var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool=require('pg').Pool;

var config={
    user:'meenakshiramanathan',
    database:'meenakshiramanathan',
    host:'http://db.imad.hasura-app.io/',
    port:'5432',
    password:process.env.DB_PASSWORD
};
var app = express();
app.use(morgan('combined'));


var articles= {
 'articleOne' :
    
    {title:'Article1||Meenakshi Ramanathan',
    heading:'This  love that feels right',
    img:{src:"https://kbimages1-a.akamaihd.net/43db11f0-3085-4f63-90eb-43d95d0a2647/166/300/False/this-love-that-feels-right.jpg"},
    content:`"Once upon a time, it was enough to be compatible to live together companionably, <br/>raise children and struggle together �<br/> now, the expectations of both men and women from marriage has changed. Everyone wants a grand love story.<br/>What will you do if you find true love,but it's already too late? "`,
    content1:`<p>
    Life would have been easier had it been possible for us to plan falling in love , More importantly, avoid falling in love...'Love is not 
    for you,' she told herself. Inside, just like any girl,she desired to be loved.</p>
    <p>She had accepted her life the way it was, till one day love showed up unannounced, uninvited! That's the thing with love. It 
    doesn't take permission. It's in its very nature to gatecrash into our lives Standing face-to-face with love, she finds herself asking, 
    'Is this love right?'...The answer is not simple. It never was...This intense love story will shake every belief you've ever 
    had.".According to the writer "The definition of love is changing, today if one's desires are not fulfilled with his/her partner, they 
    start searching that anywhere else.</p><p>Having an extra relationship is very common these days. In other words, one start having different partners for different 
    expectations. </p>`,
    content2:`<p>"Ravinder Singh, the author of six bestselling novels is very well known and has a great reader base from his first novel.I Too Had A Love Story”. Ravinder did his MBA and working as a Sr. Program Manager at Microsoft when he left his job to become a full-time author.</p><p>His first novel “I Too Had A Love Story” is based on his real life and written with the memories of his Girlfriend who died in 2007 before their engagement."</p>`},
    

 'articleTwo' :
    
    {title:'Article2||Meenakshi Ramanathan',
    heading:'Article-Two',
    img:{src:"https://lh4.ggpht.com/-s3IohZsL0g8/V7xOZ9EIEMI/AAAAAACp7kQ/DRXp9wZ5XcQ/w1000-h800/celebritysays-one-indian-girl-preorders-are-off-the-charts-book-your-copy-to.jpg"},
    content:'Unlike his previous books, Bhagat chose a female protagonist and written the story in female first person. A girl who is well educated, Intelligent and successful in his life. Unlike other girls, she has an opinion on everything.',
    content1: ` <p> The Story starts with the wedding scene of Radhika Mehta. It’s the first destination wedding in Mehta�s family. Everywhere is a pleasant chaos of the wedding preparations and relatives. Goa Marriott is the hotel where both families are planned to stay.But in the last minute, Goa’s CM came in the hotel for an event due to which Hotel staff reduced the no. of rooms booked by the Mehta’s. And then the pleasant chaos converts into a horrible mess.
     Radhika suggested a relocation for the boys side but her father and relatives denied. And the logic behind denial is that “You can't ask boy’s side to adjust because they are The Boy�s side.
     Really? Is that so? But in India, it’s like our traditions to expect adjustment from females. In this book, the author tried to make you understand the female point of view.
     As the author says that women are mysterious and no one can actually understand what they really think. He added that� I have wanted to write a book in female first person for the past several years. Not only that, I wanted that book to be about women and deal with feminism.</p>`,
     content2:`Chetan Bhagat announced his latest book One Indian Girl via tweeting it. He also shared the official teaser which you can watch below. One Indian Girl is the Ninth book of the author. His previous book Half Girlfriend is very well received by his readers and soon releasing as a movie.`,              },
       
 
 'articleThree':
    
    {title:'Article3||Meenakshi Ramanathan',
    heading:'Article-Three',
    img:{src:"https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/Half_Girlfriend.jpg/220px-Half_Girlfriend.jpg"},
    content:'Half Girlfriend is an Indian English coming of age, young adult romance novel by Indian author Chetan Bhagat. The novel, set in rural Bihar, New Delhi, Patna, and New York, is the story of a Bihari boy in quest of winning over the girl he loves.',
    content1: `<p> Once upon a time, there was a Bihari boy called Madhav. He fell in love with a girl from Delhi called Riya. Madhav didn't speak English well. Riya did. Madhav wanted a relationship. Riya didn't. Riya just wanted friendship. Madhav didn't. Riya suggested a compromise. She agreed to be his half girlfriend. From the author of the blockbuster novels Five Point Someone, One Night @ the Call Center, The 3 Mistakes of My Life, 2 States and Revolution 2020 comes a simple and beautiful love story that will touch your heart and inspire you to chase your dreams.</p>`,
    content2:`Chetan Bhagat is an Indian author, columnist, screenwriter, television personality and motivational speaker, known for his English-language dramedy novels about young urban middle-class Indians.`,}    ,  
    
  
'articleFour':
    
    {title:'Article4||Meenakshi Ramanathan',
    heading:'Article-Four',
    img:{src:"https://kbimages1-a.akamaihd.net/43db11f0-3085-4f63-90eb-43d95d0a2647/166/300/False/this-love-that-feels-right.jpg"},                     
    content:`Revolution 2020: Love, Corruption, Ambition is a 2011 novel by Chetan Bhagat Its story is concerned with a love triangle, corruption and a journey of self-discovery. R2020 has addressed the issue of how private coaching institutions exploit aspiring engineering students. How parents put their lifetime's earnings on stake for these classes so that their children can crack engineering exams and change the fortune of the family.`,
    content1: `<p> Once upon a time, in small-town India, there lived two intelligent boys.One wanted to use his intelligence to make money.One wanted to use his intelligence to create a revolution.The problem was, they both loved the same girl.Welcome to Revolution 2020. A story about childhood friends Gopal, Raghav and Aarti who struggle to find success and love in Varanasi. However, it isn’t easy to achieve this in an unfair society that rewards the corrupt. As Gopal gives in to the system, and Raghav fights it, who will win?</p>`,
    content2: `Chetan Bhagat is an Indian author, columnist, screenwriter, television personality and motivational speaker, known for his English-language dramedy novels about young urban middle-class Indians.`}
};

function createTemplate(data){
    
    var title=data.title;
    var heading=data.heading;
    var img=data.img;
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
<div class="title">
<h3>${heading}</h3>
</div>
<div class="col-md-3 col-sm-3">
<div class="quotes">
<p>${content}</p>
</div>
<div class="links">
<h2>Some links are</h4>
<ul>
<li><a href="www.amazon.in">Amazon</a></li>
<li><a href="www.snapdeal.com">Snapdeal</a></li>
<li><a href="www.flipkart.com">Flipkart</a></li>
<li><a href="">Myntra</a></li>
</ul>
</div>
</div>
<div class="col-md-6 col-sm-6" style="background:#2E84A6; padding:15px">

<div class="banner">
<center>
<img src="${img.src}" alt="${img.alt}" />
</center>
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
<label>Tell us what you think </label>
<textarea placeholder="Write your comments here....!Don't forget to B-nice"></textarea>
<input type="submit" value="Submit" class="submit"/>
<form>
</div>
</div>
<div class="col-md-3 col-sm-3">
<div class="bio">
<img src="" />
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


var counter = 0;
app.get('/counter', function (req, res) {
   counter = counter + 1;
   res.send(counter.toString());
}); 

var comments=[];
app.get('/submit-comment',function(req,res){
//to get the comments
var comment=req.query.comment;
comments.push(comment);
//console.log('comments is: ',comment);
 res.send(JSON.stringify(comments));

//to render those comments on the page
});


var comments=[];
app.get('/article-comment',function(req,res){
//to get the comments
var comment=req.query.comment;
comments.push(comment);
//console.log('comments is: ',comment);
 res.send(JSON.stringify(comments));

//to render those comments on the page
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
