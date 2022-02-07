<?php

$db   = getenv('MYSQL_DATABASE');
$user = getenv('MYSQL_USER');
$pwd  = getenv('MYSQL_PASSWORD');


$dbh = new PDO(
    "mysql:host=db;dbname={$db}",
    $user, 
    $pwd
);

$createNew = "INSERT INTO books (`isbn`, `genre`, `author`, `title`, `year`)
VALUES (:isbn, :genre, :author, :title, :year)"; 

$stmt = $dbh->prepare($createNew);

$stmt->bindValue(':isbn', $_POST['isbn']);
$stmt->bindValue(':genre', $_POST['genre']);
$stmt->bindValue(':author', $_POST['author']);
$stmt->bindValue(':title', $_POST['title']);
$stmt->bindValue(':year', $_POST['year']);

$stmt->execute();