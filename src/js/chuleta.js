'use strict'; //evita errores

console.log('>> Ready :)');

//FORMA DE TRABAJAR CON JAVA SCRIPT

//1º traer elemento de html a js con querySelector
//2º modificar elemento desde js: innerHTML = (sustituye lo que tengo), += (a lo que tengo, añade)
//3º mostrar/ocultar clases con classList (add, remove, toggle)
//4º escuchar al usuario: eventos con addEventListener (click, input, keyup)

//orden: constantes, variables, funciones, funciones manejadoras, eventos


//el evento de clic se lo pones a la lista (ev.currentTarget) pero tienes que preguntar a quien se le ha dado clic (ev.target)

//ev.preventDefault() -> elimina el comportamiento por defecto de un formulario


//CONDICIONALES con if: booleanos (true, false), ===, !==, >, <, && (and: se cumplen todas las condiciones), || (or: se cumple,al menos, una condicion)

//if/else


//las imagenes se colocan como variables: const img = "url";


//interpolar: `My name es ${name} ${surname}`


//parseInt es una funcion para convertir un string en un numero, ya que todo lo que viene de un input es un string


//FUNCIONES

//funciones clasicas: 
    //1º declarar funcion: function nombreFuncion () {codigo que ejecuta la funcion}
    //2º llamar a la funcion: nombreFuncion()

//funciones arrow: const nombreFuncion = () => {codigo que ejecuta la funcion}
    //1 solo parametro: sin parentesis
    //1 sola sentencia: sin llaves

//funciones con parametros: lo que necesito que utilice la funcion 

//funciones con retorno: añado un return para poder utilizarlo fuera de la funcion

//funciones manejadoras de eventos (handle): btn.addEventListener ("click", handleClick). y arriba tendriamos que definir la funcion handleClick


//OBJETOS: const persona = {nombre: "Mari", edad: 25, ciudad: "Madrid",}


//ARRAYS (listados de elementos): const lista = ["Sonia", "Laura", "Marina"]
    //acceder a un elemento del array: lista [2] (la posicion del array siempre empieza en 0)
    //añadir elemento al array: lista [4] = "Sara"
    //modificar elemento del array: lista [1] = "Yolanda"
    //length: longitud del array

//BUCLES
    //bucles clasicos: for (let i=0; i<10; i++) -> cuando empieza, cuando acaba, como avanza (i++ es de 1 en 1)
    //bucles for...of: for (const mascota of listaMascotas)
    //bucles forEach: listaMascotas.forEach((mascota) => {codigo}) -> es otra sintaxis (recorre cada elemento del array)


//METODOS DE LOS ARRAYS
    //insertar valores al final de un array: listaMascotas.push({objeto a añadir})
    //insertar valores al inicio de un array: listaMascotas.unshift({objeto a añadir})
    //eliminar elementos de un array: 
        //listaMascotas.shift() -> elimina el primer elemento
        //listaMascotas.pop() -> elimina el ultimo elemento
        //listaMascotas.splice() -> elimina elemento especifico
    //slice y splice
        //slice: me quedo con una parte del listado, por lo que devuelve una copia de una parte del array, necesito una constante: 
            //const listaMascotasCopia = listaMascotas.slice(pos inicial, pos final) nota: la posicion final no se incluye
        //splice: me quedo con una parte del array, pero si que se modifica el array, ya que cambia el contenido, eliminando o añadiendo:
            //listaMascotas.splice(inicio, cantidad, nuevo elemento):
            //listaMascotas.splice(3, 1) -> empiezo a eliminar por la posicion 3 y quiero eliminar 1 elemento, si no quiero añadir nada se queda asi


//indexOf: saber si un elemento esta en la lista o no:
    //console.log(lista.indexOf("Azul")) ->devuelve 0 (el azul se encuentra en la posicion 0)
    //console.log(lista.indexOf("Morado")) ->devuelve -1 (el morado no se encuentra en la lista)


//mayusculas: toUpperCase()
//minusculas: toLowerCase()


//METODOS FUNCIONALES DE LOS ARRAYS

    //filter (devuelve un nuevo array): const listCursosIntermedios =  cursos.filter((curso) => curso.nivel === "Intermedio")
        //problema: si hay un curso que en vez de "Intermedio" pone "Curso nivel intermedio", ya no me lo va a filtrar, porque no es literal lo que yo le he pedido
        //solucion: const listCursosIntermedios = cursos.filter ((curso) => curso.nivel.includes("Intermedio"))

    //map (devuelve un nuevo array): const titulosMayuscula = cursos.map(curso => curso.titulo.toUpperCase())

    //find: se puede hacer con filter, pero devuelve un listado, si solo quiero que me devuelva el primer elemento, uso find
        //const listCursosIntermedios = cursos.find(curso => curso.nivel.includes("Intermedio"))

    //nota: si filter o map se encuentran tras un bucleo for no hace falta volver a construir el objeto, sin embargo, si estan fuera, hay que construir el objeto de nuevo

    //nota: includes diferencia entre mayusculas y minusculas -> toLowerCase()
    //const listCursosIntermedios = cursos.filter ((curso) => curso.nivel.toLowerCase().includes("Intermedio"))


//PETICIONES AL SERVIDOR (APIS)

//front (lado cliente) y back (lado servidor) se pasan info por las APIS mediante un fetch
//la info viaja a traves del servidor mediante una solicitud desde el front (fetch)
    //1. conocer url del servidor
    //2. solicitud a la url (fetch) -> asincrona -> promesas
    //3. se devuelve la info en formato json

//hacer un fetch
    //fetch("url de mi API")
        //.then(response => response.json())
        //.then(data => {console.log(data)})
    //nota: usar un .catch(error) para detectar el error en caso de que me equivoque al poner la url

//una vez tengo los datos en mi proyecto (fetch) ya puedo trabajar con ellos (pintar, filtrar, agregar...)
//la unica manera de asegurarme de que una funcion se ejecuta cuando esten los datos, es llamarla dentro del fetch

//PINTAR LISTADO
//1. crear ul en html y darle clase de js
//2. traer ul a js con querySelector
//3. crear funcion -> pintar
    //limpiar listado: innerHTML=""
    //recorrer listado: bucle for
    //pintar elemento a elemento

//LOCAL STORAGE
//si hacemos peticiones constantes al servidor, este puede sentir que le estamos atacando y nos banea la IP, por lo que necesitamos utilizar local storage
//local storage es una manera de almacenar info en local en nuestro navegador
//todo lo que vemos que el usuario puede volver a utilizar lo guardamos en el local storage

//almacenar info en local storage
//localStorage.setItem("nombreAlmacenar", "valorAlmacenar")
//localStorage.setItem("gatitos", JSON.stringify(gatitos)) 
//nota: meterlo dentro del fetch, bajo el llamamiento a la funcion, para asegurarnos de que se guarda el listado en el local storage

//obtener info del local storage
//localStorage.getItem("nombredelavariable")
//localStorage.getItem("gatitos")

//si el listado esta almacenado, cogelo del local storage y, si no, pideselo al servidor
//if(localStorage.getItem("gatitos") === null) {
    //.then(response => response.json())
    //.then(data => {
        //gatitos = data.results;
        //renderGatitos();
        //localStorage.setItem("gatitos", JSON.stringify(gatitos)); GUARDAR DATOS EN LS -> JSON.STRINGIFY (CONVERTIR EN TEXTO PLANO)
    //});
//else {
    //gatitos = JSON.parse(localStorage.getItem("gatitos")); OBTENER DATOS DEL LS -> JSON.PARSE (DESCONVERTIR)
    //renderGatitos();
//}

//enviar datos al servidor: metodo POST
//fetch (url, {
    //method: "POST",
    //body: JSON.stringify(newGatito),
    //headers: {
        //"Content-Type": "application/json"
    //}
//})
