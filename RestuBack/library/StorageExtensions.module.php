<?php
namespace Restu\Library;

use Google\Cloud\Storage\StorageClient;

    class Storage{
        private $projectId;
        private $storage;

        public function __construct()
        {
            $this->projectId='restu-318716';
            $this->storage= new StorageClient([
                'projectId' => $this->projectId,
            ]);
        }

        public function createBucket($bucketName)
        {
            $bucket=$this->storage->createBucket($bucketName);
        }

        public function listBuckets()
        {
            $buckets = $this->storage->buckets();
        }

        public function uploadObject($bucketName, $objectName, $source)
        {
            $storage = new StorageClient();
            $file=fopen($source,'r');
            $bucket=$storage->bucket($bucketName);
            $object = $bucket->upload($file, ['name'=>$objectName]);
        }
        
    }


?>