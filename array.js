let webdev=['UpSkill','Projects','StartUp']
console.log(webdev)
console.log(webdev[2])
console.log(webdev.length)
console.log(webdev[webdev.length-1])
console.log(webdev.push('xyz'))
console.log(webdev.pop())
console.log(webdev.shift())
console.log(webdev.unshift('xyz'))
console.log(webdev.splice(1,1,'xyz'))
console.log(webdev.indexOf('xyz'))

let notes=[{
    title:'Travel',
    desc:'South Africa',
    date:'24/06/2022'
}, {
    title:'Office',
    desc:'Digitization',
    date:'14/06/2022'
}, {
    title:'Web Dev',
    desc:'UpSkill, Projects, StartUp',
    date:'20/06/2022'
}]

// returns index

let result=notes.findIndex(function (note) {
    return note.title==='Web Dev'
})
console.log(result)

let searching=function(notes,search) {
    let result=notes.findIndex(function (note) {
        return note.title===search
    })
    return notes[result]
}
let find=searching(notes,'Web Dev')
console.log(find)

//return note

let noteResult=notes.find(function (note) {
    return note.title==='Web Dev'
})
console.log(noteResult)

let searchingNote=function(notes,search) {
    // return noteResult=notes.find(function (note) {
    //     return note.title===search
    // })
    return notes.find(function (note) {
        return note.title===search
    })
}
console.log(searchingNote(notes,'Web Dev'))

// let findNote=searchingNote(notes,'Web Dev')
// console.log(findNote)

let pushingNote=function(notes,search) {
    notes.push(search)
    return noteResult=notes.find(function (note) {
        return note.title===search
    })
}
console.log(pushingNote(notes,'Web Dev'))

// Filtering Notes
// return object

let filteredNotes=notes.filter(function (note) {
    let inTitle=note.title.toLowerCase().includes('Projects')
    let inDesc=note.desc.toLowerCase().includes('Projects')

    return inTitle || inDesc
})
console.log(filteredNotes)

// Sorting Notes

let sortedNotes=function (notes) {
    notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}

sortedNotes(notes)
console.log(notes)