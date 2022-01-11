<?php

session_start();

require_once '../vendor/autoload.php';


$_SESSION['answer4'] = $_POST;

$questions = file_get_contents('../App/Questions/questions.json');
$questions = json_decode($questions, true);
$ans = array_merge($_SESSION['answer1'], $_SESSION['answer2'], $_SESSION['answer3'], $_SESSION['answer4']);

$score = [];

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
    <div class="header">
        <h1>Results</h1>
    </div>
    <div class="container">
        <div class="results">
        <?php
    foreach ($questions as $question) {
        foreach ($ans as $key => $value) {
            if ($question['id'] == $key && $question['correct'] == $value) {
                $score[] = $key;
                echo (new App\Classes\Tag('div'))->setAttr('style', 'color: green;')->setText("\"{$question['question']}\": correct")->show();
                // echo "\"{$question['question']}\": correct";
                
            } if ($question['id'] == $key && $question['correct'] != $value) {
                echo (new App\Classes\Tag('div'))->setAttr('style', 'color: red;')->setText("\"{$question['question']}\": wrong")->show();
                // echo "\"{$question['question']}\": wrong";
                
            }
        }
    }
    ?>
    <div class="total">
    <?php
    echo 'Total score for ' . $_SESSION['fname'] . ': ' . count($score) . ' out of ' . count($questions);
    ?>
    </div>
        </div>
    </div>
    <div class="again">
        <a href="../Public/index.php">Start again</a>
    </div>
</body>
</html>