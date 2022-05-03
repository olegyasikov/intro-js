function checkWord(word)
{

    var wordLenght = word.length
    var backwardWord = ""
    for(var x = wordLenght - 1; x >= 0; x--)
    {

        backwardWord+= word[x]

    }

    if (word == backwardWord)
    {

        return console.log("La palabra " + word + " es un palíndromo.")

    }
    else
    {

        return console.log("La palabra " + word + " no es un palíndromo.")

    }

}

var word = prompt("Ingrese la palabra:")

checkWord(word)