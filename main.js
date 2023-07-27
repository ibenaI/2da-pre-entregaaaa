// const productos = [
//     { nombre: " Nombre: obj1 \t ", precio: "Precio: " + 100 },
//     { nombre: " Nombre: obj2 \t ", precio: "Precio: " + 150 },
//     { nombre: " Nombre: obj3 \t ", precio: "Precio: " + 200 },
//     { nombre: " Nombre: obj4 \t ", precio: "Precio: " + 250 },
// ];
// let carrito = [];
// let seleccion = prompt("Desea comprar algo? (si o no)");
// while (seleccion != "si" && seleccion != "no") {
//     alert("ingresar si o no");
//     seleccion = prompt("Desea comprar algun producto ? (si o no)");
// } 

// if (seleccion == "si") {
//     alert("Aqui nuestros productos: ");
//     let todosLosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$");
//     alert(todosLosProductos.join("\n"));
// } else if (seleccion == "no") {
//     alert("Gracias por visitarnos !");
// }

// while (seleccion != "no") {
//     let producto = prompt("Ingresar el nombre del producto que dese llevar: ");
//     let precio = 0;

//     if (producto == "obj1" || producto == "obj2" || producto == "obj3" || producto == "obj4") {
//         switch (producto) {
//             case "obj1":
//                 precio = 100;
//                 break;
//             case "obj2":
//                 precio = 150;
//                 break;
//             case "obj3":
//                 precio = 200;
//                 break;
//             case "obj4":
//                 precio = 250;
//                 break;
//             default:
//                 break;
//         }
//         let unidades = parseInt(prompt("Igrese la cantidad que desea llevar: "));
//         carrito.push({ producto, unidades, precio });

//     } else {
//         alert("No hay stock para ese producto :/")
//     }
//     seleccion = prompt("Desea seguir comprando? (si o no)");
//     while (seleccion === "no") {
//         alert("Gracias por la compra, aqui su pedido: ");
//         carrito.forEach((carritoFinal) => {
//             alert(`Producto: ${carritoFinal.producto}, \n\nUnidades: ${carritoFinal.unidades}, \n\nTotal a Pagar: ${carritoFinal.unidades * carritoFinal.precio}`)
//         });
//         break;
//     }
// }

// const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
// alert(`El total a pagar por su compra es: ${total} \n\nVuelva Pronto!`);

//=========================00


const productos = [
    { nombre: " Nombre: obj1 \t ", precio: "Precio: " + 100 },
    { nombre: " Nombre: obj2 \t ", precio: "Precio: " + 150 },
    { nombre: " Nombre: obj3 \t ", precio: "Precio: " + 200 },
    { nombre: " Nombre: obj4 \t ", precio: "Precio: " + 250 },
];

function Producto (nombre, precio, unidades) {
    this.nombre = nombre;
    this.precio = precio;
    this.unidades = unidades;
}

let carrito = [];
let seleccion = prompt("Bienvenido a nuestra tienda!\nDesea comprar algo? (si / no)");
while (seleccion != "si" && seleccion != "no") {
    alert("Por favor ingresar si o no");
    seleccion = prompt("Desea comprar algun producto ? (si o no)");
} 

if (seleccion == "si") {
    alert("Aqui nuestros productos: ");
    let todosLosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$");
    alert(todosLosProductos.join("\n"));
} else if (seleccion == "no") {
    alert("Gracias por visitarnos !");
}

while (seleccion != "no") {
    let producto = prompt("Ingresar el nombre del producto que dese llevar: ");
    let precio = 0;

    if (producto == "obj1" || producto == "obj2" || producto == "obj3" || producto == "obj4") {
        switch (producto) {
            case "obj1":
                precio = 100;
                break;
            case "obj2":
                precio = 150;
                break;
            case "obj3":
                precio = 200;
                break;
            case "obj4":
                precio = 250;
                break;
            default:
                break;
        }
        let unidades = parseInt(prompt("Igrese la cantidad que desea llevar: "));

        carrito.push(new Producto(producto, unidades, precio));

    } else {
        alert("No hay stock para ese producto :/")
    }
    seleccion = prompt("Desea seguir comprando? (si o no)");
    while (seleccion === "no") {
        alert("Gracias por la compra, aqui su pedido: ");
        carrito.map((carritoFinal) => {
            alert(`Producto: ${carritoFinal.nombre}, \n\nUnidades: ${carritoFinal.unidades}, \n\nTotal a Pagar: ${carritoFinal.unidades * carritoFinal.precio}`)
        });
        break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
alert(`El total a pagar por su compra es: ${total} \n\nVuelva Pronto!`);