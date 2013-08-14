$(document).ready(function() {
    $.ajax({
        url: "http://rss/xml.php",
        dataType: "xml",
        success: getRSS, 
        error: function(){
                        var error = $('<p class="error">Error</p>');
                        $("#load").fadeOut().hide();
                        $('.loader').append(error);
              
                                                  
                }
        
    });

     
})

function getRSS(xml) {
    
    $("#load").fadeOut().hide();
    
            $(xml).find("item").each(function(i){
                                       var url,atr;
                                       
                                       if(i == 3){
                                            return false;
                                       }
                                       else {
                                            url = $(this).find("link").text();     
                                            $("#main").append('<div class="news"><a id="num"  class="link">' + 
                                            $(this).find("title").text() + '</a><div class="description"> ' +
                                            $(this).find("description").text() + '</div><div class="date">Опубликовано' +
                                            $(this).find("pubDate").text() + '</div></div>');
                                            $(".link").attr("target", "_blank");
                                            $("#num").attr("id", "num" + i );
                                            $("#num"+i).attr("href",url); 
                                            $(".news").fadeIn(300);
                                           }
             });                 
}

 
 