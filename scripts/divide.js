function print_divide(a, b) {

    function to_math(n) {
        return "\\(" + String(n) + "\\)";
    }

    let num_a = Number(a);
    let num_b = Number(b);

    if (a == "" || b == "" || isNaN(num_a) || isNaN(num_b)) {
        return "Invalid entry. Please enter two numbers."
    } else {
        return to_math(a + " \\div " + b + " = " + String(num_a / num_b));
    }
};