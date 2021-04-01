<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Fallout 4 Pip-Boy browser version</title>
    <link rel="icon" type="image/png" href="img/lolo-favicon.png"/>
    <link rel="stylesheet" href="sass/main.css">
</head>
<body>
<div class="container">
    <div class="overlay-container">
        <img id="overlay" src="img/pip-boy_overlay.png" />
    </div>
    <div class="screen">
        <div class="screen-reflection"></div>
        <?php include("header.php"); ?>
        <div class="cores-display">
            <!--core display : stat-status section------------------------------------------------------------------------->
            <?php include("stat_status.php"); ?>
            <!--core display : stat-special section------------------------------------------------------------------------>
            <?php include("stat_special.php"); ?>
            <!--core display : stat-perks section-------------------------------------------------------------------------->
            <?php include("stat_perk.php"); ?>
            <!--core display : exp-jobs section---------------------------------------------------------------------------->
            <?php include("exp_jobs.php"); ?>
            <!--core display : exp-studies section------------------------------------------------------------------------->
            <?php include("exp_studies.php"); ?>
            <!--core display : exp-skills section-------------------------------------------------------------------------->
            <?php include("exp_skills.php"); ?>
            <!--core display : data section-------------------------------------------------------------------------------->
            <?php include("data.php"); ?>
            <!--core display : map section--------------------------------------------------------------------------------->
            <?php include("map.php"); ?>
            <!--core display : color section------------------------------------------------------------------------------->
            <?php include("color.php"); ?>
        </div>
        <?php include("bottom.php"); ?>
    </div>
</div>
<script src="js/tabs.js"></script>
<script src="js/menu.js"></script>
<script src="js/color.js"></script>
</body>
</html>

