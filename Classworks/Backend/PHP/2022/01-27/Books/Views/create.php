<?php

$db   = getenv('MYSQL_DATABASE');
$user = getenv('MYSQL_USER');
$pwd  = getenv('MYSQL_PASSWORD');


$dbh = new PDO(
    "mysql:host=db;dbname={$db}",
    $user, 
    $pwd
);

if (isset($_POST['author']) && isset($_POST['title']) 
&& isset($_POST['genre']) && isset($_POST['year'])) {

    $query = "INSERT INTO books (`id`, `genre`, `author`, `title`, `year`)
    VALUES ( null, :genre, :author, :title, :year)";
    $stmt = $dbh->prepare($query);
    $stmt->bindValue(':genre', $_POST['genre']);
    $stmt->bindValue(':author', $_POST['author']);
    $stmt->bindValue(':title', $_POST['title']);
    $stmt->bindValue(':year', $_POST['year']);

    $stmt->execute();

    echo 'Book added successfully!';
} else {
    echo 'Please fill in all info';
}