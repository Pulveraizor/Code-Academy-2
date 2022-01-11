<?php

class Motorcycle extends Vehicle {
    function __construct($make, $model, $year, $wheels) {
        parent::__construct($make, $model, $year);
        $this->wheels = $wheels;
    }
    public function setFuelType($fuel) {
        $this->fuel = $fuel;
    }
    public function getFuelType() {
		return $this->fuel ?? 'No fuel set';
	}
}