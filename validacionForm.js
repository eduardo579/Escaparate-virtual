window.onload = iniciar;

//lo que va a hacer la función iniciar
function iniciar(){
	//método validar en el evento
	document.getElementById("enviar").addEventListener('click',validar,false);

	//verCookies();
}

function validaNombre(){
	var elemento = document.getElementById("nombre");		//Se recoge lo que ha escrito el usuario
	//Si la validación de html5 no es correcta:
	if (!elemento.checkValidity()){
		//Vamos a mostrar nuestros propios mensajes de error y no los de html5; Mirar en W3schools los métodos
		//Si no hay nada dentro

		if (elemento.validity.valueMissing){
			//creamos error2 y le paso el elemento y un mensaje
			error2(elemento, "Escribe un nombre para crear tu cuenta");
		}
		//creamos otro mensaje de error, por si no coincide con el patrón
		if (elemento.validity.patternMismatch){
			error2(elemento, "El nombre debe tener entre 2 y 15 letras");
		}

		return false;
	}
	return true;
}

function validaApellido(){
	var elemento = document.getElementById("apellidos");	//Se recoge lo que ha escrito el usuario
	//Si la validación de html5 no es correcta:
	if (!elemento.checkValidity()){
		//Vamos a mostrar nuestros propios mensajes de error y no los de html5; Mirar en W3schools los métodos
		//Si no hay nada dentro

		if (elemento.validity.valueMissing){
			//creamos error2 y le paso el elemento y un mensaje
			error2(elemento, "Escribe un apellido para crear tu cuenta");
		}
		//creamos otro mensaje de error, por si no coincide con el patrón
		if (elemento.validity.patternMismatch){
			error2(elemento, "El apellido debe tener entre 3 y 20 letras");
		}

		return false;
	}
	return true;
}

function validarEmail() {
	var elemento = document.getElementById("email");	//Se recoge lo que ha escrito el usuario

	if (!elemento.checkValidity()){
		//Vamos a crear errores más concretos aquí también
		//En este caso si no hay ningún valor

		if (elemento.validity.valueMissing){
			error2(elemento, "Escribe tu E-Mail");
		}
		//Si el valor está por debajo de 18
		if (elemento.validity.rangeUnderflow){
			error2(elemento, "El valor debe ser de mínimo 11");
		}

		if (elemento.validity.patternMismatch){
			error2(elemento, "Escribe correctamente el E-Mail (texto@gmail/hotmail.com/es)");
		}

		return false;
	}
	return true;
	
}

//Misma estructura anterior
function validaPasswd(){
	var elemento = document.getElementById("contrasena");	//Se recoge lo que ha escrito el usuario
	//Si la validación de html5 no es correcta:
	if (!elemento.checkValidity()){
		//Vamos a crear errores más concretos aquí también
		//En este caso si no hay ningún valor

		if (elemento.validity.valueMissing){
			error2(elemento, "Escribe tu contraseña");
		}
		
		if (elemento.validity.rangeUnderflow){
			error2(elemento, "El valor debe ser de mínimo 8");
		}

		if (elemento.validity.patternMismatch){
			error2(elemento, "Adecúate al formato de la contraseña (ocho caracteres, letra minúscula, una mayúscula, un número y un símbolo)");
		}

		return false;
	}
	return true;
}

function validaConfPasswd(){
	var elemento  = document.getElementById("contrasena");			//Se recoge lo que ha escrito el usuario
	var elemento2 = document.getElementById("contrasenaConf");		//Se recoge lo que ha escrito el usuario

	var elem  = document.getElementById("contrasena").value;		//Se guarda el valor para la comprobación
	var elem1 = document.getElementById("contrasenaConf").value;	//Se guarda el valor para la comprobación
	//Si la validación de html5 no es correcta:
	if (!elemento2.checkValidity()){
		//Vamos a crear errores más concretos aquí también
		//En este caso si no hay ningún valor

		if (elemento2.validity.valueMissing){
			error2(elemento2, "Escribe tu contraseña");
		}

		if (elem != elem1)
		{
			error2(elemento2, "La contraseña no coincide");
		}

		return false;
	}
	return true;

}

//Misma estructura anterior
function validaDireccion(){
	var elemento = document.getElementById("direccion");		//Se recoge lo que ha escrito el usuario
	//Si la validación de html5 no es correcta:
	if (!elemento.checkValidity()){
		//Vamos a crear errores más concretos aquí también
		//En este caso si no hay ningún valor

		if (elemento.validity.valueMissing){
			error2(elemento, "Escribe tu dirección de domicilio");
		}

		if (elemento.validity.patternMismatch){
			error2(elemento, "Adecúate al formato de la dirección (calle/avenida nombre portal)");
		}

		return false;
	}
	return true;
}

function hayDireccion(){	//Función que mira si se ha escrito algo en el input de Dirección, si hay algo devolverá true, sino devolverá false
	var elemento = document.getElementById("direccion").value;

	if (elemento == "")
	{
		return false;
	}

	else
	{
		return true;
	}
}

function hayPais(){		//Función que mira si se ha seleccionado una opción válida, si es así devolverá true, sino devolverá false
	var elemento = document.getElementById("pais").value;

	if (elemento == 0)	//0 es la opción "Selecciona una opción" de la lista, no válida
	{
		return false;
	}

	else
	{
		return true;
	}
}

function showTarjeta(){		//Función que muestra el input de la tarjeta de crédito si hay una dirección y un país válido
	if (hayDireccion() == true && hayPais() == true)
	{
		document.getElementById("nombreCampo").innerHTML = "Tarjeta de crédito:";
		document.getElementById("tarjetaTR").innerHTML = "<input type=\"text\" name=\"tarjeta\" id=\"tarjeta\" pattern=\"^4[0-9]{3}-[0-9]{4}-[0-9]{4}-[0-9]{4}\" />";
	}

	else 	//Sino lo deja en blanco como estaba
	{
		document.getElementById("nombreCampo").innerHTML = "";
		document.getElementById("tarjetaTR").innerHTML = "";
	}
}

//Misma estructura anterior
function validaTarjeta(){
	var elemento = document.getElementById("tarjeta");		//Se recoge lo que ha escrito el usuario
	//Si la validación de html5 no es correcta:
	if (!elemento.checkValidity()){
		//Vamos a crear errores más concretos aquí también
		//En este caso si no hay ningún valor

		if (elemento.validity.valueMissing){
			error2(elemento, "Escribe tu tarjeta de crédito");
		}

		if (elemento.validity.patternMismatch){
			error2(elemento, "Adecúate al formato de la tarjeta de crédito (4 grupos de 4 nºs separados con -, el primer nº es un 4)");
		}

		return false;
	}
	return true;
}



//creamos la función validar con la estructura similar a la del JS anterior
function validar(e){
	borrarError(); //Llamamos a borrarError para que nos quite las casillas en rojo que ya estén bien
	if (validaNombre() && validaApellido() && validarEmail() && validaPasswd() && validaConfPasswd() && validaDireccion() && validaTarjeta() &&
		confirm("Pulsa aceptar si deseas enviar el formulario"))
	{
		return true;
		var elemento = document.getElementById("nombre");
		var elemento2 = document.getElementById("contrasena");
		setCookie("Nombre", elemento, 365);
		setCookie("Contraseña", elemento2, 365);
		verCookies();
		alert("Te has registrado correctamente.");
	}

	else
	{
		//evitamos que se envíe el formulario
		e.preventDefault();
		return false;
	}
}

//Para modificar los mensaje de error y que aparezca un cuadrado alrededor
function error(elemento){
	//Mostramos el mensaje de error que corresponda con la función predefinida de validación en caso de error
	//de cada elemento.

	document.getElementById("mensajeError").innerHTML = elemento.validationMessage();
	//Aplicamos la clase error al elemento en cuestión.
	elemento.className = "error";
	//Para que además de mostrar el mensaje de error nos marque la casilla
	elemento.focus();
}

//Ahora creamos la función error2 que recibe un elemento y un mensaje
function error2(elemento, mensaje){
	//En mensajeError metemos el mensaje que pasamos como parámetro
	document.getElementById("mensajeError").innerHTML = mensaje;
	//Ponemos la clase error y el focus también
	elemento.className = "error";
	elemento.focus();
}

//Eliminar el error si hemos completado todo correctamente
function borrarError(){
	var formulario = document.forms[0]; //cogemos el primer formulario
	//formulario.elements devuelve todos los input
	for(var i = 0; i < formulario.elements.length; i++){
		//queremos que para cada uno de los elementos nos borre la clase
		formulario.elements[i].className = "";
	}
}

	//Funciones de cookies

		function verCookies(){
			var mostrar = document.cookie;
			alert(mostrar);
			//document.getElementById("cookie").innerHTML = mostrar;
		}

		//Para crear o modificar una cookie:
		function crearModifCookie(){
			//solicitamos al usuario los valores que necesita para crear o modificar la cookie:
			var nombre = prompt("Indica el nombre de la cookie: ");
			var valor = prompt("Escribe su valor: ");
			//como es un número lo parseamos a entero
			var expiracion = parseInt(prompt("Escribe el número de días para que expire la cookie: "));

			//Ahora solo tenemos que llamar a setCookie pasándole estos valores:
			setCookie(nombre, valor, expiracion);
			//Hacemos un vercookies para ver como está quedando al crearla o modificarla:
			verCookies();
		}

		//Ahora vemos el de leercookies:
		function leerCookie(){
			var nombre = prompt("Escribe el nombre de la cookie que quieres consultar: ");
			//Mostramos el resultado con getcookie:
			alert(getCookie(nombre));
			//Sería lo mismo hacer: var resultado = getCookie(nombre); alert(resultado)
			//getcookie nos devuelve la cadena que va dentro del if o vacío.
		}

		//Para borrar la cookie:
		function borrarCookie(){
			var elemento  = document.getElementById("nombre");
			deleteCookie(elemento);
		}
		//Hasta aquí todo lo que está adaptado

		//-----------------------------------------------------------------------------------------
		//Esto lo podemos guardar en un archivo .js externo y utilizarlo siempre que queramos
		//Vamos a crear funciones para utilizarlas siempre en cookies
		//Le parasamos nombre, valor y fecha de expiración (en días)
		function setCookie(nombre, valor, expiracion){
			//Para no meter la fecha con el formato largo, metemos el número de días que queramos:
			var d = new Date(); //fecha actual
			//getTime: fecha y hora actuales; y a esta le sumamos los días de expiración (en milisegundos: 1 segundo = 1000 milisegundos)
			d.setTime(d.getTime() + expiracion*24*60*60*1000);
			//modidicamos la expiración, metiendo en una variable la fecha en formato UTC
			var expiracion = "expires="+d.toUTCString();
			document.cookie = nombre + "=" + valor + ";" + expiracion + ";path=/"; //creamos la cookie con dos valores, nombre y expiracion, y podemos añadir también la ruta (path)
		}

		//Hacemos lo mismo con una función para obtener datos de una cookie
		function getCookie(nombre){
			var nom = nombre + "=";
			var array = document.cookie.split(";"); //Separa la cadena por ; esto es guarda cada nombre/valor en cada coordenada
			//Recorremos el array
			for (var i = 0; i < array.length; i++){
				var c = array[i]; //cogemos cada coordenada de array
				//Extraemos el primer valor de la cadena c (para ver si es un espacio o no)
				while (c.charAt(0)==" ")
				{
					c = c.substring(1); //Si es un espacio;
				}
				//Nos queda extraer la parte del final
				//comprobamos si en la primera posición de c, se encuentra lo que tenemos guardado en nombre
				if (c.indexOf(nombre)==0)
				{
					return c.substring(nom.length, c.length); //Para que nos muestre el valor solo, quitando el nombre (posición inicial, posición final) 
				}
			}
			//Si no hemos llegado hasta aquí es que no hemos encontrado ninguna cookie con el nombre que le hemos pasado, luego devolvemos vacío (para que la función haga algo)
			return "";
		}

		//Ahora vamos a crear una función para borrar una cookie (le pasamos un nombre por parámetro)
		function deleteCookie(){
			//modificamos su valor
			var elemento  = getCookie("Nombre");
			setCookie(elemento,"",0); //Valor será nada; Ponemos una fecha pasada con un 0, porque 0 por una fecha de setcookie asignará la fecha más pequeña
		}

		function resetCookie(nombre){
			deleteCookie(nombre);
			cont = 0;
			setCookie(nombre, cont, 365);
			verCookies();
		}