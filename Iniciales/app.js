//preguntando nombre y apellido
var name = prompt ("¿Cuál es tu nombre y tu apellio?");
//obteniendo primera inicial
var firstInitial = name.slice(0,1);
//buscando posicion del segundo caracter
var secondInitialPosition = name.indexOf(" ")+1;
//obteniendo segunda inicial
var secondInitialPosition = name.slice(secondInitialPosition,secondInitialPosition+1);
//mostrando resultadp en la web
document.write("Tus iniciales son "+firstInitial.toUpperCase()+secondInitialPosition.toUpperCase());
