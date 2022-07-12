var person=[
    {
        name:'pamuk',
        surname:'al',
        age:'23',
        job:'tech guru',
        languages:['english','russian','turkish']
    },

    {
        name:'iron',
        surname:'thor',
        age:'29',
        job:'engineer',
        languages:['english','russian','turkish','french']
    }
];

person.forEach(function(person){
    console.log("*************************") 
    console.log("person:",person.name +" "+person.surname);
    console.log("languages:");
    person.languages.forEach(function(language){
       
        console.log(language);
    });
    console.log("age:",person.age);
    console.log("job:",person.job);
    console.log("*************************")

});