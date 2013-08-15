$(document).ready(function() {
    getData();   
})

function getData(){
    //var rssUrl = "http://news.drweb.ua/rss/get/?c=9&lng=ru";
    var rssUrl = "http://feeds.reuters.com/Reuters/worldNews";
    $.ajax({
        url: "http://rss/xml.php?rssUrl=" + rssUrl,
        dataType: "xml",
        success: getRSS, 
        error: function(){
                        var error = $('<p class="error">Error</p>');
                        $("#load").fadeOut().hide();
                        $('.loader').append(error);
                }
    });
}

function formatDate(date) {
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    var d = date.getDate();
    var h = date.getHours();
    var mn = date.getMinutes();
    var s = date.getSeconds();
          
    return '' + y + '-' + (m<=9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d) + ' ' + (h <= 9 ? '0' + h : h) + ':' + (mn <= 9 ? '0' + mn : mn) + ':' + (s <= 9 ? '0' + s : s);
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
                                            var pubDateStr = $(this).find("pubDate").text();
                                            var pubDate = new Date(pubDateStr);
                                            $(date).append(formatDate(pubDate));
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

