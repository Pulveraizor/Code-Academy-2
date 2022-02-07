<?php

$db   = getenv('MYSQL_DATABASE');
$user = getenv('MYSQL_USER');
$pwd  = getenv('MYSQL_PASSWORD');


$dbh = new PDO(
    "mysql:host=db;dbname={$db}",
    $user, 
    $pwd
);

$delete = "DELETE FROM books
WHERE isbn = :isbn";
$stmt = $dbh->prepare($delete);
$stmt->bindValue(':isbn', $_POST['isbn']);
$stmt->execute();

