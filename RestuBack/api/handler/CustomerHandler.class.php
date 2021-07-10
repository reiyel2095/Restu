<?php
namespace Restu\Handler;

use Slim\Psr7\Request;
use Slim\Psr7\Response;

use Restu\Controller\CustomerController;

class CustomerHandler
{
    private $responder;

	public function __construct($responder)
	{
		$this->responder = $responder;
    }
	
	public function getCustomers(Request $request, Response $response, array $args) {
		$data = array(
			'ok' => 'true',
			'result' => 'servicio conectado'
		);
		$payload = json_encode($data);
		$response->getBody()->write($payload);
		return $response
			->withHeader('Content-Type', 'application/json')
			->withStatus(201);
	}

	public function getCustomer(Request $request, Response $response, array $args)
	{
		$idcustomer = $args['idCustomer'];
		$result = CustomerController::getCustomer( $idclient);
		$response=self::response($response,TRUE,$result);
		return $response;
	}

    public function addCustomer(Request $request, Response $response, array $args)
	{

		$data = (array)$request->getParsedBody();
		$idcustomer=$data["idCustomer"];
		$firstname=$data['firstname'];
        $lastname=$data['lastname'];
        $phone=$data['phone'];
        $email=$data['email'];
        $adress=$data['adress'];
		$password=$data['password'];

        if(!isset($data)){
            $response=self::response($response,FALSE,$result);
            return $response; 
		}
		if($idcustomer=='')
		{
			$result=CustomerController::addCustomer($firstname,$lastname,$phone,$email,$adress,$password);
		}
		else{
			$result=CustomerController::editCustomer($idcustomer,$firstname,$lastname,$phone,$adress);
		}
		$response=self::response($response,TRUE,$result);
		return $response;
	}

	public function changePassword(Request $request, Response $response, array $args)
	{

		$data = (array)$request->getParsedBody();
		$email=$data['email'];
		$password=$data['password'];
		$newpassword=$data['newPassword'];
		
        $result="Error al iniciar sesión";
        if(!isset($data)){
            $response=self::response($response,FALSE,$result);
            return $response; 
        }
        $result=CustomerController::changePassword($email,$password,$newpassword);

		 if($result!=NULL)
		 {
			$response=self::response($response,TRUE,$result);
		 }
		 else {
			$response=self::response($response,FALSE,$result);
		 }
		return $response;
    }

	public function deleteCustomer(Request $request, Response $response, array $args){
        $id=$args["id"];
		$result=CustomerController::deleteCustomer($id);
		$result='Cliente eliminado correctamente';
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