<?php

$mysqli = new mysqli(
    'db', 
    getenv('MYSQL_USER'),
    getenv('MYSQL_PASSWORD'),
    getenv('MYSQL_DATABASE'), 
    3306, 
    null);

if ($mysqli->connect_errno) {
    printf("Connect failed: %s\n", $mysqli->connect_error);
    exit();
}

/* check if server is alive */
if ($mysqli->ping()) {
    printf ("Our connection is ok!\n");
} else {
    printf ("Error: %s\n", $mysqli->error);
}

$result = $mysqli->query('SELECT * FROM users');
$timestamp = date('Y-m-d H:i:s');

$stmt = $mysqli->prepare("INSERT INTO `users` (
    `id`, 
    `is_active`, 
    `first_name`, 
    `last_name`, 
    `email`, 
    `email_verified_at`, 
    `password`, 
    `created_at`
    ) 
    VALUES (null, ?, ?, ?, ?, ?, ?, ?)");

$active = true;
$name = 'Benas';
$lname = 'Juskus';
$email = 'benju@mail.com';
$pass = 'password';

$stmt->bind_param('issssss', $active, $name, $lname, $email, $timestamp, $pass, $timestamp);
$stmt->execute();
// var_dump($result->fetch_all());
