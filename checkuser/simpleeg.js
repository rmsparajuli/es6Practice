
const data2 =[ 'Ramesh Parajuli', 'Roshan Poudel', 'Raman Ghimire', 'Hitesh Basnet' ];

console.log(data2)

console.log(`Position of 'Roshan Poudel' is: ${data2.indexOf('Roshan Poudel')}`)
console.log(`String of Position ${data2.indexOf('Roshan Poudel')} is ${data2[data2.indexOf('Roshan Poudel')]}`)

const data = [
    {
        name:'Ramesh Parajuli',
        homework:'done'
    },
    {
        name:'Raman Ghimire',
        homework:'not done'
    },
    {
        name:'Roshan Poudel',
        homework:'half done'
    },
    {
        name:'Hitesh Basnet',
        homework:'done'
    }
]

const index = data.findIndex(function(alldata, abc){
    return alldata.name ==='Hitesh Basnet'
})
console.log(index)