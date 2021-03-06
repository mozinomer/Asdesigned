<?php
/*
Template Name: Snarfer
*/
?>
<!DOCTYPE html>
<html>
<head>
    <title>Home</title>
    <link rel="icon" href="https://www.coalescence.us/wp-content/uploads/2020/10/Group-53.png" type="image/png" sizes="16x16">
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"
        integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">

    
<style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500&display=swap');

        * {
        font-family: 'Poppins', sans-serif;
        }
        .bannerHomapge {
        min-height: 800px;
        display: flex;
        align-items: center;
        color: #fff;
        position: relative;
        }
        .bannerHomapge h6 {
        font-size: 16px;
        font-weight: 300;
        text-transform: uppercase;
        margin-bottom: 20px;
        }
        .bannerHomapge h2 {
        max-width: 578px;
        font-size: 52px;
        line-height: 70px;
        }
        #getinTouch {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        background: #1B8CD0;
        color: #fff;
        max-width: 321px;
        height: 60px;
        border-radius: 40px;
        padding: 0px 20px 0px 35px;
        font-weight: 600;
        position: relative;
        margin: 50px 0px 0px 0px;
        }
        #getinTouch::before {
        content: "";
        display: block;
        width: 10px;
        height: 10px;
        border: 3px solid #fff;
        position: absolute;
        right: 40px;
        transform: rotate(45deg);
        border-left: 0;
        border-bottom: 0;
        }
        #getinTouch::after {
        content: "";
        display: block;
        width: 15px;
        border: 1px solid #fff;
        position: absolute;
        right: 40px;
        }
        .socialAccountmail {
        margin-left:40px;
        }
        .socialMediabanner {
        position: absolute;
        bottom: 0;
        /* background: #ffffff29; */
        display: flex;
        align-items: center;
        width: 100%;
        /* max-width: 599px; */
        /* position: relative; */
        }

        .socialMediaIntegration {
        /* background: #ffffff29; */
        max-width: max-content;
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-height: 66px;
        /* padding: 0px 80px; */
        padding-right: 40px;
        }
        span.SocialMedia {
        padding-right: 40px;
        position: relative;
        }
        span.SocialMedia::before {
        content: "";
        display: block;
        width: 10px;
        height: 10px;
        border: 3px solid #fff;
        position: absolute;
        right: 40px;
        transform: rotate(45deg);
        border-left: 0;
        border-bottom: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        }
        .socialAccount {
        display: flex;
        align-items: center;
        justify-content: space-between;
        }
        .socialAccount a {
        color: #fff;
        }
        .section2 {
        min-height: 800px;
        display: flex;
        align-items: center;
        display:none;
        }

        .section2 .container {
        max-width: 1300px;
        }
        .section2 .row {
        align-items: center;
        }
        .section2 .col-md-6:nth-child(1) {
        max-width: 597px;
        width: 45%;
        overflow: hidden;
        }
        .section2 .row {
        align-items: center;
        }
        div#collage1 {
        padding: 0px 30px;
        }
        .section2 img {
        margin-bottom: 30px;
        }
        div#contentsection2 {
        max-width: 545px;
        width: 45%;
        margin-left: auto;
        }
        .section2 h6 {
        color: #008CD0;
        font-size: 18px;
        font-weight: 600;
        }
        div#contentsection2 h2 {
        font-size: 35px;
        font-weight: 600;
        line-height: 55px;
        }
        .section2 p {
        font-size: 16px;
        margin: 30px 0px;
        }
        div#buttoncontainersection2 {
        display: none;
        }
        .servicessection {
        background: #F7F7F7;
        padding: 100px 0px 150px 0;
        position:relative;
        }
        .servicessection-mail{
        margin-top:30px;
        }

        .servicessection-mail h6{
        color:#000;
        }
        .servicessection::before {
        position: absolute;
        content: "";
        bottom: 0;
        background-image: url(https://www.coalescence.us/wp-content/themes/HighendWP/images/new/business.png);
        background-size: cover;
        background-repeat: no-repeat;
        height: 85px;
        width: 100%;
        }
        .servicessection .container {
        max-width: 1360px;
        }
        .servicessection .container > h6 {
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 16px;
        margin-bottom: 30px;
        }
        .servicessection h6 {
        font-size: 18px;
        font-weight: 600;
        }
        .servicessection .container > h2 {
        font-weight: 600;
        font-size: 42px;
        max-width: 665px;
        line-height: 60px;
        margin-bottom: 70px;
        }
        .servicessection .row {
        justify-content: space-between;
        position: relative;
        }
        .servicessection .row::before {
        content: "";
        position: absolute;
        width: 1px;
        height: 100%;
        transform: translateX(-50%);
        left: 50%;
        background-color: rgb(112 112 112 / 0.3);
        }
        .servicessection .row .col-md-6 {
        flex: 0 45%;
        max-width: 45%;
        }
        h3.
        {
        font-size: 23px;
        color: #1B8CD0;
        }
        .contentService {
        /* margin-top: 50px; */
        padding-top: 40px;
        }
        .servicessection h6 {
        font-size: 18px;
        font-weight: 600;
        }
        .contentService p {
        color: #484848;
        font-size: 14px;
        margin-bottom: 40px;
        }

        .contentService {
        border-bottom: 1px solid rgb(112 112 112 / 0.3);
        padding-bottom: 40px;
        padding-left: 0px;
        list-style: none;
        }
        .contentService ul {
            padding: 0px;
        }
        .contentService li {
        position: relative;
        padding-left: 40px;
        display: block;
        margin-bottom: 20px;
        font-weight: 500;
        }
        .contentService li::before {
        content: "";
        display: block;
        width: 10px;
        height: 10px;
        border: 3px solid #151515;
        position: absolute;
        right: 40px;
        transform: rotate(45deg);
        border-left: 0;
        border-bottom: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        right: auto;
        left: 6px;
        }
        .contentService li::after {
        content: "";
        display: block;
        width: 15px;
        border: 1px solid #000;
        position: absolute;
        right: 40px;
        top: 0;
        bottom: 0;
        margin: auto;
        height: max-content;
        right: 0px;
        left: 0px;
        transform: none;
        right: auto;
        }

        .ourpartners {
        min-height: 120px;
        display: flex;
        align-items: center;
        }
        .ourpartners {
        background: #FFDE52;
        justify-content: center;
        text-align: center;
        }
        .ourpartners h2 {
        color: #000;
        opacity: 0.5;
        text-transform: uppercase;
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 15px;
        }
        .ourpartners .row {
        justify-content: center;
        }
        .ourpartners img:nth-child(even) {
        margin: 0px 20px;
        }
        .ourpartners img {
        max-width: 140px;
        max-height: 63px;
        }

        h3.serviceName {
        font-size: 22px;
        color: #000;
        font-weight: 600;
        text-align:center;
        }
        .servicenamebottom{
        color: #1B8CD0;
        margin-top:10px;
        font-size: 22px;
        }
        /* .socialAccount a:nth-child(even) {
        margin: 0px 20px;
        } */


        div#collage2 {
        padding: 0px 30px;
        margin-top: 110px;
        }
        .socialAccount {
        margin-left: 40px;
        }



        .bannerHomapge {
        background-size: cover !important;
        background-position: center !important;
        }


        img#logoMain {
        position: absolute;
        z-index: 999;
        width: 200px;
        }
        footer {
        background: #008cd0;
        min-height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        }

        footer a {
        color: #fff;
        text-decoration: underline;
        opacity: 0.7;
        }
        footer .footer-logo a {
        opacity:1;
        }
        footer .row {
        justify-content: space-between;
        align-items: flex-end;
        }

        a#LetsTalks {
        background: #ffde53;
        color: #000;
        padding: 10px 40px;
        border-radius: 20px;
        text-decoration: none;
        opacity: 1;
        display: none;
        }

        footer a:hover {
        color: #fff;
        opacity: 1;
        }

        a#LetsTalks img {
        height: auto;
        }

        footer img {
        height: auto;
        }
        footer {
        padding: 30px 30px 10px 30px;
        }
        footer .row{
        padding-bottom:30px;    
        }
        footer .footer-num p {
        font-size:12px;
        margin-bottom:0;
        color:#fff;
        opacity:.8;
        margin-top: .5rem;
        }
        .footer-join h6 {
        color:#FEDE52;

        }
        .socialMediabanner::after {content: "";display: block;width: 50%;height: 100%;position: absolute;left: 0;background: rgb(255 255 255 / 0.3);z-index: 1;}

        .socialMediaIntegration {
        position: relative;
        z-index: 2;
        }
        #getinTouch:hover {
        background: none;
        color: #fff;
        border-color: #fff;
        }

        a#getinTouch {
        border: 2px solid #1B8CD0;
        }

        .bannerHomapge {
        height: 100vh;
        min-height: auto;
        }

        .servicessection .container > h2 {
        font-size: 36px;
        max-width: 500px;
        }

        .ourpartners h2 {
        letter-spacing: 2px;
        margin-bottom: 30px;
        }
        #getinTouch:hover {
        background: #fff;
        color: #1B8CD0;
        border-color: #fff;
        text-decoration: none;
        }
        #getinTouch:hover::before, #getinTouch:hover::after {
        border-color: #000;
        }
        .section2 {
        position: relative;
        }

        img#imagq5 {
        position: absolute;
        bottom: -120px;
        left: -47px;
        }

        img#imagq4 {
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        left: -140px;
        }

        img#imagq1 {
        position: absolute;
        top: 50px;
        left: 90px;
        }

        img#imagq2 {
        position: absolute;
        right: 0;
        left: 140px;
        margin: auto;
        top: 70px;
        }

        img#imagq3 {
        position: absolute;
        right: -200px;
        top: 100px;
        }

        .section2 {
        /* overflow-x: hidden; */
        }
        html,
        body {
        overflow-x: hidden;
        }
        .bannerHomapge {
        height: calc( 100vh - 111px );
        }
        .socialMediabanner {
        display: none;
        }
        .footer-join a {
        display: block;
        margin-bottom: 10px;
        }
        /*media chal raha h bhai */
        @media (min-width: 1500px){

        .container, .container-lg, .container-md, .container-sm, .container-xl {
        max-width: 1340px;
        }
        }
        @media (min-width: 1300px){
        .socialMediabanner .container {
        max-width: 1240px;
        }
        }
        @media (min-width: 1500px){
        .socialMediabanner .container {
        max-width: 1440px;
        }
        }


        @media only screen and (max-width: 1400px) {

        .container {
        max-width: 1140px !important;
        }


        .socialMediabanner .container {
        max-width: 100% !important;
        padding: 0px;
        }

        .socialMediaIntegration {
        padding-left: 40px;
        }

        .section2 {
        background-size: 100% 100% !important;
        }
        }
        @media all and (min-width: 768px) and (max-width: 1023px) {
        .socialMediabanner::after {
        max-width: 57%;
        width: 100%;
        }
        .container {
        padding: 0px 40px;
        }

        div#collageContainer img {
        max-height: 160px;
        }

        div#contentsection2 h2 {
        font-size: 21px;
        line-height: 32px;
        }

        .section2 h6 {
        font-size: 15px;
        }

        .section2 p {
        font-size: 14px;
        }

        div#collage1 {
        padding: 0px;
        }

        div#collage2 {
        padding-left: 0px;
        }

        .bannerHomapge h2 {
        font-size: 40px;
        }

        a#getinTouch {
        max-width: 240px;
        }

        .servicessection {
        padding: 50px 0px;
        }

        .servicessection .container > h2 {
        font-size: 32px;
        max-width: 70%;
        }

        .servicessection .container > h6 {
        font-size: 14px;
        margin-bottom: 10px;
        }

        h3.serviceName {
        font-size: 18px;
        }

        .servicessection h6 {
        font-size: 16px;
        }

        .contentService p {
        font-size: 13px;
        }

        .contentService li {
        font-size: 13px;
        }
        }
        @media only screen and (max-width: 767px) {
        .socialMediabanner::after {
        max-width: 100%;
        width: 100%;
        }
        .section2 .container >.row> .col-md-6 {flex: 0 100%;max-width: 100%;}

        div#collageContainer {
        display: flex;
        }

        .section2 .container >.row> .col-md-6 {
        display: flex;
        align-items: center;
        justify-content: space-between;
        }

        div#collageContainer .col-md-6 {
        max-width: 45% !important;
        overflow: hidden;
        }

        div#collageContainer img {
        height: 200px;
        }

        .bannerHomapge h6 {
        font-size: 13px;
        }

        .bannerHomapge h2 {
        font-size: 32px;
        line-height: normal;
        }

        #getinTouch {
        max-width: 230px;
        font-size: 14px;
        }

        .bannerHomapge {
        height: 100vh;
        min-height: auto;
        }

        span.SocialMedia {
        font-size: 12px;
        }

        .socialAccount a {
        font-size: 12px;
        }

        div#contentsection2 {
        display: block;
        }

        div#contentsection2 h2 {
        font-size: 22px;
        line-height: normal;
        }

        .section2 p {
        font-size: 13px;
        }

        .servicessection {
        padding: 20px 10px;
        }

        .servicessection .container > h6 {
        font-size: 13px;
        margin-bottom: 10px;
        }

        .servicessection .container > h2 {
        font-size: 22px;
        line-height: normal;
        margin-bottom: 30px;
        }

        h3.serviceName {
        font-size: 13px;
        }

        .servicessection h6 {
        font-size: 12px;
        }

        .contentService p {
        font-size: 11px;
        }

        .contentService li {
        font-size: 11px;
        }

        .servicessection .row {
        display: block;
        }
        .servicessection .row::before {
        content:none;
        position:static;
        }
        .servicessection .row .col-md-6 {
        flex: 0 100%;
        max-width: 100%;
        }

        div#collageContainer .col-md-6 {
        padding: 0px 15px;
        }
        .ourpartners img {
        margin-top: 10px;
        }

        .ourpartners .row {
        align-items: center;
        }
        footer a {
        margin-top: 0px;
        }

        footer {
        padding: 20px 20px;
        text-align:center;
        }

        footer img {
        width: 30%;
        height: auto;
        margin: 20px auto;
        display: block;
        }
        a#mail {
        display: inline-block;
        width: 60%;
        }

        footer .row {
        display: block;
        }

        a#callUs {
        width: auto;
        text-align: right;
        display: inline-block;
        }

        footer a {
        font-size: 13px;
        }
        footer .row {
        padding-bottom: 30px;
        }
        .footer-join h6 {
        margin-bottom: 0;
        }
        .bannerHomapge {
        height: calc(100vh - 180px);
        }
        .yoyo img {
        max-width: 100% !important;
        }
        }
        .yoyo img {
        max-width: 441px;
        }
        .yoyo {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0px 50px 2px 50px;
        background: #032e61;
        /* padding-bottom: 50px; */
        }
        .yoyo {
        height: 112px;
        }

        .yoyo img {
        max-width: 410px;
        max-height: 100%;
        }

        .footer-join a:last-child {
        margin: 0px !important;
        }

        .mainmenunew {
        position: fixed;
        z-index: 9999;
        background: #fffffff5;
        height: 100%;
        width: 100%;
        max-width: max-content;
        padding: 50px;
        left: -100%;
        height: max-content;
        top: 48px;
        }

        .mainmenunew ul {
        padding: 0px;
        list-style: none;
        }

        .mainmenunew li a {
        font-size: 28px;
        margin: 5px 0;
        display: block;
        text-align: right;
        position: relative;
        transition: 0.3s ease;
        /* color: rgba(255, 255, 255, 0.5); */
        text-align: left;
        text-decoration: none !important;
        color: #032f61;
        font-weight: 600;
        }

        .mainmenunew a:hover::after {
        content: '';
        position: absolute;
        right: -30px;
        height: 0;
        width: 4px;
        top: 50%;
        transition: 0.3s ease;
        background-image: linear-gradient(#032f61, #00a1e0, #acd4ee, #032f61);
        height: 35px;
        top: 22%;
        left: -20px;
        right: auto;
        top: 0;
        bottom: 0;
        margin: auto;
        }
        .mainmenunew.active {
        left: 0px;
        transition: 0.8s all;
        }
        .mainmenunew {
        transition: 0.8s all;
        }

        .mainmenunew {
        width: 100%;
        max-width: 100%;
        padding: 0px 40px;
        }

        .mainmenunew ul {
        display: flex;
        align-items: center;
        max-width: max-content;
        margin: auto;
        }

        .mainmenunew ul li {
        margin-left: 30px;
        padding: 0px;
        }

        .mainmenunew ul li a {
        margin: 0px;
        padding: 0px;
        padding: 17px 10px;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 18px;
        color: #032f61;
        font-weight: 400;
        }

        .mainmenunew {
        top: 0px;
        }

        img#logoMain {
        z-index: 99999999;
        height: 61px;
        }
        span.crosss {
        position: absolute;
        right: 20px;
        display: flex;
        align-items: center;
        z-index: 99;
        top: 0px;
        bottom: 0;
        cursor: pointer;
        }

        span.crosss img {
        width: 30px;
        margin: auto;
        display: block;
        /* height: max-content; */
        }

        .mainmenunew.active ul li a {
        cursor: pointer;
        }
        .header-logo {
        background: #008CD0;
        padding: 0px 0px 0 30px;
        display: inline-block;
        position: absolute;
        top: 0;
        z-index: 99999999;
        height: 61px;
        display: flex;
        align-items: center;
        }
        .header-logo img {
        max-width: 65%;
        }
        span#logoMain {
        cursor: pointer;
        margin-left:10px;
        }
        img#logoMain {
        width: 15px;
        height: 15px;
        position: absolute;
        top: 25px;
        right: 25px;
        display: inline-block;
        cursor: pointer;
        }
        .mainmenunew a:hover::after {
        display:none;
        }



</style>
</head>
<body>
    
    <div class="mainmenunew">
        <span class="crosss">
            <img src="https://www.coalescence.us/wp-content/uploads/2020/09/Screenshot-2020-09-28-at-11.13.19-PM.png" />
        </span>
        <?php wp_nav_menu( array( 'theme_location' => 'one-page-menu' ) ); ?>
    </div>  
    <div class="header-logo">
        <a href="https://www.coalescence.us/">          
            <img src="https://www.coalescence.us/wp-content/uploads/2020/10/Group-52@2x.png"/>
        </a>
        <span>
            <img src="https://www.coalescence.us/wp-content/uploads/2020/10/Icon-feather-menu.png" id="logoMain" />
        </span>
    </div>

    <div class="bannerHomapge" style="background: url('<?php echo get_template_directory_uri(); ?>/images/9.png');">
        <div class="container">
            <h6>
                Coalescence Cloud Consulting
            </h6>
            <h2>
                Unify your business on the Salesforce Platform.
            </h2>
            <a href="mailto:consultation@coalescence.us" id="getinTouch">
                Get in touch
            </a>
        </div>
        <div class="socialMediabanner">
            <div class="container">
                <div class="socialMediaIntegration">
                    <span class="SocialMedia">
                        Social Media
                    </span>
                    <div class="socialAccount">
                        <a href="#">
                            <i class="fa fa-linkedin" ></i>
                        </a>
                        <a class="socialAccountmail" href="mailto:consultation@coalescence.us">consultation@coalescence.us</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="yoyo">
        <img src="https://www.coalescence.us/wp-content/uploads/2020/09/Salesforce_Partner_Badge_Hrzntl_RGB.png" />
    </div>
    <div class="section2" style="background: url('./image.png');">
        <img src="<?php echo get_template_directory_uri(); ?>/images/new/1.png" id="imagq1">
        <img src="<?php echo get_template_directory_uri(); ?>/images/new/2.png" id="imagq2">
        <img src="<?php echo get_template_directory_uri(); ?>/images/new/3.png" id="imagq3">
        <img src="<?php echo get_template_directory_uri(); ?>/images/new/4.png" id="imagq4">
        <img src="<?php echo get_template_directory_uri(); ?>/images/new/5.png" id="imagq5">

        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="row margin0" id="collageContainer">
                        <div class="col-md-6" id="collage1">
                            <img src="<?php echo get_template_directory_uri(); ?>/images/1.png">
                            <img src="<?php echo get_template_directory_uri(); ?>/images/2.png">
                        </div>
                        <div class="col-md-6" id="collage2">
                            <img src="<?php echo get_template_directory_uri(); ?>/images/3.png">
                            <img src="<?php echo get_template_directory_uri(); ?>/images/4.png">
                        </div>
                    </div>
                </div>
                <div class="col-md-6" id="contentsection2">
                    <h6>
                        ABOUT US
                    </h6>
                    <h2>
                        We Provide best Technology solutions to your Problems.
                    </h2>
                    <p>
                        Our technology services are designed to build the capabilities required to seize your distant technology opportunities.
                    </p>
                    <div class="displayFLex justifyB" id="buttoncontainersection2">
                        <a href="#">
                            Our Services
                        </a>
                        <a href="#">
                            About Us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="servicessection">
        <div class="container">
            <h6>
                Our Services
            </h6>
            <h2>
                Solutions to Support Your Entire Business
            </h2>
            <div class="row">
                <div class="col-md-6">
                    <h3 class="serviceName">
                        Front Office | Salesforce
                    </h3>
                        <h3 class="servicenamebottom">
                        Front Office
                    </h3>
                    <?php $asd = 1; if( have_rows('content_services') ) : while( have_rows('content_services') ) : the_row();?>
                            <div class="contentService">
                                <h6>
                                    <?php the_sub_field('headingcontentService'); ?>
                                </h6>
                                <p>
                                    <?php the_sub_field('headingcontentService'); ?>
                                </p>
                                <?php $id = 1; if( have_rows('list_itemscontentService') ) : while( have_rows('list_itemscontentService') ) : the_row();?>
                                <ul>
                                    <li data-toggle="modal" data-target="#asd_<?php echo $id; ?><?php echo $asd; ?>">
                                        <?php the_sub_field('itemcontentService'); ?>
                                    </li>
                                </ul>
                                <!-- Modal -->
                                <div class="modal fade" id="asd_<?php echo $id; ?><?php echo $asd; ?>" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                  <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                      <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">
                                            <?php the_sub_field('itemcontentService'); ?>
                                        </h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                          <span aria-hidden="true">&times;</span>
                                        </button>
                                      </div>
                                      <div class="modal-body">
                                        <?php the_sub_field('content_popup'); ?>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <?php $id++; endwhile; else : endif; ?>
                            </div>

                    <?php $asd++; endwhile; else : endif; ?>
                </div>
                <div class="col-md-6">
                    <h3 class="serviceName">
                        Back Office | FinancialForce
                    </h3>
                    <h3 class="servicenamebottom">
                        Back Office - FinancialForce | Salesforce Cloud Native
                    </h3>

                     <?php $asds = 1; if( have_rows('content_services_copy') ) : while( have_rows('content_services_copy') ) : the_row();?>
                            <div class="contentService">
                                <h6>
                                    <?php the_sub_field('headingcontentService_copy'); ?>
                                </h6>
                                <p>
                                    <?php the_sub_field('headingcontentService_copy'); ?>
                                </p>
                                <?php $ids = 1;  if( have_rows('list_itemscontentService_copy') ) : while( have_rows('list_itemscontentService_copy') ) : the_row();?>
                                <ul>
                                    <li data-toggle="modal" data-target="#asds_<?php echo $ids; ?><?php echo $asds; ?>">
                                        <?php the_sub_field('itemcontentService_copy'); ?>
                                    </li>
                                </ul>
                                <!-- Modal -->
                                <div class="modal fade" id="asds_<?php echo $ids; ?><?php echo $asds; ?>" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                  <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                      <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">
                                            <?php the_sub_field('itemcontentService_copy'); ?>
                                        </h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                          <span aria-hidden="true">&times;</span>
                                        </button>
                                      </div>
                                      <div class="modal-body">
                                        <?php the_sub_field('content_popup_copy'); ?>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <?php $ids++; endwhile; else : endif; ?>
                            </div>
                    <?php $asds++; endwhile; else : endif; ?>

                </div>
            </div>
            <div class="servicessection-mail text-center">
                <h6>
                    For general inquiries email us at:
                </h6>
                <a href="mailto:contact@coalescence.us ">contact@coalescence.us </a>
            </div>
        </div>
    </div>
    <div class="ourpartners">
        <div class="container">
            <h2>Our Partners</h2>
            <div class="row">
                <img src="<?php echo get_template_directory_uri(); ?>/images/10.png">
                <img src="<?php echo get_template_directory_uri(); ?>/images/11.png">
                <img src="<?php echo get_template_directory_uri(); ?>/images/12.png">
            </div>
        </div>
    </div>
    <div class="form-cloud">
        

    </div>
    <footer>
        <div class="container">
            <div class="row">
                <div class="footer-num">
                    <a href="tel:972.836.7845" id="callUs">972.836.7845</a>
                        <p>
                        Copyright © 2020 Coalescence.
                    </p>
                </div>
                <div class="footer-logo">
                    <a href="">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/new/footer-logo.png">
                    </a>
                    
                </div>
                <div class="footer-join">
                    <a href="https://www.linkedin.com/company/coalescencecloud/about/">
                        <i class="fa fa-linkedin"></i>
                    </a>
                    
                    <h6>
                        Join our team
                    </h6>
                    <a href="mailto:careers@coalescence.us" id="mail">careers@coalescence.us</a>
                    
                </div>
            </div>
            <div class="footer-copy">
                    
                
                </div>
        </div>
    </footer>
</body>
    
    <script type="text/javascript">
            $('img#logoMain').click( function(e) {
                e.preventDefault();
                $('.mainmenunew').toggleClass('active');
            });
            $('.crosss').click( function(e) {
                e.preventDefault();
                $('.mainmenunew').removeClass('active');
            }) 
    </script>
</html>




