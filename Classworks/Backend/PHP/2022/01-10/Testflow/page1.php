<?php
session_start();

require_once '../vendor/autoload.php';
require_once '../Src/functions.php';

$_SESSION['fname'] = $_POST['fname'];

$questions = file_get_contents('../App/Questions/questions.json');
$questions = json_decode($questions, true);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../Public/Assets/style.css">
</head>
<body>
    <?php
        generateQuestionForm('page2.php', $questions, 0);
    ?>
</body>
</html>
