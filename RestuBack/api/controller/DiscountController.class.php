<?php 
namespace Restu\Controller;

use Restu\Data\DiscountData;

abstract class DiscountController{

    public static function getDiscounts()
    {
        return DiscountData::getDiscounts();
    }

    public static function getDiscount($idpromo)
	{
		return DiscountData::getDiscount($idpromo);
	}
    
    public static function addDiscount($idproduct,$descuento)
    {
        return DiscountData::addDiscount($idproduct,$descuento);
    }

    public static function editDiscount($idpromo,$descuento)
    {
        return DiscountData::editDiscount($idpromo,$descuento);
    }

    public static function deleteDiscount($idpromo)
    {
        return DiscountData::deleteDiscount($idpromo);  
    }
}

?>