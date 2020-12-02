function sayHello(name, age){
    console.log('Hello!', name, " you have ", age, "years of age.");
}//javascript에서는 "", ''따옴표들도 string으로 인식함.

sayHello("Nicolas", 15); //인자(argument)는 변수같은 것. 함수를 만드는 시점에 생성


//``을 이용하여 조금 더 간결한 string 표현
function sayHello(name, age){
    console.log(`Hello ${name} you are ${age} years of age.`);
}

sayHello("Nicolas", 15);


//return
function sayHello(name, age){
    console.log('Hello!', name, " you have ", age, "years of age.");
}

sayHello("Nicolas", 15);

const greetNicolas = sayHello("Nicolas", 15);

console.log(greetNicolas);


//math object
const calculator = {
    plus: function(a, b){
        return a + b;
    }
}
const plus = calculator.plus(5, 5)
console.log(plus)