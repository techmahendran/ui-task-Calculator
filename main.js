// Select DOM items
const inputBox = document.querySelector('#textBox')
const btns = document.querySelectorAll('button')
let inputValue = ''

for (const item of btns) {
    item.addEventListener('click', (e) => {
        let buttonText = e.target.innerText

        if (buttonText == 'X') {
            buttonText = '*'
            inputValue += buttonText
            inputBox.value = inputValue

        } else if(buttonText == 'C'){
            inputValue = ''
            inputBox.value = inputValue

        }else if (buttonText == '=') {
            inputBox.value = eval(inputValue)

        }else{
            inputValue += buttonText
            inputBox.value = inputValue
        }
    })
}

