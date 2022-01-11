<?php

require_once 'Classes/Programmer.php';
require_once 'Classes/Student.php';
require_once 'Classes/Teacher.php';

$programmer = new Programmer('Benas');
$student = new Student('Petriukas');
$teacher = new Teacher('Svetlana');

echo $programmer->greetings(), '<br>';
echo $student->greetings(), '<br>';
echo $teacher->greetings();