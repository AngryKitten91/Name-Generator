var arrays = require("./arrays.js");

function createName(a, b, num) {
    function pickHelp(a){
        return a[Math.floor((Math.random() * a.length))].toUpperCase();
    }
    for(let i = 0; i < num; i++){
        console.log(`${pickHelp(a)} ${pickHelp(b)}`);
        // console.log(pickHelp(a), pickHelp(b));
    }
}

createName(arrays.adjective, arrays.noun, 5);

