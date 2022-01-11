<?php

require_once('upload.php');

function ImageResize($image, $w, $h) {
    $oldw = imagesx($image);
    $oldh = imagesy($image);
    $temp = imagecreatetruecolor($w, $h);
    imagecopyresampled($temp, $image, 0, 0, 0, 0,
    $w, $h, $oldw, $oldh);
    return $temp;
};


$idCard = imagecreatefromjpeg('images/ID.jpg');

$black = imagecolorallocate($idCard, 0x00, 0x00, 0x00);
$font = 'open-sans/OpenSans-Bold.ttf';

$fullName = $_POST['name'] . ' ' . $_POST['surname'];
imagefttext($idCard, 30, 0, 850, 680, $black, $font, $fullName);

$city = $_POST['city'];
imagefttext($idCard, 30, 0, 850, 740, $black, $font, $city);

$checkboxes = $_POST['lang'];
$spacing = 750;
foreach ($checkboxes as $skill) {
    if ($skill) {
        imagefttext($idCard, 30, 0, $spacing += 100, 810, $black, $font, $skill);
    } else {
        imagefttext($idCard, 30, 0, $spacing += 100, 810, $black, $font, 'Nieko nemoku');
    }
};

$photo = imagecreatefromjpeg($path);
$resizedPhoto = ImageResize($photo, 250, 320);

imagecopy($idCard, $resizedPhoto, 535, 550, 0, 0, 250, 320);

$saveTo = "./generated/" . date("Ymd") . rand() . ".png";;

header('Content-Type: image/png');

imagepng($idCard, $saveTo);
imagedestroy($idCard);

echo $saveTo;

?>