var num1 = Number(prompt("Ingrese el primer numero:"))
var num2 = Number(prompt("Ingrese el segundo numero:"))
var num3 = Number(prompt("Ingrese el tercer numero:"))

// Numero 1 mayor
if (num1 > num2 && num1 > num2)
{

    alert("El primer numero (" + num1 + ") es mayor que el segundo (" + num2 + ") y el tercero (" + num3 + ").")

}

// Numero 2 mayor
else if (num2 > num1 && num2 > num3)
{

    alert("El segundo numero (" + num2 + ") es mayor que el primero (" + num1 + ") y el tercero (" + num3 + ").")

}

// Numero 3 mayor
else if (num3 > num1 && num3 > num2)
{

    alert("El tercer numero (" + num3 + ") es mayor que el primero (" + num1 + ") y el segundo (" + num2 + ").")

}
// Numero 1 y 2 mayor
else if (num1 == num2 && num2 > num3)
{

    alert("El primer (" + num1 +") y segundo (" + num2 + ") número son mayor que el tercero (" + num3 +").")

}

// Numero 2 y 3 mayor
else if (num2 == num3 && num2 > num1)
{

    alert("El segundo (" + num2 +") y tercer (" + num3 + ") número son mayor que el primero (" + num1 +").")

}