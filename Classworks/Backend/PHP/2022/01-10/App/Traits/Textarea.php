<?php

namespace App\Traits;

trait Textarea {
    public function generateTextarea($placeholder) {
        return "<textarea placeholder=\"{$placeholder}\"></textarea>";
    }
}