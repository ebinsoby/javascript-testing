let result, expected;
function sum(a,b){
    return a+b;
}

result = sum(3,5);
expected = 10;

expect(result).toBe(expected);


function expect(actual){
return {
    toBe(expected){
        if(actual !== expected ){
            throw new Error(`${actual} is not equal to ${expected}`)
        }
    }
}
}