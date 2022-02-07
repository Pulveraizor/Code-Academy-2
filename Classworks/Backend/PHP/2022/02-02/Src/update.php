
<?php

$db   = getenv('MYSQL_DATABASE');
$user = getenv('MYSQL_USER');
$pwd  = getenv('MYSQL_PASSWORD');


$dbh = new PDO(
    "mysql:host=db;dbname={$db}",
    $user, 
    $pwd
);

if (empty($_POST['id']) ||  empty($_POST['isbn']) ||  empty($_POST['genre']) ||
    empty($_POST['author']) || empty($_POST['title']) || empty($_POST['year'])) { 
        echo 'Please fill in all required fields';
    } else {
        $update = "UPDATE books 
        SET isbn = :isbn,
        genre = :genre,
        author = :author,
        title = :title,
        year = :year
        WHERE id = :id";
        
        $stmt = $dbh->prepare($update);
        
        $stmt->bindValue(':id', $_POST['id']);
        $stmt->bindValue(':isbn', $_POST['isbn']);
        $stmt->bindValue(':genre', $_POST['genre']);
        $stmt->bindValue(':author', $_POST['author']);
        $stmt->bindValue(':title', $_POST['title']);
        $stmt->bindValue(':year', $_POST['year']);
        
        $stmt->execute();
    }

