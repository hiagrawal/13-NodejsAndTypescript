const num1Element = document.getElementById("num1") as HTMLInputElement; 
//here we need to give as HTMLInput Element since it can be any html element by default and if we dont define 
//then when we access it's value using .value, it gives an error since it does not know it is an input type element
const num2Element = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('button'); 
//button button is always an htmlButtonElement hence we dont need to give it explicitely and it took buttonType on its own

function add(num1: number, num2: number){
    return num1 + num2;
}

//console.log(add(1,2));
// console.log(add('1','2'));

buttonElement.addEventListener('click', ()=>{
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2); 
    //now we defined the type in add function that it has to be number, when we pass like this, it gives us an error 
    //during development/compile time only that it is of type string since it is taking its value from html element 
    //which always returns a string and hence by using typescript saved us from runtime error
    //and to fix, we added '+' sign which converted string to number
    console.log(result);

})

