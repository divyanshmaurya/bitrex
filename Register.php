<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Register
 *
 * @author root
 */ 
require_once 'database/Database.php';
require_once 'Constants.php';
class Register implements Constants {
    //put your code here
    private $name,$phone,$email,$college,$university,$course,
            $regtype,$rowCount,$dateOfArrival,$dateOfDeparture,
            $style,$color,$size,$isPremium,$isISC;
    private $databaseObj;
            
    public function __construct() {
        $this->databaseObj=new Database();
    }
    public function getRowCount(){
        return $this->rowCount;
    }
    public function InsertParticipantsInfo(){
        $this->databaseObj->query = "call insert_info(?,?,?,?,?,?,?,?)";
        $this->databaseObj->stmt = $this->databaseObj->prepare($this->databaseObj->query);
        $this->databaseObj->stmt->bind_param('ssssssii',$this->email, $this->name,$this->phone, $this->college,
                $this->university, $this->course, $this->regtype, $this->isISC); //i for integer , s for string
        $this->databaseObj->stmt->execute();
        $this->rowCount= $this->databaseObj->getResultantRow();
    }
    public function InsertTshirtInfo(){
        $this->databaseObj->query = "call insert_tshirt_preference(?,?,?,?,?)";
        $this->databaseObj->stmt = $this->databaseObj->prepare($this->databaseObj->query);
        $this->databaseObj->stmt->bind_param('sissi', $this->email, $this->style , $this->color, $this->size,
                                    $this->isPremium); //i for integer , s for string
        $this->databaseObj->stmt->execute();
        $this->rowCount= $this->databaseObj->getResultantRow();
    }
    public function InsertAccomodationInfo(){
        $this->databaseObj->query = "call insert_info(?,?,?)";
        $this->databaseObj->stmt = $this->databaseObj->prepare($this->databaseObj->query);
        $this->databaseObj->stmt->bind_param('sss', $this->email,$this->dateOfArrival, $this->dateOfDeparture); //i for integer , s for string
        $this->databaseObj->stmt->execute();
        $this->rowCount= $this->databaseObj->getResultantRow();
    }
    public function validate($json){
       
    }
}
$register=new Register();
$json= json_decode(file_get_contents("php://input"));
//$register->validate($json);