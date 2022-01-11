<?php

// session_name('I-am-a-session');

// echo session_name();

// var_dump($_COOKIE);



session_start();

$_SESSION['timestamp'] = time();
$_SESSION['username'] = 'Mamania';


var_dump($_SESSION);
var_dump($_SERVER['HTTP_USER_AGENT']);

var_dump(php_sapi_name());