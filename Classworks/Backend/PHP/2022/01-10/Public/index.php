<?php

session_start();
session_destroy();
session_start();

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../Assets/style.css">
</head>
<body>
    <div class="container">
        <form action="../Testflow/page1.php" method="post">
            <div>
                <label for="fname">Enter your name</label>
                <input type="text" id="fname" name="fname">
            </div>
            <div>
                <button type="submit">Start quiz</button>
            </div>
        </form>
    </div>
</body>
</html>