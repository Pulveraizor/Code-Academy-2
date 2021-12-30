<?php

abstract class Person {
    function __construct($name) {
        $this->name = $name;
    }
    public abstract function greetings();
}