CREATE TABLE IF NOT EXISTS `RestuBD`.`Users` (
  `idUsers` INT NOT NULL AUTO_INCREMENT,
  `emailUsers` VARCHAR(45) NULL,
  `passwordUsers` VARCHAR(145) NOT NULL,
  `typeUser` VARCHAR(45) NULL,
  `estateUser` INT NULL,
  PRIMARY KEY (`idUsers`))
ENGINE = InnoDB;
