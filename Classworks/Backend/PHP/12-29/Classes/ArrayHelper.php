<?php

class ArrayHelper {
    public static $array = [1, 5, 7, 18];

    public static function arraySum() {
        return array_sum(self::$array);
    }
    public static function arrayAverage() {
        return self::arraySum() / count(self::$array);
    }
}