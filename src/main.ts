interface Array<T> {
  shuffle(): Array<T>;
  chunk(n: number): Array<T>;
  compact(): Array<T>;
  deepFlat(): Array<T>;
  math(operand: string, number?: number): Array<T>;
};

const alphabet = new Set('abcdefghijklmnopqrstuvwxyz');
const numbers = new Set('0123456789');

let testArray = [1, 2, 3, 4, , 'abc', 'hi', 10];

// shuffles array in place (mutates array)
Array.prototype.shuffle = function() {
    let i = this.length;
    while (i) {
        let j = Math.floor(Math.random() * i);
        let k = this[--i];
        this[i] = this[j];
        this[j] = k;
    }
    return this;
}

// breaks array into chunks of size n (creates new array)
Array.prototype.chunk = function(n: number) {
    return Array(Math.ceil(this.length / n)).fill(0).map((_, i) => this.slice(i * n, i * n + n));
}

// removes falsey values from array (mutates array)
Array.prototype.compact = function() {
    return this.filter(Boolean);
}

//completely flattens an array (creates new array)
Array.prototype.deepFlat = function() {
    return this.toString().split(',').map((n) => isNaN(Number(n)) ? n : Number(n));
}

// perform a type of math on each index of an array (mutates array)
Array.prototype.math = function(operand: string, number: number) {
    return this.map((n) => {
        if (typeof n === 'number') {
            switch (operand) {
                case '+':
                case '-':
                case '*':
                case '/':
                case '**':  
                case '%':
                    if(number) return eval(n + operand + number);
                      else throw new Error('No number provided');

                case 'power' || '^' || '**':
                  if(number) return Math.pow(n, number);
                    else throw new Error('No number provided');

                case 'sqrt':
                    return Math.sqrt(n);

                default:
                    return n;
            }
        } else return n;  
    });
 }
    



let x = testArray.math("%", 2);
x;
testArray;
