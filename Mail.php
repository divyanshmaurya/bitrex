<?php

class Mail
{
    private $msg, $header, $to, $sub;
    private $headers;

    public function setHtmlHeader()
    {
        $this->headers = 'MIME-Version: 1.0' . "\r\n";
        $this->headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    }

    public function __construct()
    {
        $this->header = 'From: Bitrex Team<noreply@bitrex.in>' . "\r\n";
    }

}