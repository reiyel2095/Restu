# titalab-tita
	Proyecto de chickenApp

## deploy
	##Seleccionar el proyecto

	##Desplegar el proyecto

## dependencies
	composer require "grpc/grpc:^v1.27.0"
	composer require google/cloud-firestore
	#composer require twilio/sdk
	#composer require vlucas/phpdotenv

# To choose project
gcloud config set project restu-318716

# To upload project to Google Cloud
gcloud app deploy app.yaml --project restu-318716 --version alpha-001

# Web Page Link
https://php73-dot-restu-318716.uc.r.appspot.com/web/