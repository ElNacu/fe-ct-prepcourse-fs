/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0]
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   var ultimo_elemento=array.length-1;
   return array[ultimo_elemento]
}console.log(devolverUltimoElemento(["a","b","hola"]))

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   var long=array.length
   return long
}console.log(obtenerLargoDelArray([5,6,9,7,8]))

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var arregloN=[]=array.map(a => a+=1)
   return arregloN
}console.log(incrementarPorUno([15,6,88,90]));//console.log(incrementarPorUno([]))

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento)
   return array
}console.log(agregarItemAlFinalDelArray([10, 10, 16, 12], 10))

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento)
   return array
}console.log(agregarItemAlComienzoDelArray([10, 10, 16, 12], 10))

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var cadenaStr = palabras.join(" ")
   return cadenaStr
}console.log(dePalabrasAFrase(['Henry', 'JavaScript', 'Class']))

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   var verif=array.includes(elemento)
   if (verif) return true
   else return false
}console.log(arrayContiene([97, 100, 80, 55, 72, 94], 80)) 

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var resultado=0;
   arrayOfNums.forEach(a => {resultado += a})
   return resultado
}console.log(agregarNumeros([10, 10, 16, 8 ,-4]))

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var suma = 0
   for(let i=0; i<resultadosTest.length; i++){
      suma+=resultadosTest[i]
   }
   var promedio = suma/resultadosTest.length
   return promedio
}console.log(promedioResultadosTest([10, 10, 16, 12]))/*!for*/

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var numeroMayorGuardado = 0
   for(var c=0; c<arrayOfNums.length; c++){
      if (arrayOfNums[c]>arrayOfNums[c+1] && numeroMayorGuardado< arrayOfNums[c]){
         numeroMayorGuardado=arrayOfNums[c];
      }
   }
   return numeroMayorGuardado
}console.log(numeroMasGrande([10, 10, 16, 12]))/*!for*/

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   var multiplicacion=1
   for(var c=0; c<arguments.length; c++){
      multiplicacion*=arguments[c]
   }
   if (arguments.length==0) {
      multiplicacion=0; 
   }
   return multiplicacion
}console.log(multiplicarArgumentos())

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var contador=0
   array.forEach(a=>{
      if (a>18) contador+=1
   })
   return contador
}console.log(cuentoElementos([10, 10, 18, 21]))

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if (numeroDeDia==1 || numeroDeDia==7) return "Es fin de semana"
   else return "Es dia laboral"
}console.log(diaDeLaSemana(1))

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   var str=num.toString()
   var list=str.split("")
   if (list[0]=="9") return true
   else return false
}console.log(empiezaConNueve(59832))

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   var comprobador = false
   array.forEach(a => {
      if (a===array[0]) comprobador=true;
      else comprobador=false
   })
   return comprobador
}console.log(todosIguales([20, 20, 20, 20]))

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var nuevoArray=[]
   for(let a=0; a<array.length; a++){
      if (array[a]=="Enero" || array[a]=="Marzo" || array[a]=="Noviembre"){
         nuevoArray.push(array[a])
      }
   }
   if (nuevoArray.includes("Enero")==true && nuevoArray.includes("Marzo")==true && nuevoArray.includes("Noviembre")==true){
      return nuevoArray
   } else return "No se encontraron los meses pedidos"
}console.log(mesesDelAño(["Enero","Marzo","Febrero","Noviembre"]))

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var arreglo=[]
   for(var c=0; c<11; c++){
      arreglo.push(c*6)
   }
   return arreglo
}console.log(tablaDelSeis())

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var arregloN =[]
   array.forEach(a=>{
      if (a>100) arregloN.push(a)
   })
   return arregloN
}console.log(mayorACien([100, 4, 56, 78, 200, 120, 7, 160, 148, 22]))

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var arreglo=[]
   const msjError="Se interrumpió la ejecución"
   var interrupcion=false
   for(var i=0; i<10; i++){
      num+=2
      if (num==i) {
         interrupcion=true
         break
      }else arreglo.push(num)
   }
   if (!interrupcion) return arreglo;
   else return msjError
}console.log(breakStatement(-2))

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, NO SE SUMA ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var arreglo=[]
   for(var i=0; i<10; i++){
      if (i==5) continue
      num+=2
      arreglo.push(num)
   }
   return arreglo
}console.log(continueStatement(5))

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
