document.querySelectorAll('.calculator button').forEach(button => {
    button.addEventListener('click', function(){
        let display = document.getElementById('displaytext');
        let value = this.value;

        if (value === "=") {
            try {
                display.value = eval(display.value);
            } catch(error) {
                display.value = "error";
            }
        } else if (value === "Clear") {
            display.value = "";
        } else if (value === "squareroot") {
            // Calculate the square root of the current value
            let currentValue = parseFloat(display.value);
            if (!isNaN(currentValue)) {
                display.value = Math.sqrt(currentValue);
            } else {
                display.value = "error";
            }
        } else if (value === "squared") {
            // Calculate the square of the current value
            let currentValue = parseFloat(display.value);
            if (!isNaN(currentValue)) {
                display.value = Math.pow(currentValue, 2);
            } else {
                display.value = "error";
            }
            //cacluate trig portion of  calculator with use pasre float to convert string and or float to float number.        
        } else if (value === "tan") {
            let currentValue = parseFloat(eval(display.value));
            if (!isNaN(currentValue)) {
                display.value = Math.tan(currentValue);
            } else {
                display.value = "error";
            }
        } else if (value === "sin") {
            let currentValue = parseFloat(eval(display.value));
            if (!isNaN(currentValue)) {
                display.value = Math.sin(currentValue);
            } else {
                display.value = "error";
            }
        } else if (value === "cos") {
            let currentValue = parseFloat(eval(display.value));
            if (!isNaN(currentValue)) {
                display.value = Math.cos(currentValue);
            } else {
                display.value = "cos(";
            }
        //allow user to convert to degrees from radians using the built in JS math function//
        } else if (value === "e") {
            display.value += Math.E;
        } else if (value === "x!") {
            let currentValue = parseFloat(display.value);
            if (!isNaN(currentValue)) {
                display.value = Math.cos(currentValue);
            } else {
                display.value = "error";
            }
        // allows user to get the natural log of a number using bulit in JS math methods//
        } else if (value === "ln") {
            let currentValue = parseFloat(eval(display.value));
            if (!isNaN(currentValue)) {
                display.value = Math.LN10(currentValue);
            } else {
                display.value = "error";
            }
        
            // allows user to get the natural logarithm(base E ) of a number//
        } else if (value === "log") {
            let currentValue = parseFloat(eval(display.value));
            if (!isNaN(currentValue)) {
                display.value = Math.log(currentValue);
            } else {
                display.value = "error";
            }
            // allows user to get percentage of number using basic mmath practie
        } else if (value === "percentage") {
            let currentValue = parseFloat(display.value);
            if (!isNaN(currentValue)) {
                display.value  = (display.value)/100; 
            } else {
                display.value = "error";
            }
        } else if (value === "pi") {
            display.value = Math.PI;
        } else if (value === "Radians") {
            // Add dark mode class to calculator container
            document.body.classList.add('dark-mode');
        }else if (value === "Deg") {
            // Add dark mode class to calculator container
            document.body.classList.remove('dark-mode');
        }else {
            display.value += value;
        }
    });
});
