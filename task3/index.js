do{
    var bottles = parseInt(window.prompt("Please enter a number from 1 to 100", ""), 10);
} while(isNaN(bottles) || bottles > 100 || bottles < 1);

for (let i = bottles; i >= 0; i--) {
    if (i > 0){
        document.write(`${i} <br/>`);
    }

    if (i == 0) {
        document.write(`OUT OF BOTTLES`);
    }
}