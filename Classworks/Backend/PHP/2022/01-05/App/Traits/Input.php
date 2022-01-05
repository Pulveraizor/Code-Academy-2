<?php

namespace App\Traits;

trait Input {
    public function generateInput($type, $placeholder, $id) {
        return "<input type=\"{$type}\" placeholder=\"{$placeholder}\" id=\"{$id}\">";
    }
}