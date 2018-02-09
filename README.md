# Escaparate-virtual

Este escaparate virtual tiene la función de registro de usuarios mediante un formulario que será validado siguiendo unos patrones usando Javascript. 

El formulario en sí se ha creado a partir de ejemplos vistos en clase, sin mayor dificultad que la de delimitar correctamente los pattern de cada campo. Se ha añadido la característica del resaltado de errores en el formulario que consiste en que la página marcará en rojo los cuadros de texto en los que haya errores o lo escrito no sea válido.

El fichero de Javascript recoje tanto las funciones propias de la validación del formulario como las funciones que se encargan de manejar las cookies durande la ejecución de la aplicación. Se han hecho ligeros cambios dentro de cada función manejadoras de cookies para que se adaptasen al programa, como la recepción de los datos del usuario y la manera en la que se muestran dichos datos.

El funcionamiento de las cookies es básico: cuando el usuario haya introducido todos los datos requeridos en el formulario se le enviará a una nueva página en la que se mostrará un mensaje indicando que se ha registrado correctamente. Acto seguido se creará una una cookie con el nombre del usuario y su contraseña y en el momento de hacer login se comprobará en el listado de cookies ya existe una cookie para el usuario y la contraseña especificado, en ese caso creará otra cookie para dejar abierta la sesión para ese usuario.
