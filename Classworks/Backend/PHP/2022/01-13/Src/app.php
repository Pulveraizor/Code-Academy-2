<?php

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;
use Slim\Routing\RouteCollectorProxy;

$app = AppFactory::create();

$app->get('/', function (Request $request, Response $response, $args) {
    $response->getBody()->write(file_get_contents(ROOT_PATH . '/../Views/index.html'));
    return $response;
});

$app->group('/api/v1', function (RouteCollectorProxy $group) {
    $group->post('/store/order', '\Src\Controllers\StoreController:placeOrder');
    $group->get('/store/order/{orderId}', '\Src\Controllers\StoreController:getOrder');
});

$app->run();