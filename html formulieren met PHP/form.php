<?php
if (!empty($_POST)) {
    $someValue1 = $_POST['someValue1'];
    $operator = $_POST['door'];
    $someValue2 = $_POST['someValue2'];

    $result = match ($operator) {
        '+' => $someValue1 + $someValue2,
        '-' => $someValue1 - $someValue2,
        '*' => $someValue1 * $someValue2,
        '/' => $someValue2 == 0 ? 'Error: Division by zero!' : $someValue1 / $someValue2,
        '%' => $someValue1 % $someValue2,
        default => null,
    };
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
    <h1>PHP-Calculator</h1>
    <form action="" method="post">
        <label>Enter a number: <br><input type="number" name="someValue1" required /></label>
        <br>
        <label>Choose an operator: <br><select name="door">
                <option value="">Choose an operator</option>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">x</option>
                <option value="/">/</option>
                <option value="%">%</option>
            </select></label>
        <br>
        <label>Enter another number:<br> <input type="number" name="someValue2" required /></label>
        <br>
        <input type="submit" value="Calculate" />
    </form>
    <div class="result">
        <?php if (!empty($_POST["door"])) {
            echo $someValue1 . $operator . $someValue2 . " = " . $result;
        } else {
            echo "Please enter an operator and enter two numbers.";
        }?>
    </div>
</body>

</html>