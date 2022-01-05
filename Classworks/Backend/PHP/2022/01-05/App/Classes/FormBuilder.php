<?php

namespace App\Classes;

use App\Traits\Label;
use App\Traits\Input;
use App\Traits\Textarea;
use App\Traits\Submit;

class FormBuilder {

    use Label;
    use Input;
    use Textarea;
    use Submit;

    public function __construct($action = null, $method = null) {
        $this->action = $action;
        $this->method = $method;
    }

    function open($action, $method) {
        return "<form action=\"{$action}\" method=\"{$method}\">";
    }
    function close() {
        return '</form>';
    }
}