<?php

namespace App\Traits;

trait Label {
    public function generateLabel($forId, $name) {
        return "<label for=\"{$forId}\">{$name}</label>";
    }
}