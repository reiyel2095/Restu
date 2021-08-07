<?php
namespace Restu\Handler;

use Slim\Psr7\Request;
use Slim\Psr7\Response;

use Restu\Controller\ProductController;
use Restu\Library\Storage;

class ProductHandler
{
    private $responder;

	public function __construct($responder)
	{
		$this->responder = $responder;
    }
    
    public function selectProduct(Request $request, Response $response, array $args) {
		$result=ProductController::selectProduct();
		$response=self::response($response,TRUE,$result);
		return $response;
	}

	public function selectProductByCategory(Request $request, Response $response, array $args) {
		$idcategory = $args['idCategory'];
		$result=ProductController::selectProductByCategory($idcategory);
		$response=self::response($response,TRUE,$result);
		return $response;
	}

	public function getProduct(Request $request, Response $response, array $args)
	{
		$idproduct = $args['idProduct'];
		$result = ProductController::getProduct( $idproduct);
		$response=self::response($response,TRUE,$result);
		return $response;
	}
    
    public function addProduct(Request $request, Response $response, array $args)
	{
		$data = (array)$request->getParsedBody();
		
		$idproduct=$data["idProduct"];
        $name=$data['name'];
        $description=$data['description'];
		$price=$data['price'];
		$idcategory=$data['categoryid'];

		$result="Error al agregar el producto";
        if(!isset($data)){
            $response=self::response($response,FALSE,$result);
            return $response; 
		}
		if($idproduct=='')
		{
			$result = ProductController::addProduct($name,$description,$price,$idcategory);
		}else{
			$result = ProductController::editProduct($idproduct,$name,$description,$price,$idcategory);
		}
		       
		$response=self::response($response,TRUE,$result);
		return $response;
	}
	
	public function uploadImage(Request $request, Response $response, array $args)
	{
		$rtn = NULL;

		$data = (array)$request->getParsedBody();
		$idproduct = $data['idProduct']; 
		$files = $request->getUploadedFiles();
		$result="La imagen no se pudo agregar";

		if (!isset($files) || !is_array($files)) {
			
			$rtn = array(
				'ok' => FALSE,
				'err' => array(
					'code' => 100,
					'message' => "no image"
				)
			);

			$response->getBody()->write(json_encode($rtn));
			return $response
				->withHeader('Content-Type', 'application/json')
				->withStatus(200);
		}
		$file = $files['image']; 
		$filename = $file->getClientFilename(); 
		$fileextension = substr($filename, strrpos($filename, '.') + 1);
		$tmpfile = $idproduct . '.' . $fileextension; 
		$storage= new Storage();
		$storage->uploadObject('restu','products/'.$tmpfile,$_FILES['image']['tmp_name']);
		
		$result = ProductController::saveImageProduct($idproduct,$filename,$fileextension,$tmpfile);

		$response=self::response($response,TRUE,$result);
		return $response;
	}
    
    public function editImage(Request $request, Response $response, array $args){

		$rtn = NULL;

		$data = (array)$request->getParsedBody();
		$idproduct = $data['idProduct']; 
		$files = $request->getUploadedFiles();
		$result="La imagen no se pudo actualizar";
		if (!isset($files) || !is_array($files)) {
			$response=self::response($response,FALSE,$result);
		}
		$file = $files['image']; 
		$filename = $file->getClientFilename(); 
		$fileextension = substr($filename, strrpos($filename, '.') + 1);
		$tmpfile = $idproduct . '.' . $fileextension; 
		$storage= new Storage();
		$storage->uploadObject('mainkra','products/'.$tmpfile,$_FILES['image']['tmp_name']);
		
		$result = ProductController::editImageProduct($idproduct,$filename);

		$response=self::response($response,TRUE,$result);
		return $response;
		
	}

	public function getImage(Request $request, Response $response, array $args)
	{
		$idproduct = $args['idProduct'];
		$result = ProductController::getImage( $idproduct );

		$rtn = array(
			'ok' => true,
			'result' => $result
		);


		$response->getBody()->write(json_encode($rtn));
		return $response
			->withHeader('Content-Type', 'application/json')
			->withStatus(200);
	}

	public function deleteProduct(Request $request, Response $response, array $args){
		$data = (array)$request->getParsedBody();
		
		$idproduct=$data["idProduct"];
		$result=ProductController::deleteProduct($idproduct);
		$result='Producto eliminado correctamente';
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