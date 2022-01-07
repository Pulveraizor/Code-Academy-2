<?php

require_once 'App/Classes/Tag.php';

$div = new Tag('div');
$div->setAttr('class', 'col-3')->setAttr('style', 'background-color: black; color: white')->setText('This is a test text for a div')->show();
 
(new Tag('a'))->setAttr('href', '#')->setText('Click me')->show();