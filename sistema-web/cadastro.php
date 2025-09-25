<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7" crossorigin="anonymous">
</head>
<body>
    <div class="container">
        <?php 
            include("nav.php");
        ?>
        <h1 class="text-success mt-3 mb-2">Cadastro</h1>
        <form action="recebe-cadastro.php" method="post">
            <div class="form-group mb-3">
                <label for="nome">Nome</label>
                <input type="text" name="nome" id="nome" class="form-control">
            </div>
            <div class="form-group mb-3">
                <label for="email">Email</label>
                <input type="text" name="email" id="email" class="form-control">
            </div>
            <div class="form-group mb-3">
                <label for="cidade">Cidade</label>
                <input type="text" name="cidade" id="cidade" class="form-control">
            </div>
            <div class="form-group mb-3">
                <button class="btn btn-primary mt-2">Enviar</button>
            </div>
        </form>

    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js" integrity="sha384-k6d4wzSIapyDyv1kpU366/PK5hCdSbCRGRCMv+eplOQJWyd1fbcAu9OCUj5zNLiq" crossorigin="anonymous"></script>
</body>
</html>