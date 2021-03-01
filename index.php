<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Fallout 4 Pip-Boy browser version</title>
    <link rel="stylesheet" href="css/main.css">
</head>
<body>
<div class="screen">
    <div class="screen-reflection"></div>
    <?php include("header.php"); ?>
    <div class="sections">
        <!--core display : stat-status section------------------------------------------------------------------------->
        <section class="section section-active" id="stat-status-section">
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
        <!--core display : stat-status section-->
    <!--    <section class="section" id="inv-section">-->
    <!--        <p>test js</p>-->
    <!--    </section>-->
    </div>
    <?php include("bottom.php"); ?>
</div>
<script src="tabs.js"></script>
</body>
</html>

