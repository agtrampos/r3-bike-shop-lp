<?php
/**
 * Hostinger Bridge - Direciona o tráfego da public_html para dist/public
 */

$request = $_SERVER['REQUEST_URI'];
// Remove query strings para encontrar o arquivo real
$request_path = parse_url($request, PHP_URL_PATH);

// Caminho para a pasta pública do build (um nível acima de public_html)
$public_path = __DIR__ . '/../dist/public';

$file = $public_path . $request_path;

if ($request_path !== '/' && is_file($file)) {
    // Se for um arquivo real (imagem, css, js), serve o arquivo com o mime-type correto
    $mime = mime_content_type($file);
    
    // Correção para arquivos .js e .css que às vezes o mime_content_type erra
    if (str_ends_with($request_path, '.js')) $mime = 'application/javascript';
    if (str_ends_with($request_path, '.css')) $mime = 'text/css';
    
    header("Content-Type: $mime");
    readfile($file);
    exit;
}

// Para qualquer outra rota (ou a raiz), serve o index.html do Vite
if (is_file($public_path . '/index.html')) {
    include($public_path . '/index.html');
} else {
    echo "Erro: O build do site não foi encontrado em dist/public. Certifique-se de que o comando 'npm run build' foi executado.";
    http_response_code(404);
}
?>
