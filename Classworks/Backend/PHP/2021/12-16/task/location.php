<?php

session_start();

$username = $_POST['username'] ?? NULL;
$password = $_POST['password'] ?? NULL;

$userData = file_get_contents('users.json');
$users = json_decode($userData)->{'users'};

foreach ($users as $user) {
    if ($user->{'username'} === $username && $user->{'password'} === $password) {
        $_SESSION['loggedin'] = true;
        $_SESSION['username'] = $username;
    }
}

$building = $user->location->street->number;
$street = $user->location->street->name;
$city = $user->location->city;
$state = $user->location->state;
$country = $user->location->country;
$postcode = $user->location->postcode;
$coordinates = $user->location->coordinates;

if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) {
        echo "Welcome back, $username! <br>";
        echo $building . ' ' . $street . ',' . '<br>';
        echo $city . ', ' . $state . ',' . '<br>' . $country . '<br>' . $postcode . '<br>';
        echo $coordinates->{'latitude'} . ', ' . $coordinates->{'longitude'};
} else {
    echo "Please log in first to see this page.";
}

