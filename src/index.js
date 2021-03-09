module.exports = function toReadable (number) {

    let n = number;
    Arr_1to19 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelwe', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ];

    Arr_tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    Arr_hundreds = ['hundred'];

    if (n == 0) {
        Readable_N = 'zero';
    }

    if (n < 20) {
        Readable_N = Arr_1to19[n-1];
    }
    
    if (n >= 20 && n < 100) {
        Readable_N = Arr_tens [Math.floor(n/10) - 1] + ' ' + Arr_1to19 [(n % 10) - 1];
    }

    if (n >= 100 && n <= 999) {
        Readable_N = Arr_1to19[Math.floor(n/100) - 1] + ' ' + Arr_hundreds[0]; // + ' ' + Arr_tens[(number % 100) - 1];
        if ((n % 100) < 20 && (n % 100) > 0) {
           Readable_N += ' ' + Arr_1to19[n % 100 - 1]; 
        } else if ((n % 100) >= 20 && (n % 100) < 100){
            Readable_N += ' ' + Arr_tens [(Math.floor((n % 100)/10)) - 1] + ' ' + Arr_1to19 [((n % 100) % 10) - 1];
            }       
    }
    return Readable_N;  
    //console.log(Readable_N);  
}