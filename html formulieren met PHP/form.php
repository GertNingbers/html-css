<?php
if (!empty($_POST)) {
    $getal1 = $_POST['someValue1'];
    $operator = $_POST['door'];
    $getal2 = $_POST['someValue2'];
    $result = match ($operator) {
        '+' => $getal1 + $getal2,
        '-' => $getal1 - $getal2,
        '*' => $getal1 * $getal2,
        '/' => $getal2 == 0 ? 'Error: Je kan niet door nul delen!' : $getal1 / $getal2,
        '%' => $getal1 % $getal2,
        default => null,
    };
} else {
    $result = null;
}
?>

<!DOCTYPE html>
<html lang="nl">

<head>
    <meta charset="UTF-8">
    <title>PHP-formulier</title>
    <link rel="stylesheet" href="formu.css?1">
</head>

<body>
    <h1>PHP-Rekenmachine</h1>
    <form action="" method="post">
        <label>Zet een getal: <br><input type="number" name="someValue1" required /></label>
        <br>
        <label>Kies een operator: <br><select name="door" required>
                <option value="">Kies een operator</option>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">x</option>
                <option value="/">/</option>
                <option value="%">%</option>
            </select></label>
        <br>
        <label>Zet nog een getal:<br> <input type="number" name="someValue2" required /></label>
        <br>
        <input type="submit" value="Bereken" />
    </form>
    <div class="result">
        <?php if (!empty($_POST["door"])) {
            echo $getal1 . $operator . $getal2 . " = " . $result;
        } else {
            echo "Voer een operator en twee getallen in, alstublieft.";
        }?>
    </div>
</body>

</html>