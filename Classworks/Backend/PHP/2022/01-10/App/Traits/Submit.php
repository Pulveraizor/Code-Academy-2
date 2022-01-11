<?php

namespace App\Traits;

trait Submit {
    public function submit($name) {
        return "<button>{$name}</button>";
    }
}