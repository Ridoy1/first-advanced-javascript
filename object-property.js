const student = [
    {id: 21, name:'amena khala'},
    {id: 31, name:'maanaaaaa'},
    {id: 41, name:'Onor chani'},
    {id: 71, name:'dibjol'}
];
const names = student.map(s => s.name);
const ids = student.map(s => s.id);
const bigger = student.filter(s => s.id > 40);
const bigger1 = student.find(s => s.id > 40);
console.log(bigger1);

// const output = []
// for (let i = 0; i < student.length; i++) {
//     const element = student[i];
//     const result = element ;
//     output.push(result);
    
// }
// console.log(output);
