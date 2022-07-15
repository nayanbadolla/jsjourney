console.log('Hello!')

var city='Bengaluru'
var country='India'
var address=city+','+country
console.log(address)

var score=40
var maxScore=50
var percent=(score/maxScore)*100
console.log(percent,'%')

var cel=20
var fahren=75
var fahrenheit=(cel+32)/(5/9)
var celcius=(fahren-32)*(5/9)
console.log(fahrenheit)
console.log(celcius)

var age=19
var adult=age>=18
console.log('adult')
var child=age<=18
console.log('child')

var age=19
if (age>=18)
    console.log('adult')
else if (age>=65)
    console.log('senior citizen')
else 
    console.log('child')

var guestOne='veg'
var guestTwo='non-veg'
if (guestOne==='veg' && guestTwo==='veg') {
    console.log('Only veg')
}
else if (guestOne==='veg' || guestTwo==='non-veg') {
    console.log('Show both options')
}
else {
    console.log('Too much confusion')
}