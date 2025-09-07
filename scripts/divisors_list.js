function print_div_list(a) {

    function get_div_list(n) {
        let list_start = [];
        let list_end = [];

        let i;
        for (i = 1; i < Math.sqrt(n); i++) {
            if (n % i == 0) {
                list_start.push(i);
                list_end.unshift(n / i);
            }
        }

        if (i**2 == n) {list_start.push(i);}

        return list_start.concat(list_end);
    }

    let num_a = Number(a);

    if (a == "" || isNaN(num_a) || !Number.isInteger(num_a) || num_a < 1) {
        return "Invalid entry. Please enter a positive integer.";

    } else {
        let div_list = get_div_list(num_a);
        let div_count = div_list.length;

        function to_math(n) {
            return "\\(" + String(n) + "\\)";
        }

        function text_div_list() {
            let text = "Its divisors are: ";
            let div_list_text = "";
            for (let i = 0; i < div_list.length; i++) {
                if (i > 0) {div_list_text += ", \\allowbreak ";}
                div_list_text += String(div_list[i]);
            }
            return text + to_math(div_list_text) + ".";
        }

        function text_div_count() {
            return "it has " + to_math(div_list.length) + " divisors.";
        }

        function text_is_prime() {
            if (div_count == 2) {return to_math(a) + " is prime";}
            else if (div_count == 4) {return to_math(a) + " is semiprime";}
            else {return to_math(a) + " is composite";}
        }

        return text_is_prime() + ": " + text_div_count() + "<br>" + text_div_list();
    }
};