<?php

include __DIR__.'/../api/data/ChefData.class.php';
include __DIR__.'/../api/data/DeliveryboyData.class.php';
include __DIR__.'/../api/data/ClientData.class.php';
include __DIR__.'/../api/data/UserData.class.php';
include __DIR__.'/../api/data/CategoryData.class.php';
include __DIR__.'/../api/data/DiscountData.class.php';
include __DIR__.'/../api/data/ProductData.class.php';

include __DIR__.'/../api/controller/ChefController.class.php';
include __DIR__.'/../api/controller/DeliveryboyController.class.php';
include __DIR__.'/../api/controller/ClientController.class.php';
include __DIR__.'/../api/controller/UserController.class.php';
include __DIR__.'/../api/controller/CategoryController.class.php';
include __DIR__.'/../api/controller/DiscountController.class.php';
include __DIR__.'/../api/controller/ProductController.class.php';

include __DIR__.'/../api/handler/ChefHandler.class.php';
include __DIR__.'/../api/handler/DeliveryboyHandler.class.php';
include __DIR__.'/../api/handler/ClientHandler.class.php';
include __DIR__.'/../api/handler/UserHandler.class.php';
include __DIR__.'/../api/handler/CategoryHandler.class.php';
include __DIR__.'/../api/handler/DiscountHandler.class.php';
include __DIR__.'/../api/handler/ProductHandler.class.php';

use Psr\Http\Message\ResponseInterface as Response; //use Slim\Http\Response;
use Psr\Http\Message\ServerRequestInterface as Request; //use Slim\Http\Request;
use Slim\Routing\RouteCollectorProxy;

use Restu\Handler\UserHandler;
use Restu\Handler\ChefHandler;
use Restu\Handler\DeliveryboyHandler;
use Restu\Handler\ClientHandler;
use Restu\Handler\CategoryHandler;
use Restu\Handler\DiscountHandler;
use Restu\Handler\ProductHandler;

$app->group('/api/chef', function (RouteCollectorProxy $group) {
    $group->post('/add', ChefHandler::class . ':addChef');
    $group->get('/select', ChefHandler::class . ':getChefs');
    $group->get('/get/{idChef}', ChefHandler::class . ':getChef');
    $group->post('/delete', ChefHandler::class . ':deleteChef');
});

$app->group('/api/deliveryboy', function (RouteCollectorProxy $group) {
    $group->post('/add', DeliveryboyHandler::class . ':addDeliveryboy');
    $group->get('/select', DeliveryboyHandler::class . ':getDeliveryboys');
    $group->get('/get/{idDeliveryboy}', DeliveryboyHandler::class . ':getDeliveryboy');
    $group->post('/delete', DeliveryboyHandler::class . ':deleteDeliveryboy');
});

$app->group('/api/client', function (RouteCollectorProxy $group) {
    $group->get('/get/{idClient}', ClientHandler::class . ':getClient');
    $group->post('/add', ClientHandler::class . ':addClient');
    $group->post('/changepassword', ClientHandler::class . ':changePassword');
    $group->post('/edit', ClientHandler::class . ':editClient');
});

$app->group('/api/user', function (RouteCollectorProxy $group) {
    $group->post('/login', UserHandler::class . ':loginUser');
});

$app->group('/api/category', function (RouteCollectorProxy $group) {
    $group->post('/add', CategoryHandler::class . ':addCategory');
    $group->get('/select', CategoryHandler::class . ':getCategories');
    $group->get('/get/{idCategory}', CategoryHandler::class . ':getCategory');
    $group->post('/delete', CategoryHandler::class . ':deleteCategory');
});

$app->group('/api/discount', function (RouteCollectorProxy $group) {
    $group->post('/add', DiscountHandler::class . ':addDiscount');
    $group->get('/select', DiscountHandler::class . ':getDiscounts');
    $group->get('/get/{idDiscount}', DiscountHandler::class . ':getDiscount');
    $group->post('/delete', DiscountHandler::class . ':deleteDiscount');
});

$app->group('/api/product', function (RouteCollectorProxy $group) {
    $group->post('/add', ProductHandler::class . ':addProduct');
    $group->post('/uploadimg', ProductHandler::class . ':uploadImage');
    $group->get('/select', ProductHandler::class . ':selectProduct');
    $group->get('/select-category/{idCategory}', ProductHandler::class . ':selectProductByCategory');
    $group->get('/get/{idProduct}', ProductHandler::class . ':getProduct');
    $group->post('/delete', ProductHandler::class . ':deleteProduct');
});


?>