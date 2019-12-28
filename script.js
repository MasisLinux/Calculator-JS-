// const getValue = document.getElementById('submit-button');
const inputVal = document.getElementById('input-val');
const numbers = Array.from(document.querySelectorAll('.number'));
const output = document.getElementById('output');

console.log(numbers)

// getValue.addEventListener('click',
//     function(event) {
//         event.preventDefault();
       
//         console.log(inputVal);
//         let output = document.getElementById('output');

//         output.textContent = inputVal.value;

//     }

// )

numbers.forEach(function(number) {
    number.addEventListener('click', function() {
        event.preventDefault();
        console.log(event.target.value)
        inputVal.value += event.target.value
    })

})

function deleteInput(event){
    event.preventDefault();
    inputVal.value = '';
    output.textContent = '';
    
}
function returnEqual(event) {
    event.preventDefault();

    let total = eval(inputVal.value);
    inputVal.value = `${inputVal.value} = ${total}`
}

