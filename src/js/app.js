require('../css/style.css');

let people = require('./mymodule.js');

function logArrayElements(person, index) {
    let elementLi = document.createElement('li');
    elementLi.innerHTML = person.name;
    document.getElementById('foo').appendChild(elementLi);
    console.log(elementLi);

}

people.forEach(logArrayElements);

