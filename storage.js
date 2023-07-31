// LOCAL STORAGE

localStorage.setItem('location','Bangalore')
localStorage.getItem('location')
localStorage.removeItem('location')
localStorage.clear()

// CONVERSION

let input=[{
    name:'Nayan L Badolla',
    age:20
}]

// Object to String
let inputJSON=JSON.stringify(input)
localStorage.setItem('user',inputJSON)

// Object to String
let outputJSON=localStorage.getItem('user')
let output=JSON.parse(outputJSON)
console.log(`${output.name} - ${output.age}`)


text.setAttribute('href', `todo.html#${todo.title}`)
