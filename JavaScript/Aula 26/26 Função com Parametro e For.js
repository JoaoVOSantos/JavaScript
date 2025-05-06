// 5! = 5 * 4 * 3 * 2 * 1 = 120

function fatorial(n){
    var fat = 1
    for(var i = n; i  > 1; i--){

        fat *= i

    }
    return fat
}

console.log(fatorial(0))