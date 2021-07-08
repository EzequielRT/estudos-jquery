<?php
$nome = $_POST['nome'];
$senha = $_POST['senha'];

$array = array('status'=>'');

if($nome == 'Ezequiel' && $senha == '1234') {
    $array['status'] = 'ok';
}

echo json_encode($array);