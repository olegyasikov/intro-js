function wordSearch (sentence, word)
{

    if(sentence.includes(word))
    {

        return console.log(true)

    }
    else
    {

        return console.log(false)

    }

}

wordSearch(prompt("Ingrese una oración: "), prompt("Ingrese la palabra a buscar en la oración: "))