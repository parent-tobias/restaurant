import * as data from '../sources/items.json';

function appendData(data) {
    let mainContainer = document.getElementById("soulful");
    for (let i = 0; i < data.length; i++) {
        let div = document.createElement("div");
        div.innerHTML = 'Name: ' + data[i].name + ' ' + data[i].lastName;
        mainContainer.appendChild(div);
    }
}
console.log(data);
appendData(data);