// LOCAL STORAGE

localStorage.setItem('location','Bangalore')
localStorage.getItem('location')
localStorage.removeItem('location')
localStorage.clear()

// OBJECT TO STRING 

let input=[{
    name:'Nayan L Badolla',
    age:20
}
]

let inputJSON=JSON.stringify(input)
localStorage.setItem('user',inputJSON)

let outputJSON=localStorage.getItem('user')
let output=JSON.parse(outputJSON)
console.log(`${output.name} - ${output.age}`)