interface Array<T> {
  shuffle(): Array<T>;
  chunk(n: number): Array<T>;
  compact(): Array<T>;
  deepFlat(): Array<T>;
  math(operand: string, number?: number): Array<T>;
  matrixMath(callback: (n: number, i: number) => number, arr2: any[]): Array<T>;
  intersection(arr2: any[]): Array<T>;
  unique(): Array<T>;
  random(): T;
  mean(): number;
  median(): number;
  mode(): Array<T> | number | null;
  range(): number;
  sd(): number;
  variance(): number;
  tail(number: number): Array<T>;
  padStart(padding: number, value:any): Array<T>;
  padEnd(padding: number, value:any): Array<T>;
  occurrences(): Map<T, number>;
  uniqueBy(value: T): Array<T>;
};

const alphabet = new Set('abcdefghijklmnopqrstuvwxyz');
const numbers = new Set('0123456789');



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

// perform an operation on each index (mutates array)
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
    
 // perform an operation between two indeces of two arrays (creates new array)
 Array.prototype.matrixMath = function(callback, arr2) {
    return this.flatMap((n, i) => {
        if (typeof n === 'number' && typeof arr2[i] === 'number') {
            return callback(n, arr2[i]);
        } else return [n, arr2[i]];
    });
 }

 //returns the intersection between two arrays (creates new array)
  Array.prototype.intersection = function(arr2) {
    let arr2copy = [...arr2];
    return this.filter((n) => {
        if (arr2copy.includes(n)) {
            arr2copy.splice(arr2copy.indexOf(n), 1);
            return true;
        } else return false;
    });
  }

  //returns array as a unique set (creates new array)
  Array.prototype.unique = function() {
    return [...new Set(this)];
  }

  //removes all instances of a value except one
  Array.prototype.uniqueBy = function(value) {
    while(this.indexOf(value) !== this.lastIndexOf(value) && this.length > 1) {
      this.splice(this.lastIndexOf(value), 1);
    };
    return this;
  }
  
  //picks a random element from an array 
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }

  //finds the average of an array
  Array.prototype.mean = function() {
    return this.reduce((a, b) => a + b) / this.length;
  }

  //finds the median of an array
  Array.prototype.median = function() {
    let sorted = this.sort((a, b) => a - b);
    let middle = Math.floor(sorted.length / 2);
    if (sorted.length % 2) return sorted[middle];
    else return (sorted[middle - 1] + sorted[middle]) / 2;
  }

  //finds the mode of an array
  Array.prototype.mode = function() {
    let counts = new Map();
    this.forEach((n: any) => counts.has(n) ? counts.set(n, counts.get(n) + 1) : counts.set(n, 1));
    let max = Math.max(...counts.values())
    return [...counts].filter((n) => n[1] === max).map((n) => n[0]);
  }

  //finds the range of an array
  Array.prototype.range = function() {
    let sorted = this.sort((a, b) => a - b);
    return sorted[sorted.length - 1] - sorted[0];
  }

  //finds the standard deviation of an array
  Array.prototype.sd = function() {
    let mean = this.mean();
    let sum = this.reduce((a, b) => a + (b - mean) ** 2, 0);
    return Math.sqrt(sum / (this.length));
  }

  //finds the variance of an array
  Array.prototype.variance = function() {
    let mean = this.mean();
    let sum = this.reduce((a, b) => a + (b - mean) ** 2, 0);
    return sum / (this.length);
  }

  //returns the end of an array
  Array.prototype.tail = function(number:number) {
    let difference  = this.length - number;
    let output = this.slice(difference > 0 ? difference : 0);
    return output.length === 1 ? output[0] : output;
  }
  
  //add padding to the start of an array
  Array.prototype.padStart = function(padding: number, value: any) {  
    return Array(padding).fill(value || 0).concat(this);
  }

  //add padding to the end
  Array.prototype.padEnd = function(padding: number, value: any) { 
    return this.concat(Array(padding).fill(value || 0));
  }

  //turns the array into an object baeed on callback 
  Array.prototype.occurrences  = function() {
    let counts = new Map();
    this.forEach((n: any) => counts.has(n) ? counts.set(n, counts.get(n) + 1) : counts.set(n, 1));
    return counts;
  }


let testArray = [2, 2, 2 ,2, 10, 10, 10, 10];
let testArray2 = [1, 2, 'b', 4, 5, 6, 7, 8, 9, 10, 'a'];

let x = testArray.uniqueBy();
x;
testArray2
testArray;
