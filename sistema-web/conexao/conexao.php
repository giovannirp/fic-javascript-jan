<?php
    $hostname = "localhost";
    $bancodedados = "se_bank";
    $usuario = "root";
    $senha = "";

    $mysqli = new mysqli($hostname, $usuario, $senha, $bancodedados);

    // se existir um erro, vai mostrar nessa condição
    // connect_erro, significa conect error Number (irá retornar o numero do erro)
    // if ($mysqli->connect_error) {
    //     echo "Falha ao conectar";
    // } else {
    //     echo "Conectado ao Banco de dados";
    // }
?>