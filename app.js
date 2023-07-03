const buttons = document.querySelectorAll('button')
const screenDisplay = document.querySelector('.screen')

let ans = ""

function calculate(button) {
    const val = button.textContent;
    if (val === "Clear") {
        ans = ""
        screenDisplay.textContent = '.'
    }
    else if (val == "=") {
        // screenDisplay.textContent =   eval(ans)
        screenDisplay.textContent = Function("return " + ans)(); // which is same as above line
    }

    else {
        ans = ans + val;
        screenDisplay.textContent = ans
    }
}


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        return calculate(button);
    })
})