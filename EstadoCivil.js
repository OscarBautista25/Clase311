var nombre;
var estadoCivil;
nombre= prompt("Ingrese el nombre de la persona");
estadoCivil= parseInt(prompt("Ingrese el estado civil de la persona: 1. Soltero 2. Casado 3. Separado 4. Viudo 5. Unión Libre"));
switch (estadoCivil) {
    case 1:
        alert(nombre + " esta solter@");
        break;
    case 2:
        alert(nombre + " esta casad@");
        break;
    case 3:
        
        console.log(nombre + " esta divorciad@");
        break;
    case 4:
        alert(nombre + " esta viud@");
        break;
    case 5:
        alert(nombre + " esta en unión libre");
        break;
    default:
        alert("Estado civil no valido");
        break;
}