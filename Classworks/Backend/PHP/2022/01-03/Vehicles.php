<?php

class Vehicles {

    public function __construct($make, $model, $year, $fuel) {
        $this->setMake($make);
        $this->setModel($model);
        $this->setYear($year);
        $this->setFuel($fuel);
    }

    public function setMake($make) {
        $this->make = $make;
    }
    public function setModel($model) {
        $this->model = $model;
    }
    public function setYear($year) {
        $this->year = $year;
    }
    public function setFuel($fuel) {
        $this->fuel = $fuel;
    }
}