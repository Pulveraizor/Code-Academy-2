<?php

namespace Src\Controllers;

use DateTime;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class StoreController
{
	// https://www.slimframework.com/docs/v4/objects/response.html#returning-json
	public function placeOrder(Request $request, Response $response)
	{
		$data = [
			'id'       => uniqid(),
			'item_id'  => uniqid(),
			'quantity' => rand(1,5),
			'shipDate' => date(DateTime::ISO8601),
			'status'   => 'placed',
			'complete' => false
		];

		$payload = json_encode($data);

		$response->getBody()->write($payload);

		return $response->withHeader('Content-Type', 'application/json')->withStatus(201);
	}

	public function getOrder(Request $request, Response $response, array $args)
	{
		
		dd($args);
	}
}