// counter code

var button=document.getElementById("counter");
if (button !== undefined) {
button.onclick = function(){
var request = new XMLHttpRequest();
    //create a request
 request.onreadystatechange= function(){
 if (request.readyState === XMLHttpRequest.DONE)
  {
      // take some action
    if (request.status===200)
       { 
           //alert("ok");
        var counter=request.responseText;
        var span=document.getElementById("count");
        span.innerHTML=counter.toString();
       }
  }
};
   // make the request
    request.open('GET', 'http://http://meenakshiramanathan.imad.hasura-app.io', true);
     request.send(null);
}; 
}

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