<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Validator
 *
 * @author root
 */
class Validator {
    private $json, $emailReg, $phoneReg, $textReg, $regTypeReg ;
    public function __construct($json) {
        $this->json=$json;
        $this->emailReg = "/^\w+([-+.'][^\s]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/";
        $this->phoneReg = "/^(?![8]{10}|[9]{10})[7-9]{1}[0-9]{9}$/";
        $this->textReg  = "/^([a-zA-Z]{3,})$/";
        $this->regTypeReg ="/^([0-3]{1})$/";
        
    }
    public function validateJson(){
      
        
        $isEmailValid= preg_match($emailReg, $json->email);  
    }
}
