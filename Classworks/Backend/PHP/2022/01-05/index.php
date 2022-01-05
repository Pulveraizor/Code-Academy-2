<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php

require_once 'vendor/autoload.php';

$form = new App\Classes\FormBuilder();
echo $form->open('POST', 'index.php');
echo $form->generateLabel('firstName', 'First Name');
echo $form->generateInput('text', 'Your name here', 'firstName');
echo '<br>';
echo $form->generateLabel('password', 'Password');
echo $form->generateInput('password', '...', 'password');
echo '<br>';
echo $form->generateTextarea('What would you like to say');
echo '<br>';
echo $form->submit('go');
echo $form->close();
?>
</body>
</html>

