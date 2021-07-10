<?php
namespace Restu\Handler;

use Slim\Psr7\Request;
use Slim\Psr7\Response;

use Restu\Controller\DeliveryboyController;

class DeliveryboyHandler
{
    private $responder;

	public function __construct($responder)
	{
		$this->responder = $responder;
    }
	
	public function getDeliveryboys(Request $request, Response $response, array $args) {
		$result=DeliveryboyController::getDeliveryboys();
		$response=self::response($response,TRUE,$result);
		return $response;
	}

	public function getDeliveryboy(Request $request, Response $response, array $args)
	{
		$iddeliveryboy = $args['idDeliveryboy'];
		$result = DeliveryboyController::getDeliveryboy( $iddeliveryboy );
		$response=self::response($response,TRUE,$result);
		return $response;
	}

	public function changeAvailability(Request $request, Response $response, array $args){

		$data = (array)$request->getParsedBody();

		$iddeliveryboy=$data['idDeliveryboy'];
	
		$result=DeliveryboyController::changeAvailability($iddeliveryboy);
		$result='Actualizacion de disponibilidad cambiada correctamente';
		$response=self::response($response,TRUE,$result);
		return $response;
		
	}

    public function addDeliveryboy(Request $request, Response $response, array $args)
	{

		$data = (array)$request->getParsedBody();

		$iddeliveryboy=$data['idDeliveryboy'];
		$firstname=$data['firstname'];
		$lastname=$data['lastname'];
		$phone=$data['phone'];
		$email=$data['email'];
		$adress=$data['adress'];
		$password=$data['password'];
		$dni=$data['dni'];
		$workshift=$data['workshift'];
		$age=$data['age'];

        $result="Error al agregar el deliveryboy";
        if(!isset($data)){
            $response=self::response($response,FALSE,$result);
            return $response; 
		}
		
		if($iddeliveryboy>0)
		{
			DeliveryboyController::editDeliveryboy($iddeliveryboy,$firstname,$lastname,$phone,$email,$adress,$dni,$workshift,$age);
		}else{
			DeliveryboyController::addDeliveryboy($firstname,$lastname,$phone,$email,$adress,$password,$dni,$workshift,$age);
		}
        
       
		 $result="Delivery Boy agregado";
		$response=self::response($response,TRUE,$result);
		return $response;
	}

	public function editDeliveryboy(Request $request, Response $response, array $args){

		$data = (array)$request->getParsedBody();

		$firstname=$data['firstname'];
		$lastname=$data['lastname'];
		$phone=$data['phone'];
		$email=$data['email'];
		$adress=$data['adress'];
		$password=$data['password'];
		$dni=$data['dni'];
		$workshift=$data['workshift'];
		$age=$data['age'];
	
		$result=DeliveryboyController::editDeliveryboy($firstname,$lastname,$phone,$email,$adress,$password,$dni,$workshift,$age);
		$result='Deliveryboy actualizado correctamente';
		$response=self::response($response,TRUE,$result);
		return $response;
		
	}

	public function deleteDeliveryboy(Request $request, Response $response, array $args){
			$data = (array)$request->getParsedBody();
	
			$iddeliveryboy=$data['idDeliveryboy'];
			$result=DeliveryboyController::deleteDeliveryboy($iddeliveryboy);
			$result='Delivery Boy eliminado correctamente';
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