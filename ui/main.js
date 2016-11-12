
 // counter code

 var button=document.getElementById("counter");
 if (button !== undefined) {
 button.onclick = function(){
     alert('hi counter');
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
 // Comments
 
var submit=document.getElementById("comment-btn");
if (submit !== undefined) {
submit.onclick = function(){

var request = new XMLHttpRequest();
    //create a request
 request.onreadystatechange= function(){
 if (request.readyState === XMLHttpRequest.DONE)
  {
      // action taken
    if (request.status===200)
       { 
        var comments =request.responseText;
        var comnts= JSON.parse(comments);
        var comlist='';
        for (var i=0;i<comnts.length;i++)
         {
          //comlist += '<li>' + comnts[i] + '</li>';
           comlist += comnts[i] + '<br>';
           var p =document.getElementById("show-comment");
           p.innerHTML= comlist;
          }
        }
  }
};

   //To make the request
  
   var comment=document.getElementById('comment');
   var txt =comment.value;
    request.open('GET', 'http://meenakshiramanathan.imad.hasura-app.io' +txt, true);
    request.send(null); 
}; 
}

var login=document.getElementById("login-submit");
if (login !== undefined) {
login.onclick = function(){
var request = new XMLHttpRequest();
 alert ("ok");
    //create a request
 request.onreadystatechange= function(){
 if (request.readyState === XMLHttpRequest.DONE)
  {
      // take some action
    if (request.status===200)
       { 
        var uname =equest.responseText;
        alert ("ok");
       
          }
        }
  };


   //To make the request
  
   var username=document.getElementById('username');
   var txt =username.value;
request.open('GET', 'http://meenakshiramanathan.imad.hasura-app.io/login?username='+txt, true);
request.send(null); 
}; 
}
// article comments

var buttn=document.getElementById("article-comment");
if (buttn !== undefined) {
buttn.onclick = function(){
alert("HI");
var request = new XMLHttpRequest();
    //create a request
 request.onreadystatechange= function(){
 if (request.readyState === XMLHttpRequest.DONE)
  {
      //  action taken
    if (request.status===200)
       { 
        
        var comments =request.responseText;
        var comnts= JSON.parse(comments);
        var comlist='';
        for (var i=0;i<comnts.length;i++)
         {
          //comlist += '<li>' + comnts[i] + '</li>';
           comlist += comnts[i] + '<br>';
           var p =document.getElementById("display-comment");
           p.innerHTML= comlist;
          }
        }
  }
};

   //To send the request
  
   var comment=document.getElementById('comment-article');
   var txt =comment.value;
   request.open('GET', 'http://meenakshiramanathan.imad.hasura-app.io/article-comment?comment=' +txt, true);
   
    request.send(null); 
}; 
} 
 
 
