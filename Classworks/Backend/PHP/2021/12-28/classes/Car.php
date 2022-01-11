<?php

class Car extends Vehicle {
    function __construct($make, $model, $year) {
        parent::__construct($make, $model, $year);
    }
    public function setFuelType($fuel) {
        $this->fuel = $fuel;
    }
    public function getFuelType() {
		return $this->fuel ?? 'No fuel set';
	}
}