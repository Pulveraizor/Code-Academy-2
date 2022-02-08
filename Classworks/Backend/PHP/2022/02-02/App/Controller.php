<?php

class Controller {
    protected static $db   = getenv('MYSQL_DATABASE');
    protected $user = getenv('MYSQL_USER');
    protected $pwd  = getenv('MYSQL_PASSWORD');

    protected $dbh = new PDO('mysql:host=db;dbname=' . self::$db,
        self::$user,
        self::$pwd
    );

    public function getAllBooks() {
        $retrieve = "SELECT * FROM books";
    
        $stmt = self::$dbh->prepare($retrieve);
        $stmt->execute();
        $allBooks = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $allBooks = json_encode($allBooks);
        echo $allBooks;
    }

    public function getBook($isbn) {
        $retrieve = "SELECT * FROM books
        WHERE isbn = :isbn";
    
        $stmt = self::$dbh->prepare($retrieve);
        $stmt->bindValue(':isbn', $isbn);
        $stmt->execute();
        $book = $stmt->fetch(PDO::FETCH_ASSOC);
        $book = json_encode($book, true);
        echo $book;    
    }

    public function createBook()
    {
        $createNew = "INSERT INTO books (`isbn`, `genre`, `author`, `title`, `year`)
            VALUES (:isbn, :genre, :author, :title, :year)";

        $stmt = self::$dbh->prepare($createNew);

        $stmt->bindValue(':isbn', $_POST['isbn']);
        $stmt->bindValue(':genre', $_POST['genre']);
        $stmt->bindValue(':author', $_POST['author']);
        $stmt->bindValue(':title', $_POST['title']);
        $stmt->bindValue(':year', $_POST['year']);

        $stmt->execute();
    }

    public function deleteBook()
    {
        $delete = "DELETE FROM books
        WHERE isbn = :isbn";
        $stmt = self::$dbh->prepare($delete);
        $stmt->bindValue(':isbn', $_POST['isbn']);
        $stmt->execute();
    }

    


}
