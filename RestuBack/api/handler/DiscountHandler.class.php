<?php
namespace Restu\Handler;

use Slim\Psr7\Request;
use Slim\Psr7\Response;

use Restu\Controller\DiscountController;

class DiscountHandler
{
    private $responder;

	public function __construct($responder)
	{
		$this->responder = $responder;
    }
    
    public function getDiscounts(Request $request, Response $response, array $args) {
        
		$result=DiscountController::getDiscounts();
		$response=self::response($response,TRUE,$result);
		return $response;
	}

	public function getDiscount(Request $request, Response $response, array $args)
	{
		$idpromo = $args['idDiscount'];
		$result = DiscountController::getDiscount( $idpromo);
		$response=self::response($response,TRUE,$result);
		return $response;
	}
	
    public function addDiscount(Request $request, Response $response, array $args)
	{
		
		$data = (array)$request->getParsedBody();
				
		$idproduct=$data['idProduct'];
        $descuento=$data['descuento'];

        $result="Error al agregar el descuento";
		if(!isset($data)){
            $response=self::response($response,FALSE,$result);
            return $response; 
		}
		
		DiscountController::addDiscount($idproduct,$descuento);

		$result="Discountción agregada";
		$response=self::response($response,TRUE,$result);
		return $response;
    }
    
    public function editDiscount(Request $request, Response $response, array $args){

		$data = (array)$request->getParsedBody();

        $idpromo=$data['idDiscount'];
        $descuento=$data['descuento'];
	
		$result=DiscountController::editDiscount($idpromo,$descuento);
		$result='Descuento actualizada correctamente';
		$response=self::response($response,TRUE,$result);
		return $response;
		
	}

	public function deleteDiscount(Request $request, Response $response, array $args){
		$data = (array)$request->getParsedBody();

        $idproduct=$data['idProduct'];
		$result=DiscountController::deleteDiscount($idproduct);
		$result='Descuento eliminada correctamente';
		$response=self::response($response,TRUE,$result);
		return $response;
	}

    public static function response(Response $response ,$ok,$result){
		$data = array(
			'ok' => $ok,
			'result' => $result
		);
		$payload = json_encode($data);
		$response->getBody()->write($payload);
		return $response
			->withHeader('Content-Type', 'application/json')
			->withStatus(201);
	}
}

?>