<?php

namespace Classes;

class Student extends User {
    protected $scholarship;
    protected $course;

    public function setScholarship ($scholarship) {
        $this->scholarship = $scholarship;
    }
    public function getScholarship () {
        return $this->scholarship;
    }
    public function setCourse ($course) {
        $this->course = $course;
    }
    public function getCourse () {
        return $this->course;
    }
}