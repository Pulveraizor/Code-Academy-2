<?php

require_once 'Classes/Student.php';
require_once 'Classes/Driver.php';

$student = new Student('Benas', 30);
$student->setScholarship(450);
$student->setCourse('Biology');

$driver = new Driver('Petras', 22);
$driver->setExp(28);
$driver->setLicence('C');

echo "{$student->getName()}, {$student->getAge()},  {$student->getCourse()}, {$student->getScholarship()}";
echo '<br>';
echo "{$driver->getName()}, {$driver->getAge()}, {$driver->getExp()}, {$driver->getLicence()}";


