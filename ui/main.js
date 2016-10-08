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
