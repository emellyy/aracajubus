<?php
// Usuário e senha fixos para o exemplo
$valid_username = 'admin';
$valid_password = '12345';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    if ($username === $valid_username && $password === $valid_password) {
        echo "<h2>Login bem-sucedido! Bem-vindo, $username.</h2>";
    } else {
        echo "<h2>Nome de usuário ou senha incorretos.</h2>";
    }
}
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tela de Login</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="login-container">
        <h2>Login</h2>
        <form action="login.php" method="POST">
            <div class="input-box">
                <input type="text" name="username" required>
                <label>Usuário</label>
            </div>
            <div class="input-box">
                <input type="password" name="password" required>
                <label>Senha</label>
            </div>
            <button type="submit">Entrar</button>
        </form>
    </div>
</body>
</html>
