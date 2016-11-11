$(document).ready(function() {
 });
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
    img:{src:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQKLUk9SFEgNbF98cIxebe-vHBBh4j9oWCy6hgR3n8y7coFv_b3"},
    content:`"What Young India Wants is a non-fiction book by Chetan Bhagat. A compilation of his speeches and essays, it focuses on Indian society, politics the youth. The book revolves around Bhagat's thoughts and innovations on how to improve the Indian economy through social reforms.  "`,
    content1:`<p>
    In his latest book, What Young India Wants, Chetan Bhagat asks hard questions, demands answers and presents solutions for a better, more prosperous India.
    Why do our students regularly commit suicide?Why is there so much corruption in India?Cant our political parties ever work together?Does our vote make any difference at all?We love our India, but shouldnt some things be different?All of us have asked these questions at some time or the other. So does Chetan Bhagat, Indias most loved writer, in What Young India Wants, his first book of non-fiction.
    What Young India Wants is based on Chetan Bhagats vast experience as a very successful writer and motivational speaker. In clear, simple prose, and with great insight, he analyses some of the complex issues facing modern India, offers solutions and invites discussion on them. And, at the end, he asks this important question: Unless we are all in agreement on what it is going to take to make our country better, how will things ever change? Non-fiction If you want to understand contemporary India, the problems that face it, and want to be a part of the solution, What Young India Wants is the book for you </p>`,
    content2:`<p>"Chetan Bhagat is an Indian author, columnist, screenwriter, television personality and motivational speaker, known for his English-language dramedy novels about young urban middle-class Indians"</p>`},
    

 'articleTwo' :
    
    {title:'Article2||Meenakshi Ramanathan',
    heading:'Article-Two',
    img:{src:"https://lh4.ggpht.com/-s3IohZsL0g8/V7xOZ9EIEMI/AAAAAACp7kQ/DRXp9wZ5XcQ/w1000-h800/celebritysays-one-indian-girl-preorders-are-off-the-charts-book-your-copy-to.jpg"},
    content:'Unlike his previous books, Bhagat chose a female protagonist and written the story in female first person. A girl who is well educated, Intelligent and successful in his life. Unlike other girls, she has a opinion on everything.',
    content1: ` <p> The Story starts with the wedding scene of Radhika Mehta. It's the first destination wedding in Mehta's family. Everywhere is a pleasant chaos of the wedding preparations and relatives. Goa Marriott is the hotel where both families are planned to stay.But in the last minute, Goa's CM came in the hotel for an event due to which Hotel staff reduced the no. of rooms booked by the Mehta's. And then the pleasant chaos converts into a horrible mess.
     Radhika suggested a relocation for the boys side but her father and relatives denied. And the logic behind denial is thatìYou can't ask boy's side to adjust because they are The Boy's side.
     Really? Is that so? But in India, it's like our traditions to expect adjustment from females. In this book, the author tried to make you understand the female point of view.
     As the author says that women are mysterious and no one can actually understand what they really think. He added thatù I have wanted to write a book in female first person for the past several years. Not only that, I wanted that book to be about women and deal with feminism.</p>`,
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
    img:{src:"https://upload.wikimedia.org/wikipedia/en/4/44/Revolution_2020.jpg"},                     
    content:`Revolution 2020: Love, Corruption, Ambition is a 2011 novel by Chetan Bhagat Its story is concerned with a love triangle, corruption and a journey of self-discovery. R2020 has addressed the issue of how private coaching institutions exploit aspiring engineering students. How parents put their lifetime's earnings on stake for these classes so that their children can crack engineering exams and change the fortune of the family.`,
    content1: `<p> Once upon a time, in small-town India, there lived two intelligent boys.One wanted to use his intelligence to make money.One wanted to use his intelligence to create a revolution.The problem was, they both loved the same girl.Welcome to Revolution 2020. A story about childhood friends Gopal, Raghav and Aarti who struggle to find success and love in Varanasi. However, it is easy to achieve this in an unfair society that rewards the corrupt. As Gopal gives in to the system, and Raghav fights it, who will win?</p>`,
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
        <p>
          <marquee direction="up" SCROLLDELAY=300>
              ${content}
          </marquee>
           <button type="button" class="btn btn-block btn-primary">Like</button>
        </p>
    </div>
        <div class="links">
            <h3>Some links are</h3>
                <ul>
                  <MARQUEE BEHAVIOR=SLIDE SCROLLDELAY=50>
                    <li><a href="http://amazon.in">Amazon</a></li>
                    <li><a href="http://snapdeal.com">Snapdeal</a></li>
                    <li><a href="http://flipkart.com">Flipkart</a></li>
                    <li><a href="http://myntra.com">Myntra</a></li>
                   </MARQUEE>
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
    Add Names 
<input type="text" id ="name" placeholder="name"> 
<input type ="submit" id="submit-btn" value="Add">
 <p id="namelist" style="display:block;">  </p>
        <form>
            <label>Tell us what you think </label>
                <textarea placeholder="Write your comments here....!Don't forget to B-nice" name="comment" id="comment-article"></textarea>
                <input type="submit" value="Submit" class="submit" id="article-comment"/>
                <ul id="diaplay-comment">
        </ul>
            <script type="text/javascript" src="/ui/main.js">
            </script>
        <form>
    </div>
    
</div>
 
      
    <div class="col-md-3 col-sm-3">
   
    <button type="button" class="btn btn-info" float:right>
    <span class="glyphicon glyphicon-search" float:right></span> Search
    </button>
  <a href="#" class="btn btn-success btn-lg" float:right>
      <span class="glyphicon glyphicon-print" float:right></span> Print
    </a>
        <div class="bio">
        
        
            <img src="http://www.chetanbhagat.com/wp-content/uploads/chetan_bhagat_011.jpg" />
        <p>
           <marquee direction="down" SCROLLDELAY=300>
             ${content2}
           </marquee>
        </p>
    </div>
</div>
    </div></div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
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

var names = [];
app.get('/submit-name', function(req, res) { // /submit-name?name=xxxx
  // Get the name from the request
var name = req.query.name;
names.push(name);
// JSON: Javascript Object Notation
res.send(JSON.stringify(names));
}); 


var comments=[];
app.get('/submit-comment',function(req,res){
//to get the comments
var comment=req.query.comment;
comments.push(comment);
//console.log('comments is: ',comment);
 res.send(JSON.stringify(comments));
alert(JSON.stringify(comments));
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
app.get('/login.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'login.html'));
});

app.get('/:articleName?comment', function (req, res) {
  res.sendFile(path.join(__dirname, 'login.html'));
});


app.get('/Home.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'Home.html'));
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


