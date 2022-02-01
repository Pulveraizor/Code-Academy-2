<?php

$db   = getenv('MYSQL_DATABASE');
$user = getenv('MYSQL_USER');
$pwd  = getenv('MYSQL_PASSWORD');


$dbh = new PDO(
    "mysql:host=db;dbname={$db}",
    $user, 
    $pwd
);

if (isset($_POST['id'])){
    $query = "DELETE FROM books
WHERE id = :id";
$stmt = $dbh->prepare($query);
$stmt->bindValue(':id', $_POST['id']);
$stmt->execute();

echo 'Book deleted successfullly';
} else {
    echo 'No book ID was selected';
}
