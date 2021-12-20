<?php

setcookie('name', 'Benas');
header('Set-Cookie: man=made');
var_dump($_COOKIE);