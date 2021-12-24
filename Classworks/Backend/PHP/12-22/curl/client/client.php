<?php

require_once('app.php');

$source = 'https://randomuser.me/api';

$destination = 'nginx/12-22/curl/server/server.php';

sendUserData(getUserData($source), $destination);