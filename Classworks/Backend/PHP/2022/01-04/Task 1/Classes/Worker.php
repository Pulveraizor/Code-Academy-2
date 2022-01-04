<?php

namespace Classes;

class Worker extends User {
    protected $salary;

    public function setSalary($salary) {
        $this->salary = $salary;
    }
    public function getSalary() {
        return $this->salary;
    }
}