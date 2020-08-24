
var mensaje = ['Trabajamos <strong>Juntos</strong> para <br> prestarte un <strong> mejor servicio </strong>', 
               'Las <strong> transferencias </strong> más <br> <strong> rápidas </strong> del oeste.',
               '<strong>¡Estamos contigo!</strong> Tu dinero <br> en casa en <strong>menos de 2 horas.</strong>'];
var fondos = ['img/fondo1.png','img/fondo2.png','img/fondo3.png'];
var salto = 1;
var indicador = 'fondo';

document.getElementById('fondo1').style.background = '#69E1F3';
document.getElementById('center').style.display = 'none';

var estUsu = localStorage.getItem('usuario');
if(estUsu == 'unfind'){
    document.getElementById('usuExiste').style.display = 'block';
    document.getElementById('conExiste').style.display = 'block';  
    document.getElementById('usuario').style.border = '1px solid #b00020';  
    document.getElementById('passw').style.border = '1px solid #b00020';  
}

function borrar(){
    document.getElementById('fondo1').style.background = 'white';
    document.getElementById('fondo2').style.background = 'White';
    document.getElementById('fondo3').style.background = 'white';
}

function adelante(){
    if(salto<3){
        document.getElementById('container').style.backgroundImage = "url('" + fondos[salto]+ "')";
        document.getElementById('frase').innerHTML = mensaje[salto];
        salto++;
        let ind = indicador + salto;
        borrar();
        document.getElementById(ind).style.background = '#69E1F3';
    } else if(salto == 3){
        salto = 0;
        document.getElementById('container').style.backgroundImage = "url('" + fondos[salto]+ "')";
        document.getElementById('frase').innerHTML = mensaje[salto];
        salto++;
        let ind = indicador + salto;
        borrar();
        document.getElementById(ind).style.background = '#69E1F3';
    }
        
}

function atras(){
    if(salto>0){ 
        let ind = indicador + salto;
        borrar();
        document.getElementById(ind).style.background = '#69E1F3';
        salto--; 
        document.getElementById('container').style.backgroundImage = "url('" + fondos[salto]+ "')";   
        document.getElementById('frase').innerHTML = mensaje[salto];    
        console.log(salto);    
    } else if(salto == 0){
        salto = 2;
        document.getElementById('container').style.backgroundImage = "url('" + fondos[salto]+ "')";
        document.getElementById('frase').innerHTML = mensaje[salto];
        let ind = indicador + 3;
        borrar();
        document.getElementById(ind).style.background = '#69E1F3';
        console.log(salto);        
    }
}

var ingresar = document.getElementById('ingreso');
ingresar.addEventListener('click', function(){
    document.getElementById('respuesta').style.display = 'none';
   
});

var cerrModalInicio = document.getElementById('cerrarPes');
cerrModalInicio.addEventListener('click', function(){
    let modal = document.getElementById('center');
    modal.style.display = 'none';
    window.location.reload();
    //document.getElementById('container').style.filter= 'blur(0px)';
    //document.getElementById('container').setAttribute('class','enfocar');
});

var abriModalInicio = document.getElementById('mosModalIni');
abriModalInicio.addEventListener('click', function(){
    let modal = document.getElementById('center');
    modal.style.display = 'block';
    //document.getElementById('container').style.filter= 'blur(1px)';
    //document.getElementById('container').setAttribute('class','desemfocar');
});


function mostrarBoton(){
var inpCorreo = document.getElementById('correo');
var inpContrasena = document.getElementById('contrasena');
var boton = document.getElementById('ingreso');
document.getElementById('usuExiste').style.display = 'none';
document.getElementById('conExiste').style.display = 'none';
document.getElementById('usuario').style.border = 'none';  
    document.getElementById('passw').style.border = 'none';  
localStorage.clear();
   if(inpCorreo.value != '' && inpContrasena.value != ''){
       boton.disabled = false;
       boton.style.backgroundColor = '#7c4dff';
   } else {
       boton.disable = true;
   }
}

var recuperarCuenta = document.getElementById('recuperarContrasena');
recuperarCuenta.addEventListener('click', function(){
    document.getElementById('recContraseña').innerHTML = '';
    let container = '<div id="cerrarPes" onclick="cerrar();"> <p> </p> </div> <p id="fraseRecuUno"> Por favor ingresa tu correo electrónico </p> <div class="inpCorreoVer"> <input style="width: 80%; margin-top:-2%" placeholder="Enviar correo" onkeyup="botCorreo();"></div> <button type="button" id="envCorreo" class="botModIni" disabled style="background-color:#D4D8E8" onclick="verificado();"> Enviar correo</button> ';
    document.getElementById('recContraseña').innerHTML = container;
});

function cerrar(){
    document.getElementById('center').style.display = 'none';
    window.location.reload();
}

function botCorreo(){
    let boton = document.getElementById('envCorreo');
    boton.disabled = false;
    boton.style.backgroundColor = '#7C4DFF';
}

function verificado(){
    document.getElementById('recContraseña').innerHTML = '';
    let container = '<div id="cerrarPes" onclick="cerrar();"> <p> </p> </div> <p id="fraseRecuUno"> ¡Correo enviado!</p> <p class="mirarCorreo"> Hemos enviado un correo, si no lo encuentras en la bandeja de entrada, por favor revisa en spam </p> <button type="button" class="botModIni" onclick="cerrar();"> Aceptar</button>';
    document.getElementById('recContraseña').innerHTML = container;
}