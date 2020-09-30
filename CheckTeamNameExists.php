<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of CheckTeamNameExists
 *
 * @author divyansh
 */
require_once 'database/Database.php';
class CheckTeamNameExists {
    //put your code here
    private $databaseObj;
    private $teamName,$result;
    
    public function __construct() {
        $this->databaseObj=new Database();
    }
    public function setTeamName($teamName){
        $this->teamName=$teamName;
    }
    public function getTeamName(){
        return $this->teamName;
    }
    public function CheckTeamName(){
        $this->databaseObj->query = "call check_team_name_exists(?)";
        $this->databaseObj->stmt = $this->databaseObj->prepare($this->databaseObj->query);
        $this->databaseObj->stmt->bind_param('s', $this->teamName); //i for integer , s for string
        $this->databaseObj->stmt->execute();
        $this->result= $this->databaseObj->getResultantRow();
    }
    public function getJsonResult(){
        
        echo json_encode($this->result);
    }
}

$checkTeamNameExists = new CheckTeamNameExists();
$json = json_decode(file_get_contents("php://input"));
$checkTeamNameExists->setTeamName($json->teamName);
$checkTeamNameExists->CheckTeamName();
$checkTeamNameExists->getJsonResult();
