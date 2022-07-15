// let todo=['UpSkill','Projects','StartUp','IRCTC','GoPro']
// state='Incomplete'

// console.log(`You have ${todo.length} todos left`)

// todo.forEach(function (item, index) {
//     console.log(`ToDo: ${index+1}. ${item} - ${state}`)
// })

let todoList=[{
    title:'Travel',
    state:'Incomplete'
}, {
    title:'Office',
    state:'Incomplete'
}, {
    title:'Web Dev',
    state:'Ongoing'
}]

// console.log(`ToDo List - ${todoList.title}, ${todoList.state}`)

// let deleteTodo=function (todo, search) {
//     let result=todo.findIndex(function (todos) {
//         return todos.title.toLowerCase()===search.toLowerCase()
//     })
//     todo.splice(result,1)
//     return todoList
// }
// console.log("Delete Todo-",deleteTodo(todoList, 'Office'))

// for (let i=0;i<todoList.length;i++) {
//     console.log("ToDo")
//     console.log(`${todoList[i].title} - ${todoList[i].state}`)
// }

// let stateTodo=function (todo, state) {
//     return filterTodo=todo.filter(function (todos) {
//         let inState=todos.state.toLowerCase().includes(state.toLowerCase())
//         return inState
//     })
// }
// console.log("ToDo State")
// console.log(stateTodo(todoList, 'incomplete'))


// DOM

const disp=document.querySelector('div')
const element=document.createElement('h4')

let display=todoList.filter(function (todo) {
    if (todo.state.toLowerCase().includes('incomplete')) {
        return todo
    }
})

element.textContent=`You have ${display.length} todos left`
disp.appendChild(element)

let indivDisp=todoList.forEach(function (todo) {
    const list=document.createElement('li')
    list.textContent=todo.title
    disp.appendChild(list)
})

// let indivDisp=todoList.forEach(function (todo) {
//     todoList.filter(function (todo) {
//         if (todo.state.toLowerCase().includes('incomplete')) {
//             const list=document.createElement('li')
//             list.textContent=todo.title
//             disp.appendChild(list)
//         }
//     })
// })

// add new statement

// document.querySelector('.todo').addEventListener('click', function () {
//     let print=document.createElement('li')
//     print.textContent='Welcome to ToDo App'
//     document.querySelector('.dom').appendChild(print)
// })

// changes the button

let input=document.querySelector('#todo').addEventListener('input', function (e) {
    // console.log(e.target.value)
    let h3=document.createElement('h3')
    h3.textContent=e.target.value
    // document.querySelector('div').innerHTML=''
    document.querySelector('div').appendChild(h3)
})