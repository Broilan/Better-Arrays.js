/// <reference path="./index.d.ts" />

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
    return Array(Math.ceil(this.length / n)).fill(0).map((_: any, i: number) => this.slice(i * n, i * n + n));
}

// removes falsey values from array (mutates array)
Array.prototype.truthy = function() {
    return this.filter(Boolean);
}

//removes truthey values from array (mutates array)
Array.prototype.falsy = function() {
    return this.filter((n: any) => !n);
}

//completely flattens an array (creates new array)
Array.prototype.deepFlat = function() {
    return this.toString().split(',').map((n:any) => isNaN(Number(n)) ? n : Number(n));
}

// perform an operation on each index (mutates array)
Array.prototype.math = function(operand: string, number: number) {
    return this.map((n: any) => {
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
 Array.prototype.matrixMath = function(callback:Function, arr2: any[]) {
    return this.flatMap((n:any, i:number) => {
        if (typeof n === 'number' && typeof arr2[i] === 'number') {
            return callback(n, arr2[i]);
        } else return [n, arr2[i]];
    });
 }

 // returns whether or not two array are equal in size, index, and values
  Array.prototype.strictEq = function(arr2: any[]) {
    if(arr2.length !== this.length) return false;

    for(let i = 0; i < this.length; i++) {
      if(arr2[i] !== this[i]) return false;
    }

    return true;
  }

  //returns weather or not two arrays are equal in size, values
  Array.prototype.looseEq = function(arr2: any[]) {
    if(arr2.length !== this.length) return false;

    for(let i = 0; i < this.length; i++) {
      if(!arr2.includes(this[i])) return false;
    }

    return true;
  }

  //rotate the items of an array by n (mutates array)
  Array.prototype.rotate = function(n: number) {
    if(n > 0) {
      for(let i = 0; i < n; i++) {
        this.unshift(this.pop());
      }
    } else if(n < 0) {
      for(let i = 0; i > n; i--) {
        this.push(this.shift());
      }
    }
    return this;
  }

 //moves and item to a different index in an array (mutates array)
  Array.prototype.move = function(from: number, to: number) {
    this.splice(to, 0, this.splice(from, 1)[0]);
    return this;
  }

   // swap two indeces in an array (mutates array)
   Array.prototype.swap = function(from: number, to: number) {
    [this[from], this[to]] = [this[to], this[from]];
    return this;
  }

 //returns the intersection between two arrays (creates new array)
  Array.prototype.intersection = function(arr2: any[]) {
    let arr2copy = [...arr2];
    return this.filter((n: any) => {
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
  Array.prototype.uniqueBy = function(value: any) {
    while(this.indexOf(value) !== this.lastIndexOf(value) && this.length > 1) {
      this.splice(this.lastIndexOf(value), 1);
    };
    return this;
  }
  
  //picks a random element from an array 
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }

  //returns everyNth index of an array
  Array.prototype.nthIndex = function(n: number) {
    return this.filter((_: any, i: number) => i % n === 0);
  }

  //returns everyNth element of an array
  Array.prototype.nthItem = function(n: number) {
    return this.filter((x: number) => x % n === 0);
  }

  //finds the average of an array
  Array.prototype.mean = function() {
    return this.reduce((a: number, b: number) => a + b) / this.length;
  }

  //finds the median of an array
  Array.prototype.median = function() {
    let sorted = this.sort((a: number, b: number) => a - b);
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
    let sorted = this.sort((a: number, b: number) => a - b);
    return sorted[sorted.length - 1] - sorted[0];
  }

  //finds the standard deviation of an array
  Array.prototype.sd = function() {
    let mean = this.mean();
    let sum = this.reduce((a: number, b: number) => a + (b - mean) ** 2, 0);
    return Math.sqrt(sum / (this.length));
  }

  //finds the variance of an array
  Array.prototype.variance = function() {
    let mean = this.mean();
    let sum = this.reduce((a: number, b: number) => a + (b - mean) ** 2, 0);
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

  // shuffle
  // let arr = [1,2,3,4,5,6,7,8,9,10];
  // arr.shuffle();
  //output ---> [ 5, 1, 3, 2, 4, 7, 6, 10, 9, 8 ]

  // chunk
  // let arr = [1,2,3,4,5,6,7,8,9,10];
  // arr.chunk(1);
  //output ---> [ [ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 5 ], [ 6 ], [ 7 ], [ 8 ], [ 9 ], [ 10 ] ]
  // arr.chunk(2);
  //output ---> [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9, 10 ] ]
  // arr.chunk(3);
  //output ---> [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 10 ] ]

  //truthy
  // let arr = [1,2,3,4,5,6,7,8,9,10, undefined, false, 0];
  // arr.truthy();
  //output ---> [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

  //falsy
  // let arr = [1,2,3,4,5,6,7,8,9,10, undefined, false, 0];
  // arr.falsy();
  //output ---> [ undefined, false, 0 ];

  //deepFlat
  // let arr = [1,2,[3,[4,[5]]],6,[7,8],[9,[10]]];
  // arr.deepFlat();
  //deepFlat output ---> [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
  //vs
  //flat output ---> [ 1, 2, 3, [ 4, [Object] ], 6, [ 7, 8 ], [ 9, [ 10 ] ] ]

  //math
  //first argument accepts +, -, *, /, %, sqrt, and pow
  // let arr = [1,2,3,4,5,6,7,8,9,10];
  // arr = arr.math('+', 1);
  //output ---> [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]

  //matrixMath
  // let arr = [1,2,3,4,5,6,7,8,9,10];
  // let arr2 = [1,2,3,4,5,6,7,8,9,10];
  // arr = arr.matrixMath((a: number, b: number) => a + b, arr2);
  //output ---> [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ];

  //intersection
  // let arr = [1,'b',3,4,4,5,6,7,"a",9,10];
  // let arr2 = [1,2,4,4,4,4,5,8,"a",10];
  // arr = arr.intersection(arr2);
  //output ---> [ 1, 4, 4, 5, 'a', 10 ]

  //unique
  // let arr = [1,1,1,1,1,1,1,1,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10];
  // arr = arr.unique();
  //output ---> [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

  //uniqueBy (mutates)
  // let arr = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10];
  // arr.uniqueBy(1);
  //output ---> [1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10];

  //random
  // let arr = [1,2,3,4,5,6,7,8,9,10];
  // arr.random();
  //output1 ---> 4
  //output2 ---> 8
  //output3 ---> 1

  //mean
  // let arr = [1,2,3,4,5,6,7,8,9,10];
  // arr.mean();
  //output ---> 5.5

  //median
  // let evenArr = [1,2,3,4,5,6,7,8,9,10];
  // let oddArr = [1,2,3,4,5,6,7,8,9,10,11];
  // evenArr.median();
  //output ---> 5.5
  // oddArr.median();
  //output ---> 6

  // mode
  // let uniqueArr = [1,2,3,4,5,6,7,8,9,10];
  // let nonUniqueArr = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10];
  // let oneNonUniqueArr = [1,2,3,4,5,6,7,8,9,10,1];
  // uniqueArr.mode();
  //output ---> undefined
  // nonUniqueArr.mode();
  //output ---> [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
  // oneNonUniqueArr.mode();
  //output ---> [ 1 ]

  //range
  // let arr = [1,2,3,4,5,6,7,8,9,10];
  // arr.range();
  //output ---> 9

  //sd (standard deviation)
  // let arr = [1,2,3,4,5,6,7,8,9,10];
  // arr.sd();
  //output ---> 2.8722813232690143

  //variance
  // let arr = [1,2,3,4,5,6,7,8,9,10];
  // arr.variance();
  //output ---> 8.25

  //tail
  // let arr = [1,2,3,4,5,6,7,8,9,10];
  // arr.tail(1);
  //output ---> [ 10 ]
  // arr.tail(2);
  //output ---> [ 9, 10 ]
  // arr.tail(3);
  //output ---> [ 8, 9, 10 ]

  //padStart
  // let arr = [1,2,3,4,5,6,7,8,9,10];
  // arr.padStart(15, 4);
  //output ---> [ 4, 4, 4, 4, 4, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
  // arr.padStart(12, 0);
  //output ---> [ 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

  //padEnd
  // let arr = [1,2,3,4,5,6,7,8,9,10];
  // arr.padEnd(15, 4);
  //output ---> [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 4, 4, 4, 4, 4 ]
  // arr.padEnd(12, 0);
  //output ---> [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 0 ]

  //occurrences
  // let arr = [1,2,3,4,5,6,7,8, 'a', 'a'];
  // arr.occurrences();
  //output ---> Map { 1 => 1, 2 => 1, 3 => 1, 4 => 1, 5 => 1, 6 => 1, 7 => 1, 8 => 1, 'a' => 2 }

  //move
  // let arr = [1,2,3,4,5,6,7,8,9,10];
  // arr.move(1, 5);
  //output ---> [ 1, 3, 4, 5, 6, 2, 7, 8, 9, 10 ]
  // arr.move(0, 7);
  //output ---> [ 3, 4, 5, 6, 2, 7, 8, 1, 9, 10 ]

  //swap (mutates)
  // let arr = [1,2,3,4,5,6,7,8,9,10];
  // arr.swap(1, 5);
  //output ---> [ 1, 6, 3, 4, 5, 2, 7, 8, 9, 10 ]
  // arr.swap(0, 9); // this operation assumed the one above never happened. If you did these back to back, both mutations would be applied.
  //output ---> [ 10, 6, 3, 4, 5, 2, 7, 8, 9, 1 ]


  // nthIndex
  // let arr = [1,2,3,4,5,6,7,8,9,10];
  // arr.nthIndex(1);
  //output ---> [1,2,3,4,5,6,7,8,9,10]
  // arr.nthIndex(2);
  //output ---> [1,3,5,7,9]
  // arr.nthIndex(3);
  //output ---> [1,4,7,10]

 //come back to this later
  //nthItem 
  // let arr = [1, 1, 1, 2,3,4,5,6,7,8,9,10];
  // arr.nthItem(1);
  // arr.nthItem(2);

  //strictEq
  // let arr = [1,2,3,4,5,6,7,8,9,10];
  // let arr2 = [1,2,3,4,5,6,7,8,9,10];
  // arr.strictEq(arr2);
  //output ---> true
  // let arrx = [1,2,3,4,5,6,7,8,9,11];
  // arr.strictEq(arrx);
  //output ---> false

  //looseEq
  // let arr = [1,2,3,4,5,6,7,8,9,10];
  // let arr2 = [2,1,4,3,6,5,7,8,9,10];
  // arr.looseEq(arr2);
  //output ---> true
  // let arrx = [1,2,3,4,5,6,7,8,9,11];
  // arr.looseEq(arrx);
  //output ---> false

  //rotate
  // let arr = [1,2,3,4,5,6,7,8,9,10];
  // arr.rotate(1);
  //output ---> [ 10, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
  // arr.rotate(-1);
  //output ---> [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 1 ]
  // arr.rotate(2);
  //output ---> [ 9, 10, 1, 2, 3, 4, 5, 6, 7, 8 ]
  // arr.rotate(-2);
  //output ---> [ 3, 4, 5, 6, 7, 8, 9, 10, 1, 2 ]

