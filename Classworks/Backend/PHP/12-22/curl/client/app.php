<?php

function getUserData($link) {
    $source = file_get_contents($link);
    $user = json_decode($source, TRUE);
    $package = http_build_query($user);

    return $package;
}

function sendUserData($data, $link) {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $link);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
    curl_setopt($ch, CURLOPT_POST, TRUE);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
    $response = curl_exec($ch);
    curl_close($ch);

    return $response;
}