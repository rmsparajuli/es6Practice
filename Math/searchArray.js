let Names = ['ram', 'shyam', 'hari', 'gita', 'sita', 'rita'];
const todo = [
    {
        title:'abc',
        isDone:true
    },
    {
        title:'def',
        isDone:false
    },
    {
        title:'ghi',
        isDone:true
    }
]
console.log(parseInt(Names.indexOf('shyam') +1));
console.log(Names[Names.indexOf('shyam')] )


const index = todo.findIndex( function(todo, index){
    console.log(todo);
    return todo.title =='ghi'
} )

const index2 = todo.findIndex( function(abc){
    console.log(abc);
    return abc.title=='ghi'
}  )
// console.log(index2)