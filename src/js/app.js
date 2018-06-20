require('../css/style.css');

let people = require('./mymodule.js');
let nextmodule = require('./nextmodule.js');

function logArrayElements(person, index) {
    let elementLi = document.createElement('li');
    elementLi.innerHTML = person.name;
    document.getElementById('foo').appendChild(elementLi);
    console.log(elementLi);

}

people.forEach(logArrayElements);

console.log(nextmodule.method()[0]);
console.log(nextmodule.otherMethod()[0]);
