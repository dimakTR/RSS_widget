$(document).ready(function() {
    get_data();
    format();
    
})

function get_data(){
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
}

function format(){
         var date;  
         date = $('#main').html();
         console.log(date);
        

}





function getRSS(xml) {
    $("#load").fadeOut().hide();
            $(xml).find("item").each(function(i){
                                       var url,atr;
                                       
                                       if(i == 3){
                                            return false;
                                       }
                                       else {
                                            url = $(this).find("link").text();     
                                            $("#main").append('<div class="news"><div class="link"><a id="num" >' + 
                                            $(this).find("title").text() + '</a></div><div class="description"> ' +
                                            $(this).find("description").text() + '</div><div class="date">Опубликовано' +
                                            $(this).find("pubDate").text() + '</div></div>');
                                            $("#num").attr("id", "num" + i );
                                            $("#num"+i).attr("href",url);
                                            $("#num"+i).attr("target", "_blank");                                            
                                            $(".news").fadeIn(300);
                                           }
             });                 
}

 
 