<?php

require_once '../vendor/autoload.php';


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

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div style="display: flex; flex-direction: auto; justify-content: space-around; flex-wrap: wrap;">
        <div>
            <h3>Add a book</h3>
            <form action="../Views/create.php" method='POST'>
            <label for="author">Author:</label><br>
            <input type="text" id="author" name="author"><br>
            <label for="title">Book title:</label><br>
            <input type="text" id="title" name="title"><br>
            <label for="genre">Genre:</label><br>
            <input type="text" id="genre" name="genre"><br>
            <label for="year">Year:</label><br>
            <input type="text" id="year" name="year"><br>
            <input type="submit" value="Submit book">
            </form> 
        </div>
        <div>
            <h3>Delete a book</h3>
            <form action="../Views/delete.php" method='POST'>
            <label for="id">Enter book ID:</label><br>
            <input type="text" id="id" name="id"><br>
            <input type="submit" value="Delete book">
            </form> 
        </div>
        <div>
            <h3>Update book info</h3>
            <form action="../Views/delete.php" method='POST'>
            <label for="id">Enter book ID:</label><br>
            <input type="text" id="id" name="id"><br>
            <input type="submit" value="Update">
            </form> 
        </div>
    </div>
    <div style="display: flex; flex-direction: auto; justify-content: space-evenly; flex-wrap: wrap;">
        <?php foreach ($result as $book) {
        echo "<ul>";
        echo "<small>ID {$book['id']}</small>";
        echo "<li>{$book['title']}</li>";
        echo "<li>{$book['author']}</li>";
        echo "<li>{$book['genre']}</li>";
        echo "<li>{$book['year']}</li>";
        echo "</ul>";
    } ?>
        
    </div>
</body>
</html>