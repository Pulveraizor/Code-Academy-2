<?php

// Sukurkite dvimatį masyvą. Pirmieji du raktai yra lt ir en.
// Raktai turi savaitės dienų vardų masyvus lietuviškai ir angliškai.
// Naudodamiesi šiuo masyvu, pirmadienį parodykite lietuvių kalba, o trečiadienį - anglų kalba.
// Sukurkite kintamuosius lang (reikšmės lt arba en) ir parodykite dieną

$weekDays = [
    'lt' => [
        1 => 'Pirmadienis',
        2 => 'Antradienis',
        3 => 'Trečiadienis',
        4 => 'Ketvirtadienis',
        5 => 'Penktadienis',
        6 => 'Šeštadienis',
        0 => 'Sekmadienis'],
    'en' => [
        1 => 'Monday',
        2 => 'Tuesday',
        3 => 'Wednesday',
        4 => 'Thursday',
        5 => 'Friday',
        6 => 'Saturday',
        0 => 'Sunday']
    ];


var_dump($weekDays['lt'][1]);
var_dump($weekDays['en'][3]);


$lang = 'lt';

$todayEn = date('l');
$today = date('w');

if ($lang === 'en') {
    echo "Today is $todayEn";
} else {
    $result = $weekDays[$lang][$today];
    echo "Šiadien yra $result";
}