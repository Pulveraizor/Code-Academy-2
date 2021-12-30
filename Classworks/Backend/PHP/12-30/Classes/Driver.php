<?php

require_once 'Worker.php';

class Driver extends Worker {
    private $experience;
    private $licence;

    public function setExp($experience) {
        $this->experience = $experience;
    }
    public function getExp() {
        return $this->experience;
    }
    public function setLicence($licence) {
        $this->licence = $licence;
    }
    public function getLicence() {
        return $this->licence;
    }
}