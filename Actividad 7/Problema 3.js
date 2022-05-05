function checkWord(word)
{

    let backwardWord = ""
    for(let x = word.length - 1; x >= 0; x--)
    {

        backwardWord += word[x]

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

let word = prompt("Ingrese la palabra:")

checkWord(word)