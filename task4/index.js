var arr = [ 
    {value: 100, type: 'USD'}, 
    {value: 215, type: 'EUR'}, 
    {value: 7, type: 'EUR'}, 
    {value: 99, type: 'USD'}, 
    {value: 354, type: 'USD'}, 
    {value: 12, type: 'EUR'}, 
    {value: 77, type: 'USD'}, ];
var sumOfUsd = 0;

var objArr = []

for (let obj of arr) {
    if (obj.type == "USD") {
        sumOfUsd += obj.value
    }
    if (obj.type == 'EUR') {
        obj.value = obj.value * 2
        objArr.push(obj)
    }
}

document.write(`EUR value * 2:<br/> ${JSON.stringify(objArr)} <br/>`);
document.write(`Sum of USD: ${sumOfUsd} <br/>`);