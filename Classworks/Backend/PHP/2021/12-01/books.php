<?php

// Sukurti masyvą, kuris aprašytų knygos duomenis: title, author, year, genre

$book1 = [
    'Title'  => 'The Hobbit',
    'Author' => 'J. R. R. Tolkien',
    'Year'   => 1937,
    'Genre'  => 'Fantasy'
];

// Sukurti masyvą, kurio elementai būtų masyvai aprašantys knygas. Minimum 3.

$books = [
    $book1,
    [
    'Title'  => 'Harry Potter and the Philosopher\'s Stone',
    'Author' => 'J. K. Rowling',
    'Year'   => 1997,
    'Genre'  => 'Fantasy'
    ],
    [
    'Title'  => 'The Little Prince',
    'Author' => 'Antoine de Saint-Exupéry',
    'Year'   => 1943,
    'Genre'  => 'Novella'
    ],
    [
    'Title'  => 'Dream of the Red Chamber',
    'Author' => 'Cao Xueqin',
    'Year'   => 1800,
    'Genre'  => 'Family saga'
    ],

];

// Išvesti visus knygų masyvo elementus su var_dump;

var_dump($books);

// Išvesti visų visų knygų metų vidurkį;

function getAverageYear($arr) {

    $yearsCollection = [];

    foreach ($arr as $year) {
        $yearsCollection[] = $year['Year'];
    }

    $result = array_sum($yearsCollection)/count($yearsCollection);

    echo "The average year of the books is $result";
}

getAverageYear($books);