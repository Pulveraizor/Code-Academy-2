<?php

require_once 'Test.php';
require_once 'Vehicles.php';

class Cars Extends Vehicles implements Test {


    public function __construct($make, $model, $year, $fuel) {
        parent::__construct($make, $model, $year, $fuel);
    }

    public function testId() {
        return 'Hi';
    }
    public function testModel() {
        return 'bye';
    }
}