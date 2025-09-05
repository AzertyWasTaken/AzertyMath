function print_list_divisors(a) {

    function list_divisors(n) {
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
        return ["Invalid entry. Please enter positive integer.", "</br>"]

    } else {
        let div_list = list_divisors(num_a)

        let div_count_text = a + " has " + String(div_list.length) + " divisors";
        let div_list_text = "Its divisors are: ";

        for (let i = 0; i < div_list.length; i++) {
            if (i > 0) {div_list_text += ", "}

            div_list_text += String(div_list[i]);
        }

        return [div_count_text, div_list_text];
    }
};