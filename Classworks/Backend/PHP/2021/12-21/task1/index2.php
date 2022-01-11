<?php

$userSource = 'https://randomuser.me/api';

$user = file_get_contents($userSource);
$user = json_decode($user, TRUE);
$user = $user['results'];

// var_dump($user);

foreach ($user as $data) {
    foreach($data as $key=>$value) {
        echo $key . ',';
    }
};

