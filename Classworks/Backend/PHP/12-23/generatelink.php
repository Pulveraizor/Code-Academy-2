<?php
session_start();

$link = $_POST['link'];

$link = filter_var($link, FILTER_SANITIZE_URL);

if (empty($link)) {
    echo 'Please enter a URL';
    exit;
} else if (filter_var($link, FILTER_VALIDATE_URL) !== false) {

} else {
echo "$link is not a valid URL";
exit;
}

$obj = [uniqid() => $link];

file_put_contents('redirect.json', json_encode($obj));

$_GET['link'] = array_keys($obj);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <h3>Link generator 8000</h3>
    <div>
        <?php echo "Your new link for {$_POST['link']} is:"; ?>
    </div>
    <br>
    <strong>
        <a href="<?php echo "http://localhost/12-23/open.php?link={$_GET['link'][0]}"; ?>"><?php echo "http://localhost/12-23/open.php?link={$_GET['link'][0]}"; ?></a>
    </strong>
</body>
</html>