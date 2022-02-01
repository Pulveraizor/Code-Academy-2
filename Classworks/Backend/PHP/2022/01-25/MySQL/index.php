<?php

$db   = getenv('MYSQL_DATABASE');
$user = getenv('MYSQL_USER');
$pwd  = getenv('MYSQL_PASSWORD');


$dbh = new PDO(
    "mysql:host=db;dbname={$db}",
    $user, 
    $pwd
);


$query1 = "SELECT * 
FROM users
";

$stmt = $dbh->prepare($query1);

$stmt->execute();

$users = $stmt->fetchAll(PDO::FETCH_ASSOC);

// var_dump($users);

$groupedUsers = [];

foreach ($users as $user) {
    $groupedUsers[$user['gender']] = $user;
}

var_dump($groupedUsers);



// $query = "SELECT * FROM users WHERE is_admin > 0";

// $stmt = $dbh->prepare($query);

// $stmt->execute();

// $users = $stmt->fetchAll(PDO::FETCH_ASSOC);

// var_dump($users);

// $request = "SELECT * 
//     FROM users 
//     WHERE TIMESTAMPDIFF(YEAR, birthdate, CURDATE()) >= '18'
//     LIMIT 15";

// $stmt = $dbh->prepare($request);

// $stmt->execute();

// $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

// var_dump($results);