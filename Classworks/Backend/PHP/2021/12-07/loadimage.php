<?php

define('UPLOAD_DIR', dirname(__FILE__) . '/upload');

if (isset($_GET['name'])) {
	$date = isset($_GET['date']) ? $_GET['date'] : date('Y-m-d');
	$date = str_replace('-', '/', $date);

	$file = sprintf('%s/%s/%s', UPLOAD_DIR, $date, $_GET['name']);

	if (is_file($file)) {
		header('Content-Type: ' . mime_content_type($file));
		header('Content-Length: ' . filesize($file));

		readfile($file);
	} else {
		http_response_code(404);
	}

	exit;
}