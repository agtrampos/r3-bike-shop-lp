<?php
/**
 * Hostinger Bridge - Direciona o tráfego da raiz para dist/public
 */

$request = $_SERVER['REQUEST_URI'];
$request_path = parse_url($request, PHP_URL_PATH);

// Agora o caminho é direto, pois o index.php estará na mesma pasta que a 'dist'
$public_path = __DIR__ . '/dist/public';

$file = $public_path . $request_path;

if ($request_path !== '/' && is_file($file)) {
    $mime = mime_content_type($file);
    if (str_ends_with($request_path, '.js')) $mime = 'application/javascript';
    if (str_ends_with($request_path, '.css')) $mime = 'text/css';
    
    header("Content-Type: $mime");
    readfile($file);
    exit;
}

if (is_file($public_path . '/index.html')) {
    include($public_path . '/index.html');
} else {
    echo "Site em manutenção. (Build não encontrado)";
    http_response_code(404);
}
?>
