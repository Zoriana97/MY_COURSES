function pow(x, n) {
    let result = 1;

    for(let i = 0; i < n; i++) {
        result = result * x;
    }

    return result;
}



let x = prompt("x?", "");
let n = prompt("n?", "");




if(n < 0) {
    alert('Степінь n не підтримується, введіть цілу степінь більшу 0');
}

else {
    alert( pow(x, n) );
}