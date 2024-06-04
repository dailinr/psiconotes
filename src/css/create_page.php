<?php
// Obtener el texto escrito en el textarea
$text = $_POST['text'];

// Crear una nueva página dinámica
$pageContent = "<h1>Página Dinámica</h1><p>$text</p>";

// Guardar la página dinámica en un archivo
$file = fopen("pages/". uniqid(). ".html", "w");
fwrite($file, $pageContent);
fclose($file);

// Devolver la página dinámica creada
echo $pageContent;
?>