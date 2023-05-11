// escribe la función suma acá

function sum (num){
    let newNum = 0
    if(num >=0){
        for(let i = 0; i <= num; i++){
            newNum+=i
        }
    }
    return newNum;
}

// código de prueba
console.log(sum(4)) // 1 + 2 + 3 + 4 = 10
console.log(sum(10)) // 55
console.log(sum(15)) // 120