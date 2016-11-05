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
Alert("HI");
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
 
 
 
 
 
 
 
 
 ;(function($){
    $.fn.rating = function(callback){
        
        callback = callback || function(){};

        // each for all item
        this.each(function(i, v){
            
            $(v).data('rating', {callback:callback})
                .bind('init.rating', $.fn.rating.init)
                .bind('set.rating', $.fn.rating.set)
                .bind('hover.rating', $.fn.rating.hover)
                .trigger('init.rating');
        });
    };
    
    $.extend($.fn.rating, {
        init: function(e){
            var el = $(this),
                list = '',
                isChecked = null,
                childs = el.children(),
                i = 0,
                l = childs.length;
            
            for (; i < l; i++) {
                list = list + '<a class="star" title="' + $(childs[i]).val() + '" />';
                if ($(childs[i]).is(':checked')) {
                    isChecked = $(childs[i]).val();
                };
            };
            
            childs.hide();
            
            el
                .append('<div class="stars">' + list + '</div>')
                .trigger('set.rating', isChecked);
            
            $('a', el).bind('click', $.fn.rating.click);            
            el.trigger('hover.rating');
        },
        set: function(e, val) {
            var el = $(this),
                item = $('a', el),
                input = undefined;
            
            if (val) {
                item.removeClass('fullStar');
                
                input = item.filter(function(i){
                    if ($(this).attr('title') == val)
                        return $(this);
                    else
                        return false;
                });
                
                input
                    .addClass('fullStar')
                    .prevAll()
                    .addClass('fullStar');
            }
            
            return;
        },
        hover: function(e){
            var el = $(this),
                stars = $('a', el);
            
            stars.bind('mouseenter', function(e){
                // add tmp class when mouse enter
                $(this)
                    .addClass('tmp_fs')
                    .prevAll()
                    .addClass('tmp_fs');
                
                $(this).nextAll()
                    .addClass('tmp_es');
            });
            
            stars.bind('mouseleave', function(e){
                // remove all tmp class when mouse leave
                $(this)
                    .removeClass('tmp_fs')
                    .prevAll()
                    .removeClass('tmp_fs');
                
                $(this).nextAll()
                    .removeClass('tmp_es');
            });
        },
        click: function(e){
            e.preventDefault();
            var el = $(e.target),
                container = el.parent().parent(),
                inputs = container.children('input'),
                rate = el.attr('title');
                
            matchInput = inputs.filter(function(i){
                if ($(this).val() == rate)
                    return true;
                else
                    return false;
            });
            
            matchInput
                .prop('checked', true)
				.siblings('input').prop('checked', false);
            
            container
                .trigger('set.rating', matchInput.val())
                .data('rating').callback(rate, e);
        }
    });
    
})(jQuery);
 
