//counter code
 
 var button=getElementById('counter');
 var counter=0;
 Button.onClick=function(){
     
     //Make a request to the counter endpoint
     
     //Create a request object
     var request=new XMLHttpRequest();
     
     //Capture the respone and store it in a variable..
     request.onreadystatechange=function(){
         if(request.readyState===XMLHttpRequest.DONE){
             //Take some action
             if(request.status===200){
                 var counter=request.responseText;
                 var span=document.getElementById('count');
                 span.innerHTML=counter.toString();
             }
         }
         //Not yet done
     };
     
     //Render the variable in the correct span..
     
     //Make a request to the counter endpoint
     request.open('GET','http://meenakshiramanathan.imad.hasura-app.io/counter',true);
     request.send(null);
     
     
 };

//Submit name
var nameInput=document.getElementById('name');
var name= nameInput.value;
var submit=document.getElementById('submit_btn');
submit.onClick=function(){
    //Make a reqest to the server and send the name
    //Capture a list of names and render it as a list
    
    var names=['name1','name2','name3','name4'];
    var list= "";
    for(var i=0;i<names.length;i++){
        list=='<li>' + names[i]+'</li>';
    }
    var ul=document.getElementById('namelist');
    ul. innerHTML=list;
    
};




var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-border-red", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-border-red";
}
