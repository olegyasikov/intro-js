function convertTo(option, temperature)
{

    switch(option)
    {

        case 1:
            return console.log(temperature + " grados Celsius son " + ((temperature * 9/5) + 32) + " grados Fahrenheit")
        case 2:
            return console.log(temperature + " grados Fahrenheit son " + ((temperature - 32) * 5/9) + " grados Celsius")

    }

}

do
{
    var option = Number(prompt("Menú:\n1: Convertir grados Celsius a grados Fahrenheit.\n2: Convertir grados Fahrenheit a grados Celsius."))
}
while(option < 1 || option > 2)

var temperature = Number(prompt("Ingrese la temperatura a convertir:"))

convertTo(option, temperature)
