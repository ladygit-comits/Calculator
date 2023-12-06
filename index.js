//ADD FUNCTION
const numbers = [];
const operator = "";
const contain = document.getElementById("buttons");
const screen = document.getElementById("screen-el")

const addEl = document.getElementById("add-el")
const subEl = document.getElementById("subtract-el")
const multiplyEl = document.getElementById("multiply-el")
const divideEl = document.getElementById("divide-el")
const resultEl = document.getElementById("result-el")
const clearEl = document.getElementById("clear-el")

let lastOperator = ""

let displayValue =[];


function createButton(contain,screen) {
    for (let b = 0; b < 2; b++) {
        const row = document.createElement("div");
        row.classList.add("row");
        

        for (let c = 0; c < 5; c++) {
            const buttonClick = document.createElement("button");
            buttonClick.classList.add("click");
            row.appendChild(buttonClick);
            buttonClick.textContent = c + (b * 5);
            buttonClick.addEventListener("click", function() {
                store(screen,buttonClick)

            });
        
        }


        contain.appendChild(row);
    }
    addEl.addEventListener("click", function name(params) {
        lastOperator = "+";
        screen.textContent += "+" 
        
       })

       subEl.addEventListener("click", function () {
        lastOperator = "-";
        screen.textContent += "-"
        
       })

       multiplyEl.addEventListener("click", function () {
        lastOperator = "x";
        screen.textContent += "x"
       })
       
       divideEl.addEventListener("click", function () {
        lastOperator = "÷";
        screen.textContent += "÷"
        
       })

       resultEl.addEventListener("click", function(){
        let up = document.createElement("div")
        
        up.textContent = displayUp(numbers, lastOperator, screen)
        screen.appendChild(up)
        let down = document.createElement("div")
        down.classList.add("resultDown")
       
        down.textContent =ans(  numbers,lastOperator) 
        screen.appendChild(down)
    })
    clearEl.addEventListener("click", function () {
        
        clear(screen)
    })

}   


// Usage:
createButton(contain,screen);

    
    function store(screen,buttonClick) {
      const buttonValue = parseFloat(buttonClick.textContent)
      
      if(!isNaN((buttonValue))){
       numbers.push(buttonValue)
       
       screen.textContent += buttonValue
       
     
     } else {
        screen.textContent += buttonClick.textContent
     }}

     function ans(  numbers,lastOperator) {

       
        if (lastOperator === "+") {
           const sum =  numbers.reduce((acc,num) => acc + num, 0);
           return sum
            
        
        }
    
        if (lastOperator === "-") {
            const subtraction =  numbers.slice(1).reduce((acc,num) => acc - num, numbers[0]);
            return subtraction
             
         
         }
         if (lastOperator === "x") {
            const multiplication =  numbers.slice(1).reduce((acc,num) => acc * num, numbers[0]);
           return multiplication
            
            
         }
         if (lastOperator === "÷"){
            const division =  numbers.slice(1).reduce((acc,num) => acc / num, numbers[0]);
           return division
         }
    }

        function displayUp( screen) {
            const currentInput = screen.textContent;
            
        
           
            const fullDisplayText = currentInput
            
            screen.textContent = fullDisplayText;
        
           
        }
        
        function clear(screen) {
            numbers.length = 0;
            screen.textContent = "";
        }