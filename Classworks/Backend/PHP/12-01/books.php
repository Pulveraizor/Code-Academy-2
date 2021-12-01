<?php

// Sukurti masyvą, kuris aprašytų knygos duomenis: title, author, year, genre

$book1 = [
    'The Hobbit',
    'J. R. R. Tolkien',
    1937,
    'Fantasy'
];

// Sukurti masyvą, kurio elementai būtų masyvai aprašantys knygas. Minimum 3.

$books = [
    $book1,
    ['Harry Potter and the Philosopher\'s Stone',
    'J. K. Rowling',
    1997,
    'Fantasy'
    ],
    [
    'The Little Prince',
    'Antoine de Saint-Exupéry',
    1943,
    'Novella'
    ],
    [
    'Dream of the Red Chamber',
    'Cao Xueqin',
    1800,
    'Family saga'
    ],

];

// Išvesti visus knygų masyvo elementus su var_dump;

// var_dump($books);

// Išvesti visų visų knygų metų vidurkį;

function getAverageAge($arr) {

    $yearsCollection = [];

    foreach ($arr as $year) {
        $yearsCollection[] = $year[2];
    }

    $result = array_sum($yearsCollection)/count($yearsCollection);
    
    echo $result;
}

getAverageAge($books);