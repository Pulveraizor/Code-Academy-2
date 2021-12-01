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


//Method 1;
for ($i = 1; $i < 10; $i++) {
    echo str_repeat($i, $i), '<br>';
}