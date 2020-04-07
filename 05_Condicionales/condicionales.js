let jugador1 = prompt("jugador1: piedra, papel o tijera 123:").toLowerCase();

console.log(jugador1);
console.log("jugador1: " + jugador1);

let computadora = Math.round(Math.random()*2);
// console.log(computadora);


switch(computadora){
    case 0: 
    console.log("jugador2: piedra");
    jugador2 = "piedra";
    break;

    case 1:
    console.log("jugador2: papel");
    jugador2 = "papel";
    break;
    
    case 2:
    console.log("jugador2: tijera");
    jugador2 = "tijera";
    break;
}


if(jugador1.toLowerCase() === "piedra" && jugador2 === "piedra" || jugador1.toLowerCase() === "papel" && jugador2 === "papel" || jugador1.toLowerCase() === "tijera" && jugador2 === "tijera"){
    console.log("Empates");
} else if(jugador1.toLowerCase() === "piedra" && jugador2 === "tijera" || jugador1.toLowerCase() === "papel" && jugador2 === "piedra" || jugador1.toLowerCase() === "tijera" &&  jugador2 === "papel"){
    console.log("jugador1 es ganador");
} else if(jugador2 === "piedra" && jugador1.toLowerCase() === "tijera" || jugador2 === "papel" && jugador1.toLowerCase() === "piedra" || jugador2 === "tijera" &&  jugador1.toLowerCase()=== "papel"){
    console.log("jugador2 es ganador");
} else {

}






