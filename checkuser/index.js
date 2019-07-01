const data = [
    {
        name: 'Ramesh Parajuli',
        homework: 'done'
    },
    {
        name: 'Raman Ghimire',
        homework: 'not done'
    },
    {
        name: 'Roshan Poudel',
        homework: 'half done'
    },
    {
        name: 'Hitesh Basnet',
        homework: 'done'
    }
]

const findToDo = function (allData, name) {
    const searchTodo = allData.findIndex(function (names, index) {
        return names.name.toLowerCase() === name.toLowerCase()
    })
    return data[searchTodo]
}

let found = findToDo(data, 'Roshan Poudel');
console.log(found)