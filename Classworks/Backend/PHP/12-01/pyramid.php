<?php

// "Nupieškite" tokio tipo piramidę ekrane dviem skirtingais būdais. :
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999


//Method 1:
for ($i = 1; $i < 10; $i++) {
    echo str_repeat($i, $i), '<br>';
}

//Method 2:
function createPyramid(...$arg) {
    foreach ($arg as &$value) {
        echo str_repeat($value, $value), '<br>';
    }
}

createPyramid(1, 2, 3, 4, 5, 6, 7, 8, 9);