const helado = 550;
var toppings = "Kinder";
var precio;
var precioFinal;

if (toppings == "Oreo"){
    precio = 10;
} else if (toppings == "KitKat"){
    precio = 15;
} else if (toppings == "Kinder"){
    precio = 25;
}

precioFinal = helado + precio;

console.log("El helado cuesta $" + precioFinal)



var menu = "verdura"
var bebida;

switch (menu) {
    case "carne":
        console.log("El menu seleccionado es Carne");
        bebida = "Vino tinto"
        break;
    case "pescado":
        console.log("El menu seleccionado es Pescado");
        bebida = "Vino blanco"
        break;
    case "verdura":
        console.log("El menu seleccionado es Verdura");
        bebida = "Agua"
        break;
}

console.log("La bebida que se le ofrece es " + bebida)


// hola profe no me salio hacer bien lo de FOR ni lo de WHILE, todo esto es lo que logre con mi humilde esfuerzo jejfej