
<?php

echo 2 + 2, '<br>';
echo 2 * 22, '<br>';
echo 2 / 2, '<br>';

echo ceil(4.3), '<br>';  
echo ceil(9.999), '<br>';
echo ceil(-3.14), '<br>';

$num_1 = 11;
$num_2 = 24;
$num_3 = 78;

if ($num_1 < $num_2) {
    echo "TRUE";
} else {
    echo "FALSE";
}

$os = `uname`;
$version = `uname -r`;

echo "<pre>$os $version</pre>";


//Constant:

//Method 1:
define('FAFA', 'I am everything');

echo FAFA;

//Method 2:
const SECOND = 45785;

echo SECOND;