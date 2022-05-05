var numbers = [1, 2, 3, 4, 10, 11]

function calcSum(numbers)
{

    var n = numbers.length
    var sum = 0;

    for (var i = 0; i < n; i++)
    {

        sum += numbers[i]

    }

    return console.log("La suma de los elementos del arreglo es " + sum)

}

calcSum(numbers)