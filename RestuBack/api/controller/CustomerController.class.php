<?php 
namespace Restu\Controller;

use \SecurityExtensions;
use Restu\Data\CustomerData;
use Restu\Data\UserData;

abstract class CustomerController{

    public static function getCustomer($idcustomer)
	{
		return CustomerData::getCustomer($idcustomer);
    }
    
    public static function addCustomer($firstname,$lastname,$phone,$email,$adress,$password){
        $password_encrypted = SecurityExtensions::encrypt($password);
        return CustomerData::addCustomer($firstname,$lastname,$phone,$email,$adress,$password_encrypted);
    }

    public static function editCustomer($idcustomer,$firstname,$lastname,$phone,$adress){
        return CustomerData::editCustomer($idcustomer,$firstname,$lastname,$phone,$adress);
    }

    public static function changePassword($email,$password,$newpassword){

        $rtn = NULL;
        
        $password_encrypt = UserData::getUserPassword($email);
        $verify = password_verify($password, $password_encrypt);
        if ($verify===TRUE)
		{
            $newpassword_encrypted = SecurityExtensions::encrypt($newpassword);
            $rtn = CustomerData::changePassword($email, $newpassword_encrypted);
		}
        
        return $rtn;
    }

	
}
?>