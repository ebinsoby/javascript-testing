let result, expected;
function sum(a,b){
    return a+b;
}
function takingSum(){
    result = sum(3,5);
    expected = 8;
    expect(result).toBe(expected);
}
test("checking sum", takingSum);

function expect(actual){
return {
    toBe(expected){
        if(actual !== expected ){
            throw new Error(`${actual} is not equal to ${expected}`)
        }
    }
}
}
function test(title, callback){
    try {
        callback();
        console.log(`✅ ${title}`)
    } catch (error) {
        console.error(`❌ ${title}`)
        console.error(error)
    }
}