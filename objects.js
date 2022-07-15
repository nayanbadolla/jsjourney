var myBook={
    title:'The Palace Of Illusions',
    author:'Divya Karuni'
}
console.log(myBook)
console.log(myBook.title)
console.log(`${myBook.title} by ${myBook.author}`)

var intro={
    name:'Andrew',
    age:'27',
    city:'Philadelphia'
}
console.log(`${intro.name} is ${intro.age} lives in ${intro.city}`)
intro.age++
console.log(`${intro.name} is ${intro.age} lives in ${intro.city}`)

function display(book) {
    console.log(`${book.title} by ${book.author}`)
}
display(myBook)

// Temperature Calculator

var celsius, kelvin

function tempConverter(fahrenheit) {
    celsius=(fahrenheit-32)*(5/9)
    kelvin=(fahrenheit-32)*(5/9)+273.15

    return {
        f: `temperature is ${fahrenheit} F`,
        f2c: `${fahrenheit} F is ${celsius} C`,
        f2k: `${fahrenheit} F is ${kelvin} K`
    }
}

var converter=tempConverter(80)
console.log(converter.f)
console.log(converter.f2c)
console.log(converter.f2k)

// Object Methods

var restaurant={
    name:"Taco Bell",
    capacity:120,
    seated:0,
    
    add:function(entry) {
        this.seated=this.seated+entry
        return this.seated
    },
    finished:function(exit) {
        this.seated=this.seated-exit
        return this.seated
    },
    strength:function(queue) {
        space=this.capacity-this.seated
        return space>=queue
    }
}

console.log(restaurant.name)
console.log(restaurant.capacity)
console.log(restaurant.seated)
console.log(restaurant.add(40))
console.log(restaurant.finished(6))
console.log(restaurant.strength(3))

// Strong Password Verifier

function isValidPassword(password) {
    if (password.length<8 || password.includes('password')) {
        return "Invalid Password"
    }
    else {
        return "Valid Password"
    }
}

var validity=isValidPassword("password")
console.log(validity)

// Random Number Generator

function random(guess) {
    var max=5
    var min=1
    num=Math.floor(Math.random()*(max-min+1))+min
    if (guess==num) {
        return num
        return "Jackpot"
    }
    else {
        return num
        return "Fail"
    }
}

var guess=random(3)
console.log(guess)