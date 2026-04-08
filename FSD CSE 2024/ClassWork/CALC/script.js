document.querySelectorAll('.btn').forEach((button) => {
    button.addEventListener('click', () => {
        const display = document.querySelector('#display');
        const value = button.getAttribute('data-value');

        
        if (value === 'C') {
            display.value = ''; // Clear the display
        } else if (value === '=') {
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