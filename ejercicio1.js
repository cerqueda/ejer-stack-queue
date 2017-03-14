var nombreCompleto= [];

function Pila(){

  var nombres =[];
  this.push = function(datos){
    return nombres.push(datos);
  };
  this.pop = function (){
    return nombres.pop();
  };
  this.print = function (){
    document.write (nombres.toString());
  };
}
var pilaNombre = new Pila();
pilaNombre.push("Luna");
pilaNombre.push("Sabrina");
pilaNombre.push("Akane");
pilaNombre.push("Gema");
pilaNombre.push("Koru");

var pilaApellido = new Pila();
pilaApellido.push("Sanchez");
pilaApellido.push("Cerqueda");
pilaApellido.push("Calderón");
pilaApellido.push("Guerra");
pilaApellido.push("López");

var concatenar = new Pila;
for (i=0; i<5; i++){
  concatenar = pilaNombre.pop()+" "+ pilaApellido.pop();
  document.write (concatenar);
}
