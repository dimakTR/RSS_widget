<?php
    $url = "http://news.drweb.ua/rss/get/?c=9&lng=ru";
    $xml = file_get_contents($url);
    print_r($xml);    
?>
