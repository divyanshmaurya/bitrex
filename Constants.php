<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author root
 */
interface Constants {
    //put your code here
   const basic=200;
   const apparel=500;
   const accomodation=3000;
   const size =array('XS' , 'S' ,'M','L','XL','XXL');
   const MaxPariticipants = array(
                                    "hunt"=>2,
                                    "homepage"=>3,
                                    "csgo"=>5,
                                    "cod"=>5,
                                    "launchpad"=>5,
                                    "quiz"=>2
                                    );
   const MinParticipanst = array(
                                    "hunt"=>2,
                                    "homepage"=>1,
                                    "csgo"=>5,
                                    "cod"=>5,
                                    "launchpad"=>1,
                                    "quiz"=>2
                                    );
   const TeamEventNames = array (
                                "hunt","homepage","csgo","cod","launchpad","quiz"
                            );
   const EventNames = array(
                            "algoholics","code_ninja","hts","nfs","fifa"
                            );
}
