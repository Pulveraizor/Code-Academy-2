<?php

function getAllBooks() {
    $db   = getenv('MYSQL_DATABASE');
    $user = getenv('MYSQL_USER');
    $pwd  = getenv('MYSQL_PASSWORD');

    $dbh = new PDO(
        "mysql:host=db;dbname={$db}",
        $user,
        $pwd
    );

    $retrieve = "SELECT * FROM books";

    $stmt = $dbh->prepare($retrieve);
    $stmt->execute();
    $allBooks = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $allBooks = json_encode($allBooks);
    echo $allBooks;
};


getAllBooks();
