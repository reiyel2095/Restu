<?php
error_reporting(-1);
ini_set('display_errors', 'On');
set_error_handler("var_dump");

require __DIR__. '/vendor/autoload.php';

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Exception\HttpNotFoundException;
use Slim\Factory\AppFactory;

include __DIR__."/library/Enumerators.module.php";
include __DIR__."/library/SecurityExtensions.module.php";
include __DIR__."/library/CommonExtensions.module.php";
include __DIR__."/library/MySqlExtensions.module.php";
include __DIR__."/library/StorageExtensions.module.php";

$app = AppFactory::create();

require __DIR__.'/config/middleware.php';
require __DIR__.'/config/routes.php';
require __DIR__.'/config/routes-api.php';

$app->run();

?>