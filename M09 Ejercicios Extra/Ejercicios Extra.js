/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arregloPadre = []
   for (a in objeto){
      var arrHijo = Array.from([a, objeto[a]])
      /*var arrHijo = []
      arrHijo.push(a)
      arrHijo.push(objeto[a]) */
      //arregloPadre.push([a,objeto[a]])
      arregloPadre.push(arrHijo)
   }
   /*
   var propDelObj = Object.keys(objeto) //crea un array con las propiedades como elementos
   propDelObj.forEach(a=>{  
      arregloPadre.push([a,objeto[a]])    //recorre los elem del array con las prop y agrega al array padre 
   }) //básicamente o se recorre el objeto dado como arg o se crea un array a partir de él y se lo recorre
   */
  // var arregloPadre = Object.entries(objeto)
   return arregloPadre
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var arre=string.split("")
   var obj ={}
   for (var i=0; i<arre.length; i++){ //tambien se puedde recorrer directamente el string con string.length
      if(!obj.hasOwnProperty(arre[i])){
         obj[arre[i]]=1
      }else{
         obj[arre[i]]+=1
      }//básicamente si ya tiene la propiedad con la letra que se está recorriendo en la iteración se le suma 1
      //a su valor, si no tiene esa propiedad la crea
   }
   return obj
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var array=string.split("")
   var newArray=[]
   var posParaLaLetra =0
   for (var letra=0; letra<array.length; letra++){
      if (array[letra]!=array[letra].toLowerCase()){
         newArray.splice(posParaLaLetra,0,array[letra]) 
         posParaLaLetra++
      }else {
         newArray.push(array[letra])
      }
   }
   return newArray.join("")
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var arrPalabras=frase.split(" ")
   for (var a=0;a<arrPalabras.length;a++){
      var arrLetras=arrPalabras[a].split("")
      arrLetras.reverse()
      arrPalabras[a]=arrLetras.join("")
   }
   return arrPalabras.join(" ")
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var capicua=0
   var arr=numero.toString().split("")
   for (var i=0; i<arr.length; i++){
      if (arr[i]==arr[arr.length-i-1]){
         capicua++
      }
   }
   if (capicua==arr.length) return "Es capicua"
   else return "No es capicua"
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var arr=string.split("")
   var nuevoArr=[]
   for (var i=0; i<arr.length;i++){
      if (arr[i]!="a" && arr[i]!="b" && arr[i]!="c") nuevoArr.push(arr[i]);
   }
   return nuevoArr.join("")
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   arrayOfStrings.sort((a,b)=>{
      return a.split("").length-b.split("").length
   })
   return arrayOfStrings
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   //
   // Recorrer el arreglo más largo, comparar cada elemento con cada elemento del 2do array,
   // ir pusheando si son iguales ambos elementos a un nuevo array
   var arrFinal=[]
   var arrMayor=[]
   var arrMenor=[]
   if (array1.length<array2.length) {arrMayor=array2; arrMenor=array1}
   else {arrMayor=array1; arrMenor=array2}
   for (var i=0; i<arrMayor.length; i++){
      for (var c=0; c<arrMenor.length; c++){ //probar con forEach
         if (i==c) arrFinal.push(arrMayor[i])
      }
   }
   return arrFinal
}console.log(buscoInterseccion([1, 2, 3],[3,4,5,1]))

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
