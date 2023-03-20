let nombre, clave, nombreusuario, contrasena;

nombreusuario = "gp";
contrasena = 1234;

nombre = prompt("Ingresa tu nombre");
clave = prompt("Ingresa tu clave");

if (nombre === nombreusuario) {
  if (clave == contrasena) {
    alert("ingresaste");
    document.write("Bienvenido");
  } if (clave != contrasena) {
    alert(" Te quedan 3 intentos");
    clave = prompt("Ingresa tu clave");
  } if (clave != contrasena) {
    alert("Te quedan 2 intentos");
    clave = prompt("Ingresa tu clave");
  } if (clave != contrasena) {
    alert("Te queda 1 intento")
    clave = prompt("Ingresa tu clave")}
    else {}
}
else {
    document.write ("no puedes ingresar")
}

// if (nombre === nombreusuario && clave == contrasena) {
//   alert("tu saldo es: US 1000");
//   document.write("Bienvenido");
// } else if (nombre === nombreusuario && clave != contrasena) {
//   alert("te quedan 3 intentos");
//   clave = prompt("Ingresa tu clave");
// } else if (nombre === nombreusuario && clave != contrasena) {
//   alert("Te quedan 2 intentos");
//   clave = prompt("Ingresa tu clave");
// } else (clave != contrasena)
// alert(" Te queda 1 intento");
// clave = prompt("Ingresa tu clave");
// alert("Cuenta bloqueada, por favor comunicarse al 789456");
