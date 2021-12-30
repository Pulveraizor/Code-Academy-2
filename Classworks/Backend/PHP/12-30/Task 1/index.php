<?php

require_once 'Classes/Student.php';
require_once 'Classes/Driver.php';

$student = new Student('Benas', 30);
$student->setScholarship(450);
$student->setCourse('Biology');

$driver = new Driver('Petras', 22);
$driver->setSalary(2746);
$driver->setExp(28);
$driver->setLicence('C');

var_dump($student);
var_dump($driver);


