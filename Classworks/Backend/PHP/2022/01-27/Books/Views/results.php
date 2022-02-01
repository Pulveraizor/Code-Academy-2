<?php

$db   = getenv('MYSQL_DATABASE');
$user = getenv('MYSQL_USER');
$pwd  = getenv('MYSQL_PASSWORD');


$dbh = new PDO(
    "mysql:host=db;dbname={$db}",
    $user, 
    $pwd
);

$retrieveAll = "SELECT * 
FROM books";

$stmt = $dbh->prepare($retrieveAll);
$stmt->execute();
$result = $stmt->fetchAll(PDO::FETCH_ASSOC);

foreach ($result as $book) {
    echo "<ul>";
    echo "<li>{$book['title']}</li>";
    echo "<li>{$book['author']}</li>";
    echo "<li>{$book['genre']}</li>";
    echo "<li>{$book['year']}</li>";
    echo "</ul>";
}

