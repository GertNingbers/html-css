<?php
if (!empty($_POST)) {
    if (empty($_POST['someValue1'])) {
        $_POST['someValue1'] = 0;
    }
    $result = 'waarde ' . $_POST['someValue1'] . ' opgeteld met 1 = ' . ((int) $_POST['someValue1'] + 1);
} else {
    $result = null;
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>PHP-formulier</title>
    <link rel="stylesheet" href="formu.css?1">
</head>

<body>
    <h1>PHP-formulier</h1>
    <form action="" method="post">
        <label>getal1</label>
        <input type="number" name="someValue1" class="" placeholder="getal invoeren" />

        <br>
        <select name="door">
            <option value=+>+</option>
            <option value=->-</option>
            <option value=*>x</option>
            <option value= / >/</option>
            <option value=%>%</option>
        </select><br>

        <label>getal2</label>
        <input type="number" name="someValue2" class="" placeholder="getal invoeren" />
        <br>
        <label>reken knop</label>
        <input type="submit" value="reken"><br>
    </form>
    <div id="result">
        <?php echo $result; ?>
    </div>
</body>

</html>