<?php
$correo = $_POST['correo'];
$pasword = $_POST['contrasena'];
if(($correo=='cristianSanchez@gmail.com')&&($pasword='1234')){
    echo "<script language='javascript' type='text/javascript'>	 localStorage.setItem('usuario','find'); window.location='index.html';</script>";
} else{
    echo "<script language='javascript' type='text/javascript'>	 localStorage.setItem('usuario','unfind'); window.location='index.html' </script>";
}

?>