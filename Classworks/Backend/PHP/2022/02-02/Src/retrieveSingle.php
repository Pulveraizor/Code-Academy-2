<?php

function getBook($isbn) {
    $db   = getenv('MYSQL_DATABASE');
    $user = getenv('MYSQL_USER');
    $pwd  = getenv('MYSQL_PASSWORD');

    $dbh = new PDO(
        "mysql:host=db;dbname={$db}",
        $user, 
        $pwd
    );

    $retrieve = "SELECT * FROM books
    WHERE isbn = :isbn";

    $stmt = $dbh->prepare($retrieve);
    $stmt->bindValue(':isbn', $isbn);
    $stmt->execute();
    $book = $stmt->fetch(PDO::FETCH_ASSOC);
    $book = json_encode($book, true);
    echo $book;    
}

if (isset($_GET['isbn'])){
    getBook($_GET['isbn']);
}