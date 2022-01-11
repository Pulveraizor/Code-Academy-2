<?php

function generateQuestionForm($destination, $source, $qIndx) {
    $form = new App\Classes\FormBuilder();
    echo $form->open($destination , 'POST');

    foreach($source[$qIndx] as $key => $value) {
        if ($key == 'question') {
            echo  $form->generateLabel($key, $value);
            echo '<br>';
        } 
        if ($key == 'a') {
            echo '<div>';
            echo $form->generateLabel('a', $source[$qIndx]['a']);
            echo $form->generateInput('a', 'radio', null, $source[$qIndx]['id'], $key);
            echo '</div>';
        }
        if ($key == 'b') {
            echo '<div>';
            echo $form->generateLabel('b', $source[$qIndx]['b']);
            echo $form->generateInput('b', 'radio', null, $source[$qIndx]['id'], $key);
            echo '</div>';
        }
        if ($key == 'c') {
            echo '<div>';
            echo $form->generateLabel('c', $source[$qIndx]['c']);
            echo $form->generateInput('c', 'radio', null, $source[$qIndx]['id'], $key);
            echo '</div>';
            echo '<br>';
        }
    
    }

echo $form->submit('Next');
echo $form->close();
}