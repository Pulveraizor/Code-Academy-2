<?php

require 'classes/Vehicle.php';
require 'classes/Boat.php';
require 'classes/Bus.php';
require 'classes/Car.php';
require 'classes/Motorcycle.php';
require 'classes/Plane.php';
require 'classes/Cars/Bmw.php';

$vehicles = [
    new Car('Ford', 'Galaxy', 2007),
    new Car('Toyota', 'Auris', 2017),
    new Bmw('X3', 2012),
    new Motorcycle('Aprilia', 'RS', 2020, 2),
	new Boat('Quicksilver', 'Activ 675', 2020),
	new Motorcycle('Polaris', 'Slingshot', 2020, 3),
	new Bus('Ikarus', 'Yellow', 1991, 4),
	new Plane('Boeing', '737', 2021, 6)
];

$customCar = new Car('Rezvani', 'Hercules', 2019);

$customCar->setWheelsNumber(6);

array_unshift($vehicles, $customCar);

foreach ($vehicles as $vehicle) {
    var_dump($vehicle);
    echo $vehicle->getFuelType() . '<br>';

    if ($vehicle instanceof Vehicle) {
        echo 'getIntroduction ==> ' . $vehicle->getIntroduction();
        var_dump('getAge ==> ' . $vehicle->getAge());
		var_dump('getAgeText ==> ' . $vehicle->getAgeText());
		var_dump('getWheelsNumber ==> ' . $vehicle->getWheelsNumber());
		var_dump('getWheelsNumberText ==> ' . $vehicle->getWheelsNumberText());

        if ($vehicle instanceof Plane) {
			var_dump('This vehicle can fly');
		}

		if ($vehicle instanceof Boat) {
			var_dump('This vehicle can swim');

			var_dump($vehicle->getType());
		}
    }
}