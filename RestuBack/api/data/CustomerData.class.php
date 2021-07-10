<?php 
namespace Restu\Data;
use Restu\Library\DataAccessLayer;
use Restu\Library\MySqlParameter;
abstract class CustomerData{

    public static function getCustomers(){
        $rtn = null;

        $procedure_name = "usp_clients_s_clients";
        $params = NULL;

        $db = new DataAccessLayer();
        $db->connect();
        $result = $db->ExecuteSelect($procedure_name, $params);
        $db->disconnect();
        $output = 0;
        if (isset($result)) 
        {
			$output = $result;
		}
		$rtn = $output;

		return $rtn;

    }

    public static function getCustomer($idcustomer)
	{
		$rtn = NULL;

		$procedureName = "usp_client_f_client";
		$params =  array(
			new MySqlParameter("pidclient", $idcustomer, 1)
		);

		$db = new DataAccessLayer();
		$db->connect();
		$result = $db->ExecuteSelect($procedureName, $params);
		$db->disconnect();
		
        if (isset($result))
        {
			$rtn = $result[0];
		}

		return $rtn;
    }
    
    public static function addCustomer($firstname,$lastname,$phone,$email,$adress,$password) {
        $rtn = null;

        $procedureName = "usp_client_i_client"; 
        $params = array(
                new MySqlParameter("pfirstname", $firstname, 1),
                new MySqlParameter("plastname", $lastname, 1),
                new MySqlParameter("pphone", $phone, 1),
                new MySqlParameter("pemail", $email, 1),
                new MySqlParameter("padress", $adress, 1),
                new MySqlParameter("ppassword", $password, 1),
                new MySqlParameter("oresult", 0, 2)
           );
        $db = new DataAccessLayer();
        $db->connect();
        $result = $db->ExecuteNonQueryWithOutput($procedureName, $params);
       $db->disconnect();
        if (isset($result)) {
           $rtn = $result["oresult"];
        }

        return $rtn;
    }

    public static function editCustomer($idcustomer,$firstname,$lastname,$phone,$adress) {
        $rtn = null;

        $procedureName = "usp_client_u_client"; 
        $params = array(
            new MySqlParameter("pidclient", $idcustomer, 1),
            new MySqlParameter("pfirstname", $firstname, 1),
            new MySqlParameter("plastname", $lastname, 1),
            new MySqlParameter("pphone", $phone, 1),
            new MySqlParameter("padress", $adress, 1),
             new MySqlParameter("oresult", 0, 2)
            );
        $db = new DataAccessLayer();
        $db->connect();
        $result = $db->ExecuteNonQueryWithOutput($procedureName, $params);
        $db->disconnect();
        if (isset($result)) {
            $rtn = $result["oresult"];
        }

        return $rtn;
    }

    public static function changePassword($email, $newpassword) {
        $rtn = null;

        $procedureName = "usp_client_u_password"; 
        $params = array(
            new MySqlParameter("pemail", $email, 1),
            new MySqlParameter("pnewpassword", $newpassword, 1),
             new MySqlParameter("oresult", 0, 2)
            );
        $db = new DataAccessLayer();
        $db->connect();
        $result = $db->ExecuteNonQueryWithOutput($procedureName, $params);
        $db->disconnect();
        if (isset($result)) {
            $rtn = $result["oresult"];
        }

        return $rtn;
    }
}
?>