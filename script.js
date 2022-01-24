//------01-------//
let mercado = [`Leite`,`Ovos`,`Oléo`,`Sal`,`Pimenta`]
console.log(mercado)
//-------02--------//
let names = [`Dan`,`Fernando`,`Pam`,`Taty`,`Marlon`]
names.unshift("Cris")
console.log(names)
//-------03------//
names.pop()
console.log(names)
//-------04-------//
names.push(`Luzia`,`Karynne`)
console.log(names)
//-------05-------//
names.shift()
console.log(names)
//-------06-------//
const numbers = [7,5,6,3,8,9,2,1,4]
numbers.sort(function(a,b){
    return a-b
}
)
console.log(numbers)