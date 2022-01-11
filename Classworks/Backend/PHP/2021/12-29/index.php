<?php

require_once 'Classes/ArrayHelper.php';

$arrayTest = [1, 5, 7, 18];

var_dump(ArrayHelper::arraySum($arrayTest));
var_dump(ArrayHelper::arrayAverage($arrayTest));