const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const value = button.getAttribute("data-value") || button.innerText;


        if (button.classList.contains("clear")) {
            display.value = "";
        } else if (button.classList.contains("equal")) {
            try {
                let result = eval(display.value);
                if (result === Infinity || result === -Infinity) {
                    display.value = "Undefined";
                } else {
                    display.value = result; // Evaluate the expression
                }
            } catch {
                display.value = 'Error'; // Handle errors in expression
            }
        } else {
            display.value += value; // Add value to the display
        }
    });
});