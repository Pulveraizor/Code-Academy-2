<?php

// require 'classes/Vehicle.php';

class Boat extends Vehicle {
    public function getWheelsNumberText() {
		return 'Are you serious?';
	}
    public function getType() {
		return 'Cruiser';
	}
    public function setFuelType($fuel) {
        $this->fuel = $fuel;
    }
    public function getFuelType() {
		return $this->fuel ?? 'No fuel set';
	}
}