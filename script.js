let vehicle1 = prompt( "digite o nome veículo 1 :")
let vehicle2 = prompt( "digite o nome veículo 2 :")
let velocity1 = prompt("digite a velocidade do " + vehicle1 + " :")
let velocity2 = prompt("digite a velocidade do " + vehicle2 + " :")

if  (   velocity1 > velocity2)  {
  alert("O " + vehicle1 + " está a " + velocity1 + ",  e está mais rápido que o " + vehicle2 + ",que está a " + velocity2 + " km/h!")

  }  else if ( velocity1 >= velocity2)  {
    alert("O " + vehicle1 + " está a " + velocity1 + ",  e está com a mesma velocidade que o " + vehicle2 + ",que está a " + velocity2 + " km/h!")

}  else {
    alert("O " + vehicle2 + " está a " + velocity2 + ",  e está mais rápido que o " + vehicle1 + ",que está a " + velocity1 + " km/h!" )
  }


  


  
