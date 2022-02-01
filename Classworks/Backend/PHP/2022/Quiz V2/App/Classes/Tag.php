<?php

namespace App\Classes;

class Tag {

    public $attributes = [];

    public function __construct($tag) {
        $this->tag = $tag;
    }
    public function setText($text) {
        $this->text[] = $text;
        return $this;
    }
    public function gatherAttr() {
        $attributes = '';
        foreach ($this->attributes as $name => $value)
        $attributes .=  $value ? " {$name}=\"{$value}\"" : (' ' . $value);

        return $attributes;
    }
    public function setAttr($attName = null, $attValue = null) {

        $this->attributes[$attName] = $attValue;
        return $this;
    }
    public function get() {
        $text = implode(' ', $this->text);
        $attributes = $this->gatherAttr();
        return "<{$this->tag}{$attributes}>$text</{$this->tag}>";
    }
    public function show() {
        echo $this->get();
    }
}