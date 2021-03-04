<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Fallout 4 Pip-Boy browser version</title>
    <link rel="icon" type="image/png" href="img/lolo-favicon.png" />
    <link rel="stylesheet" href="css/main.css">
</head>
<body>
<div class="screen">
    <div class="screen-reflection"></div>
    <?php include("header.php"); ?>
    <div class="cores-display">
        <!--core display : stat-status section------------------------------------------------------------------------->
        <section class="core-display core-display-active" id="stat-status-section">
            <div class="vault-boy-container">
                <img id="vault-boy-walking"
                     src="img/vault_boy_walking.gif" alt="a fallout vault boy walking">
            </div>
            <div class="health-gauge-container">
                <div class="health-gauge health-gauge-top"></div>
                <div class="health-gauge health-gauge-right-top"></div>
                <div class="health-gauge health-gauge-right-bottom"></div>
                <div class="health-gauge health-gauge-bottom"></div>
                <div class="health-gauge health-gauge-left-bottom"></div>
                <div class="health-gauge health-gauge-left-top"></div>
            </div>
            <div class="info-container">
                <div class="info-icon info-icon-large info-icon-brackets">
                    <img src="img/brackets.png" alt="brackets">
                </div>
                <div class="info-icon info-icon-thin info-icon-java-container">
                    <img src="img/java_logo.png" alt="java programming language logo">
                    <p>85</p>
                </div>
                <div class="info-icon info-icon-thin info info-icon-python-container">
                    <img src="img/python_logo.png" alt="python programming language logo">
                    <p>80</p>
                </div>
                <div class="info-icon info-icon-large info-icon-web">
                    <img src="img/web_application_logo.png" alt="web application icon">
                </div>
                <div class="info-icon info-icon-thin info-icon-spring">
                    <img src="img/spring_logo.png" alt="spring framework logo">
                    <p>70</p>
                </div>
                <div class="info-icon info-icon-large info-icon-engineering">
                    <img src="img/engineering.png" alt="a cog on a hand that symbolises engineering">
                </div>
                <div class="info-icon info-icon-thin info-icon-diagram">
                    <img src="img/diagram.png"
                         alt="a diagram icon that symbolises databases conception">
                    <p>65</p>
                </div>
                <div class="info-icon info-icon-thin info-icon-security">
                    <img src="img/security.png" alt="web security icon">
                    <p>60</p>
                </div>
            </div>
            <div class="identity-container">
                <p>Cyril BERTHOUT : Concepteur développeur d'applications</p>
            </div>
        </section>
        <!--core display : stat-special section-->
        <section class="core-display" id="stat-special-section">
            <p>test js STAT SPECIAL</p>
        </section>
        <!--core display : stat-perks section-->
        <section class="core-display" id="stat-perks-section">
            <p>test js STAT PERKS</p>
        </section>
        <!--core display : exp-jobs section-->
        <section class="core-display" id="exp-jobs-section">
            <p>test js EXP JOBS</p>
        </section>
        <!--core display : exp-studies section-->
        <section class="core-display" id="exp-studies-section">
            <p>test js EXP STUDIES</p>
        </section>
        <!--core display : exp-skills section-->
        <section class="core-display" id="exp-skills-section">
            <p>test js EXP SKILLS</p>
        </section>
        <!--core display : data section-->
        <section class="core-display" id="data-section">
            <p>test js DATA</p>
        </section>
        <!--core display : map section-->
        <section class="core-display" id="map-section">
            <p>test js MAP</p>
        </section>
        <!--core display : color section-->
        <section class="core-display" id="color-section">
            <p>test js COLOR</p>
        </section>
    </div>
    <?php include("bottom.php"); ?>
</div>
<script src="js/tabs.js"></script>
</body>
</html>

