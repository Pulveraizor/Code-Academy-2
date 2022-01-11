<?php

$userSource = 'https://randomuser.me/api/?format=csv';

$user = file_get_contents($userSource);

file_put_contents('users.csv', $user, FILE_APPEND);
