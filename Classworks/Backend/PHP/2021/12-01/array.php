<?php

$arr = [
    '!', 'Hello', 'world'
];

function moveElement(&$array, $a, $b) {
    $out = array_splice($array, $a, 1);
    array_splice($array, $b, 0, $out);
}

moveElement($arr, 0, 2);
$result = implode(" ", $arr);

echo $result;