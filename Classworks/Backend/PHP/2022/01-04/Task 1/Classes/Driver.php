<?php

namespace Classes;

class Driver extends Worker {
    protected $experience;
    protected $licence;

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