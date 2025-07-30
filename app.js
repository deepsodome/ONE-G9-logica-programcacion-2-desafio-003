//mensaje a usuario consola
alert('Para poder ver los resultados..\ndebes abrir las herramientas del desarrollador \ny entrar al apartado -CONSOLA-.\n(Pulsa la tecla F12).')

//calcula indice de peso corporal
console.log(`El Indice de Maza Corporal es: ${calcularIMC(1.82, 70)}`);   //muestra en consola cálculo

function calcularIMC(altura, peso) {    //funcion calcula IPC
  var imc = peso / (altura * altura);   //crea variable y hace cálculo
  return imc;   //regresa valor
}


// cálculo factorial de 50
let numero = 50;    //crea variable y asigna 50
let resultado = calcularFactorial(numero);    //crea variable y llama a función
console.log(`El factorial de ${numero} es ${resultado}`);   //muestra resultado en consola

//funcion factorial
function calcularFactorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    return numero * calcularFactorial(numero - 1);
  }
}


// conversion dolar a real
let valorEnDolar = 75;    //crea variable u asigna 75 dolares
let valorEnReales = convertirDolaresAReales(valorEnDolar);    //crea variable u llama a función para convertir a real
console.log(`${valorEnDolar} dólares es: $ ${valorEnReales} BRL`);    //muestra en consola conversión

//función convertir dolar a areal
function convertirDolaresAReales(dolares) {
  var cotizacionDolar = 4.80;
  var reales = dolares * cotizacionDolar;
  return reales;
}



// calcula area y perimero de rectángulo
let altura = 15; //crea variable y asigna valor 15 metros
let anchura = 25; //crea variable y asigna valor 25 metros
calcularAreaYPerimetroRectangular(altura, anchura);   //llama función para calcular

//funcion para calcular área y perímetro con dos parámetros
function calcularAreaYPerimetroRectangular(altura, anchura) { 
  var area = altura * anchura;    //crea variable local y calcula área
  var perimetro = 2 * (altura + anchura);   ////crea variable local y calcula perímetro
  console.log("Área de la sala es: " + area);   //muestra en consola área
  console.log("Perímetro de la sala es: " + perimetro);   //muestra en consola perímetro
}


//funcion para calcular área y perímetro de círculo
let radio = 8; // crea variable y asigna valor
calcularAreaYPerimetroCircular(radio);    //llama a funcion para cálculo

//función calculo área y perímetro con un parámetro
function calcularAreaYPerimetroCircular(radio) {
  var pi = 3.14;    //crea variable pi local y asigna pi
  var area = pi * radio * radio;    //crea variable local y calcula área
  var perimetro = 2 * pi * radio;   //crea variable local y calcula perímetro
  console.log("Área de un círculo de 8 metros de radio es: " + area);   //muestra en consola el área
  console.log("Perímetro de un círculo de 8 metros de radio es: " + perimetro);   //muestra en consola el perímetro
}


// tabla multiplicar
let numeroMult = 70;    //numero de tabla multiplicar
mostrarTablaDeMultiplicar(numero);    //llama a la función con un parametro

//función tabla multiplicación con un parámetro
function mostrarTablaDeMultiplicar(numero) {
  for (var i = 1; i <= 50; i++) {     //inicia for en 1, mientras el índice sea menor o igual a 50 e incrementa contador mas 1
    var resultado = numero * i;     //crea variable local y asigna valor de multiplicación de número por indice
    console.log(numero + " x " + i + " = " + resultado);    //muestra resultados en consola del 1 al 50 por 70
  }
}