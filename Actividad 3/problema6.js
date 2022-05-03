var nombre = prompt("Ingrese su nombre:")
var edad = prompt("Ingreser su edad:")

if (nombre == "Mario" || nombre == "Carlos")
{

    alert("Bienvenido " + nombre + ", puedes ingresar al VIP.")

}

else if (edad >= 18)
{

    alert(nombre + ", puedes ingresar a la discoteca.")

}

else if (edad < 18)
{

    alert(nombre + ", no puedes ingresar a la discoteca.")

}
