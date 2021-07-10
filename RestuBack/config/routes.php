<?php
use Slim\Http\Request;
use Slim\Http\Response;
use Slim\Routing\RouteCollectorProxy;

$app->options('/{routes:.+}', function ($request, $response, $args) {
	return $response;
});
$app->add(function ($request, $handler) {
	$response = $handler->handle($request);
	return $response
			->withHeader('Access-Control-Allow-Origin', '*')
			->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization, Token')
			->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); //->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
});

?>