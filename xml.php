<?php
    $rssUrl = $_GET["rssUrl"];
    $xml = file_get_contents($rssUrl);
    print_r($xml);     
?>
