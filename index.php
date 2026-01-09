<?php
/**
 * Redireciona o tráfego para a pasta de build do Vite
 */
$request = $_SERVER['REQUEST_URI'];

// Caminho para a pasta pública do build
$public_path = __DIR__ . '/dist/public';

// Verifica se o arquivo solicitado existe na pasta dist/public
$file = $public_path . $request;

if (is_file($file)) {
    // Se for um arquivo real (imagem, css, js), serve o arquivo
    $mime = mime_content_type($file);
    header("Content-Type: $mime");
    readfile($file);
    exit;
}

// Caso contrário, serve o index.html (para rotas do React)
include($public_path . '/index.html');
?>
