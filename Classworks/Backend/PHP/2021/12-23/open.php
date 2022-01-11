<?php

session_start();

if(isset($_GET['link'])) {
    $data = file_get_contents('redirect.json');
    $data = json_decode($data, true);

    foreach ($data as $key => $value) {
        
        if ($key === $_GET['link']) {
            header('Location: ' . $value);
            exit;
        } else {
            echo 'Something went wrong';
        }
    }
}