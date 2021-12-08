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
		<div class="card mt-5" >
			<div class="card-header">
				<h3 class="card-title">Kandidato informacija</h3>
			</div>
			<div class="row card-body">
				<div class="col-6">
				<img class="img-fluid img-thumbnail" src="http://localhost/12-07/loadimage.php?name=<?php echo $name. '.' .$ext; ?>" alt="image">
				</div>
				<div class="col-6">
					<div class="mt-5">
						<strong>Vardas: </strong><span><?php echo $_POST['name'];?></span>
					</div>
					<div>
						<strong>Pavardė: </strong><span><?php echo $_POST['surname'];?></span>
					</div>
					<div>
						<strong>Miestas: </strong><span><?php echo $_POST['city']; ?></span>
					</div>
					<hr>
					<div class="mt-2">
						<strong>Kalbos, kurias moku:</strong>
						<ul class="mx-3">
							<?php $checkboxes = $_POST['lang'];
							foreach ($checkboxes as $skill) {
								if ($skill) {
									echo "<li>$skill</li>";
								}
							} ?>
						</ul>
					</div>
					<hr>
					<div class="mt-2">
						<strong class="card-title">Daugiau apie mane:</strong>
						<p class="card-text"><?php echo $_POST['additional']; ?></p>
					</div>
				</div>
			</div>
			<div class="card-footer mt-4">
				<a href="index.html" class="card-link">Grizti</a>
				</div>
		</div>
	</div>
	
</body>
</html>