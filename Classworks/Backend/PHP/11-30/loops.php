<?php

$arr = [
    17,
    45,
    65,
    21,
    34,
    69
];

for ($i = 10; $i > 0; $i--) {
    if ($i % 2 != 0) {
        echo $i, "\n";
    }
    if ($i < 7) {
        echo 'stop';
        break;
    } 
}