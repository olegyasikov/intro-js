// Verifica si la propiedad name se encuentra dentro del siguiente objeto:

var student = 
{

    name: "David Rayy",
    sclass: "VI",
    rollno: 12

};

if (student.hasOwnProperty('name'))
    {

        console.log("La propiedad name existe.")

    }
else
    {

        console.log("La propiedad name no existe.")

    }