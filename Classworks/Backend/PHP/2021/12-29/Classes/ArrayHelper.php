<?php

class ArrayHelper {
public static $array = null;

    public function __construct($array) {
        $this->array = $array;
    }

    public static function arraySum() {
        return array_sum(self::$array);
    }
    public static function arrayAverage() {
        return self::arraySum(self::$array) / count(self::$array);
    }
}