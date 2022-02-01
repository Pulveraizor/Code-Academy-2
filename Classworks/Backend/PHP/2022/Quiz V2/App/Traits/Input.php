<?php

namespace App\Traits;

trait Input {
    public function generateInput($id, $type, $placeholder, $name, $value) {
        return "<input type=\"{$type}\" placeholder=\"{$placeholder}\" id=\"{$id}\" name=\"{$name}\" value=\"{$value}\">";
    }
}