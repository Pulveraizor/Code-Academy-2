<?php

session_start();

require_once '../vendor/autoload.php';
require_once '../Src/functions.php';

$questions = file_get_contents('../App/Questions/questions.json');
$questions = json_decode($questions, true);
$_SESSION['answer3'] = $_POST;


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
    <?php
        generateQuestionForm('results.php', $questions, 3);
    ?>
</body>
</html>