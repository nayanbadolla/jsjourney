var greetUser=function() {
    console.log("Welcome!")
}
greetUser() 

var n=3
function square(num) {
    // var result=num*num
    console.log(num*num)
}
square(n) //no result

function square(num) {
    var result=num*num
    return result
}
square(3) //no result

var square=function(num) {
    var result=num*num
    console.log(result)
}
square(3)

var square=function(num) {
    var result=num*num
    return result
}
square(3) //no result

function square(num) {
    var result=num*num
    return result
}
var value=square(3)
console.log(value)

function convertFahrenheitToCelcius(fahren) {
    var celcius=(fahren-32)*(5/9)
    return celcius       
}
var celcius=convertFahrenheitToCelcius(32)
console.log(celcius)

function add(a,b,c) {
    return a+b+c
}
var result=add(10+12+13)
console.log(result)

//default value of variable
function add(a=0,b,c=0) {
    console.log(a+b+c)
}
add(10+12+13)

//tip calculator