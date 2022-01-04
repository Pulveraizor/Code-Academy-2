<?php

require_once 'vendor/autoload.php';

$student = new Classes\Student('Benas', 30);
$student->setScholarship(450);
$student->setCourse('Biology');

$driver = new Classes\Driver('Petras', 22);
$driver->setSalary(2746);
$driver->setExp(28);
$driver->setLicence('C');

var_dump($student);
var_dump($driver);


