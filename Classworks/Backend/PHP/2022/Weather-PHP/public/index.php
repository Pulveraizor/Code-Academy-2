<?php

require_once '../vendor/autoload.php';


$config = ['settings' => [
    'addContentLengthHeader' => false,
]];
$app = new \Slim\App();

$app->get('/', function ($request, $response, $args) {
    $home = file_get_contents('index.html');
    return $home;
});

$app->get('/places', function ($request, $response, $args) {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://api.meteo.lt/v1/places");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
    $response = curl_exec($ch);
    curl_close($ch);
    return $response;
    
});

$app->get('/places/{place}', function ($request, $response, $args) {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://api.meteo.lt/v1/places/{$args['place']}/forecasts/long-term");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
    $response = curl_exec($ch);
    curl_close($ch);
    return $response;
    
});

$app->run();