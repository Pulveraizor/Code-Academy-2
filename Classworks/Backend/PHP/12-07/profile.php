<?php

require_once('upload.php');

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

</head>
<body>
	<div class="container">
		<div class="card mt-5" style="width: 35rem">
			<div class="card-header">
				<h3 class="card-title">Kandidatas: <?php echo $_POST['name'] . ' ' . $_POST['surname']; ?></h3>
			</div>
			<div class="card-body">
				<img class="card-img-top" src="http://localhost/12-07/loadimage.php?name=<?php echo $name. '.' .$ext; ?>" alt="image">
				<div class="row mt-5">
				<h5>Miestas: <?php echo $_POST['city'] ?></h4>
				</div>
				<hr>
				<div class="row mt-2 mx-3">
				<h4>Mano Kalbos</h3>
				<ul>
					<?php $checkboxes = $_POST['lang'];
					foreach ($checkboxes as $skill) {
						if ($skill) {
							echo "<li>$skill</li>";
						}
					} ?>
				</ul>
				</div>
				<hr>
				<div class="row mt-2">
				<h5 class="card-title">Daugiau apie mane:</h3>
				<p class="card-text"><?php echo $_POST['additional'] ?></p>
				</div>
			</div>
			<div class="card-footer mt-4">
				<a href="index.html" class="card-link">Grizti</a>
				</div>
		</div>
	</div>
	
</body>
</html>