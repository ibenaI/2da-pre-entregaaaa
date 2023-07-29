const productos = [
        { nombre: " Nombre: obj1 \t ", precio: "Precio: " + 100 },
        { nombre: " Nombre: obj2 \t ", precio: "Precio: " + 150 },
        { nombre: " Nombre: obj3 \t ", precio: "Precio: " + 200 },
        { nombre: " Nombre: obj4 \t ", precio: "Precio: " + 250 },
    ];
    
    class Producto {
    constructor(nombre, precio, unidades) {
        this.nombre = nombre;
        this.precio = precio;
        this.unidades = unidades;
    }
}
    
    let changuito = [];
    let opcion = prompt("Bienvenido a nuestra tienda!\nDesea comprar algo? (si / no)");
    while (opcion != "si" && opcion != "no") {
        alert("Por favor ingresar si o no");
        opcion = prompt("Desea comprar algun producto ? (si / no)");
    } 
    
    if (opcion == "si") {
        alert("Aqui nuestros productos: ");
        let todosLosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$");
        alert(todosLosProductos.join("\n"));
    } else if (opcion == "no") {
        alert("Gracias por visitarnos !");
    }
    
    while (opcion != "no") {
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
    
            changuito.push(new Producto(producto, unidades, precio));
    
        } else {
            alert("No hay stock para ese producto :/")
        }
        opcion = prompt("Desea seguir comprando? (si o no)");
        while (opcion === "no") {
            alert("Gracias por la compra, aqui su pedido: ");
            changuito.map((changuitoTotal) => {
                alert(`Producto: ${changuitoTotal.nombre}, \n\nUnidades: ${changuitoTotal.unidades}, \n\nTotal a Pagar: ${changuitoTotal.unidades * changuitoTotal.precio}`)
            });
            break;
        }
    }
    
    const total = changuito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
    alert(`El total a pagar por su compra es: ${total} \n\nVuelva Pronto!`);


