var person = {}
Object.defineProperty(person, 'name' ,{
    value: 'jack',
    writable: true
})
console.log(person.name);