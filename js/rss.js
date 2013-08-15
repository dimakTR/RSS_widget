$(document).ready(function() {
    get_data();
    
   
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







function getRSS(xml) {
    $("#load").fadeOut().hide();
     var date; 
            $(xml).find("item").each(function(i){
                                       var url;
                                       var item,description,link,date;
                                       if(i == 3){
                                            return false;
                                       }
                                       else {
                                            item = $('<div/>',{ class :'news'});
                                            description = $('<div/>',{ class :'description', id : 'number'+i});
                                            link = $('<div/>',{ class :'link'});
                                            date = $('<div/>',{ class :'date'});
                                            url = $(this).find("link").text();  
                                            $(link).append('<a id="num" target="_blank" >' + $(this).find("title").text() + '</a>');
                                            $(description).append($(this).find("description").text());
                                            $(date).append($(this).find("pubDate").text());                              
                                            $(item).append(link,description,date);
                                            $('#main').append(item);
                                            $("#num").attr("id", "num" + i );
                                            $("#num"+i).attr("href",url);
                                            $(".news").fadeIn(300);
                                           }
             });   

 
function format(){
         var date,i;
            
         for ( i = 0 ; i < 3; i++) {
         date = $("#number"+i).text().slice(0,200);
         $("#number"+i).html('<p>'+date+'[...]'+'<p>');
        }


         
         
   console.log(date);

        

}
format();
}

 
 