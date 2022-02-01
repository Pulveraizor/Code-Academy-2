<?php

function mySimpleFunction() {
    list($message) = func_get_args();
    echo $message;
}
mySimpleFunction('hello world!');