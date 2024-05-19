// let numbers = document.querySelectorAll('.num button')
// let input = document.getElementById('#display')
// let num1 = '';
// let num2 = '';
// let operator = '';

// numbers.forEach(button => {
//     button.addEventListener('click',()=>{
//         const buttonValue = button.value;

//         if (!isNaN(butt onValue)) {//if buttonValue is a number
//              if (operator !=='') {
//                 num2 += button.value
//              } else {
//                 num1 += button.value
//              }
//         } else {//if buttonvalue is an operator
//             operator = buttonValue
//         }
//     })
// }

// ) 
// // input.setAttribute('placeholder', 'input your calculation here')
// // input.placeholder = 'input your calculation'
// const inputs = document.querySelector('input [type = "text"]')
// const equal = document.querySelector('button [value= '=']')

// inputs.placeholder('enter your text')


//selecting the variables
const calculator = document.getElementsByClassName('calculator')
let display = document.getElementById("display")
let keys = document.querySelectorAll(".num button")
let equals = document.querySelector("button[value = '=']");
let deleteBtn = document.querySelector("button[value ='c' ]")
let clearResult = false ;

//validating key functions
keys.forEach(key=>{
    key.addEventListener('click', event =>{
        const target = event.target;
        const value = target.value;
        let displayedNum = display.value;
        if(value >= 0 && value <= 9){
            if (displayedNum === '') {
                display.value = value;
            }
             else {
                display.value = displayedNum + value
            }
            if (clearResult) {
                display.value= '';
                
                clearResult = false;
            }
            displayedNum += value
        }
        if(value === '.'){
            if(!displayedNum.includes('.')){
                display.value = displayedNum + '.'
            
         }

        }
         if (value === 'clear') {
            display.value = '';
         }
         if (value === '=') {
            try {
                const result = eval(displayedNum)
                display.value = result
                
                // displayedNum = '';
                clearResult = false
            } catch (error) {
                display.value = '';
            }
             
         } 
        if(value === '+'||
           value === '-'||
           value === '/'||
           value === '*'||
           value === '/100'){
            const lastChar = displayedNum[displayedNum.length - 1];
            if (lastChar === '+'||
                lastChar === '-'||
                lastChar === '/'||
                lastChar === '*'||
                lastChar === '/100') {
                display.value = displayedNum.slice(0,1)
            }
            else{
                display.value = displayedNum + value
            }
            if (clearResult) {
                display.value= '';
                
                clearResult = false;
            }
            if(value === '/100'){
                let percentage= displayedNum/100
                displayedNum = eval(percentage) 
            }
           }
           
       
    })
})

// the c button to delete last inputted number
 deleteBtn.addEventListener('click',()=>{
    
    display.value = display.value.slice(0,-1)
 })


//declaring calculation properties
// let num1 = '';
// let num2 = '';
// let operator = '';
// //coding the calculation process


// appendNumber = number =>{
//     if(operator === ''){
//         num1 += number
//     }else{
//         num2 += number
//     }
//     input.value = num1 + operator + num2
// }

// appendOperator = op =>{
//     operator = op;
//     num1 = parseFloat(num1)
//     input.value += op
// } 
// equalsTo.addEventListener('change',()=>{
//     let result = calculate();
//     input.value = result;
//     num1 = result;
//     num2 = '';
//     operator = '';
// })

// calculate = () =>{
//     num2 = parseFloat(num2)
//     result='';
//     switch (operator) {
//         case "+":
//            result = num1+num2
//             break;
//         case "-":
//             result =num1-num2
//             break;
//         case "*":
//             result =num1*num2;
//              break;
//         case "/":
//             if (num2 === 0) {
//                 result = 'error'
//             } else {
//                 result = num1/num2
//             }
//             break
//         default:
//             result= "invalid operator"
//             break;
//      }
//      input.value = result;
//      num1 ='';
//      num2 = '';
//      operator = '';

// }

// //showing text on screen
// numbers.forEach(button =>{
//     button.addEventListener('click', ()=>{
//         let buttonValue = button.value
//          if (typeof(buttonValue)==='number' ) { 
//             appendNumber(buttonValue)
//          } 
//          else{
//             appendOperator(buttonValue)
//          }
        
   
//     // input.value += buttonValue
// //    input.value = input.appendChild(buttonValue)
//    console.log(`you click ${button.value}`)
// }) 
// }
// )