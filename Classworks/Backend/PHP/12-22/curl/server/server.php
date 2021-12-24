<?php

$fileName = uniqid();

if (isset($_POST)) {
    $data = json_encode($_POST, JSON_PRETTY_PRINT);
    file_put_contents("users/{$fileName}.json", $data);
    echo 'User data saved successfully';
} else {
    echo 'No data received';
};