<?php

$name = 'Benas';
$age = '30';

echo "My name is $name, I am $age years old <br>";
echo 'My name is ', $name, ', ', 'I am ', $age, ' ', 'years old <br>';
echo sprintf('My name is %s, I am %d years old <br>', $name, $age);


var_dump ($name);

echo 'My name is', ' ', $name;

$cookies = 11;
$biscuits = 23;

$total = $cookies + $biscuits;
echo '<br>';

echo 'Bakery total ', $total;
echo '<br>';
echo 'My name is $name';
echo '<br>';
echo "My name is $name";

$text = 'news';

echo '<br>';
echo "Where is my {$text}paper";
echo '<br>';

echo sprintf('Where is my %spaper', $text);
echo '<br>';


$apples = 5;
$fruits = 'apples';
echo 'Apples amount: ', $fruits;
echo '<br>';
echo 'Apples amount: ', $$fruits;

