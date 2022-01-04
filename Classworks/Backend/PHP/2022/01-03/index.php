<?php

require_once 'Cars.php';

$car = new Cars('BMW', 530, 2008, 'Diesel');

var_dump($car);

$car->setMake('Audi');

var_dump($car);
echo $car->testId();