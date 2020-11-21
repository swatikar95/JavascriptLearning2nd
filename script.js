// Lecture: Hoisting
/*
// functions
// func declaration is stored in variable object and run even before code executed 
calculateAge(1980)
function calculateAge(year){
    console.log(2020-year)
}
// calculateAge(1990)

// func expression runs after code execution
// retirement(1990); will not work
var retirement = function(year){
    console.log(65-(2020-year))
}
retirement(1990)


 
// Variables
console.log(age)
var age = 23
console.log(age)

function foo(){
    console.log(age)
    var age = 65
    console.log(age)
}
foo()
console.log(age)
*/

// Lecture: Scoping
/*
// First scoping example
var a='Hello'
first()

function first(){
    var b = 'Hi'
    Second()

    function Second(){
        var c = 'Hey'
        third()
    }
}

function third(){
    var d = 'John'
    // console.log(c)
    console.log(a+d)
}
*/

// Lecture: this keyword

// window is the default object
// console.log(this)

calculateAge(1990)
// function declaration
function calculateAge(year){
    console.log(2016-year)
    console.log(this) //here 'this' variable is a global object
}

var john = {
    name: 'John',
    yearOfBirth:1990,
    // function expresion
    calculateAge: function(){
        console.log(this)
        console.log(this.yearOfBirth)
/*
        function innerFunction(){
            console.log(this)
        }
        innerFunction()*/
    }
    
}
john.calculateAge()

var mike={
    name: 'Mike',
    yearOfBirth:1984
}

mike.calculateAge = john.calculateAge
mike.calculateAge()