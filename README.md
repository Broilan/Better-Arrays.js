Better-Arrays.js Library
-----------------------------------------------------
INSTALL: npm i @broilan/better-arrays;

IMPORT: import '@broilan/better-arrays';

REQUIRE: require('@broilan/better-arrays');

NOTE: You only need to import this in one file. Once imported, you have global access to every method in the library, no matter what file you're working in.

```javascript
Array.prototype.shuffle();
--------------------------

type: shuffle(): Array<T>;
notes: returns the array, but shuffled;
mutates: true;

            ----- demo -----

        let arr = [1,2,3,4,5,6,7,8,9,10];

        arr.shuffle();
        output ---> [ 5, 1, 3, 2, 4, 7, 6, 10, 9, 8 ]

            ----- demo -----
```

```javascript
Array.prototype.chunk(n: number) 
--------------------------

type: chunk(n: number): Array<T>;
notes: returns an array of the input arrays values as arrays of length n;
mutates: false;

            ----- demo -----

        let arr = [1,2,3,4,5,6,7,8,9,10];

        arr.chunk(1);
        output ---> [ [ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 5 ], [ 6 ], [ 7 ], [ 8 ], [ 9 ], [ 10 ] ]

        arr.chunk(2);
        output ---> [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9, 10 ] ]

        arr.chunk(3);
        output ---> [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 10 ] ]

            ----- demo -----           
```

```javascript
Array.prototype.truthy()    
--------------------------

type: truthy(): Array<T>;
notes: returns an array of the arrays truthy values;
mutates: false;

            ----- demo -----      

        let arr = [1,2,3,4,5,6,7,8,9,10, undefined, false, 0];

        arr.truthy();
        output ---> [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]  

            ----- demo -----           


```

```javascript
Array.prototype.falsy()
--------------------------

type: falsy(): Array<T>;
notes: returns an array of the arrays falsy values;
mutates: false;

            ----- demo -----    

        let arr = [1,2,3,4,5,6,7,8,9,10, undefined, false, 0];

        arr.falsy();
        output ---> [ undefined, false, 0 ];

            ----- demo -----  

```

```javascript
Array.prototype.deepFlat()      
--------------------------

type: deepFlat(): Array<T>;
notes: returns an array of the arrays values, and flattens ALL, (excluding the outermost) brackets. Differs from Array.prototype.flat() in depth.;
mutates: false;
 
            ----- demo -----  

        let arr = [1,2,[3,[4,[5]]],6,[7,8],[9,[10]]];

        arr.deepFlat();
        output ---> [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

            ----- demo -----  

```

```javascript
Array.prototype.math(operand: string, number: number) 
--------------------------

type: math(operand: string, number?: number): Array<T>;
notes: first argument accepts +, -, *, /, %, sqrt, and pow, second argument accepts a number
mutates: false;

            ----- demo -----   
              
        let arr = [1,2,3,4,5,6,7,8,9,10];

        arr = arr.math('+', 1);
        output ---> [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]  
             
            ----- demo -----  

```
    
```javascript
Array.prototype.matrixMath(callback:Function, arr2: any[])       
--------------------------

type: matrixMath(callback: (n: number, i: number) => number, arr2: any[]): Array<T>;
notes: Applies an operation provided by the callback function to arr[i] and arr2[i]. Returns a map of the resulting values.;
mutates: false;
 
            ----- demo -----   

        let arr = [1,2,3,4,5,6,7,8,9,10];
        let arr2 = [1,2,3,4,5,6,7,8,9,10];

        arr = arr.matrixMath((a: number, b: number) => a + b, arr2);
        output ---> [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ];  

            ----- demo -----  

```

```javascript
Array.prototype.strictEq(arr2: any[])  
--------------------------

type: strictEq(arr2: any[]): boolean; 
notes: Determines whether or not two arrays have the same values at the same indeces. In other words, it strictly checks whether or not two arrays are the same.;
mutates: false;
 
            ----- demo -----      

        let arr = [1,2,3,4,5,6,7,8,9,10];
        let arr2 = [1,2,3,4,5,6,7,8,9,10];

        arr.strictEq(arr2);
        output ---> true

        let arrx = [1,2,3,4,5,6,7,8,9,11];

        arr.strictEq(arrx);
        output ---> false

            ----- demo -----    
```

```javascript
Array.prototype.looseEq(arr2: any[])
--------------------------

type: looseEq(arr2: any[]): boolean;
notes: Checks if two arrays possess the same values. Unlike Array.prototype.strictEq, this function is indifferent to the indeces the values occur at. However, if...
arr1.length !== arr2.length, it will return false.;    
mutates: false;
 
            ----- demo -----     

        let arr = [1,2,3,4,5,6,7,8,9,10];
        let arr2 = [2,1,4,3,6,5,7,8,9,10];

        arr.looseEq(arr2);
        output ---> true

        let arrx = [1,2,3,4,5,6,7,8,9,11];

        arr.looseEq(arrx);
        output ---> false

            ----- demo -----  
```

```javascript
Array.prototype.rotate(n: number)      
--------------------------

type: rotate(n: number): Array<T>;  
notes: Rotates each element of the array by n indeces. Accepts positive and negative integers extending from MAX_SAFE_INTEGER > n > MIN_SAFE_INTEGER;
mutates: true;
 
            ----- demo -----    

        let arr = [1,2,3,4,5,6,7,8,9,10];

        arr.rotate(1);
        output ---> [ 10, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

        arr.rotate(-1);
        output ---> [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 1 ]

        arr.rotate(2);
        output ---> [ 9, 10, 1, 2, 3, 4, 5, 6, 7, 8 ]

        arr.rotate(-2);
        output ---> [ 3, 4, 5, 6, 7, 8, 9, 10, 1, 2 ]  

            ----- demo -----  
```

```javascript
Array.prototype.move(from: number, to: number)    
--------------------------

type: move(from: number, to: number): Array<T>;
notes: Moves an element ---> arr[from] from one index to another. The element ---> arr[to] originally at index 'to' is moved one index to the left.  ;
mutates: true;
 
            ----- demo -----     

        let arr = [1,2,3,4,5,6,7,8,9,10];

        arr.move(1, 5);
        output ---> [ 1, 3, 4, 5, 6, 2, 7, 8, 9, 10 ]

            ----- demo -----  
```

```javascript
Array.prototype.swap(from: number, to: number)
--------------------------

type: swap(from: number, to: number): Array<T>;
notes: Swaps the indeces of two elements.;
mutates: true;
 
            ----- demo -----  

        let arr = [1,2,3,4,5,6,7,8,9,10];

        arr.swap(1, 5);
        output ---> [ 1, 6, 3, 4, 5, 2, 7, 8, 9, 10 ]

            ----- demo -----  
```

```javascript
Array.prototype.intersection(arr2: any[]) 
--------------------------

type: intersection(arr2: any[]): Array<T>;
notes: Returns an array of the elements held by both arrays.;
mutates: false;
 
            ----- demo -----     

        let arr = [1,'b',3,4,4,5,6,7,"a",9,10];
        let arr2 = [1,2,4,4,4,4,5,8,"a",10];

        arr = arr.intersection(arr2);
        output ---> [ 1, 4, 4, 5, 'a', 10 ]

            ----- demo -----  
```

```javascript
Array.prototype.unique()  
--------------------------

type: unique(): Array<T>;
notes: Returns an array of strictly unique values.;
mutates: false;
 
            ----- demo -----  
        let arr = [1,1,1,1,1,1,1,1,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10];

        arr = arr.unique();
        output ---> [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];  

            ----- demo -----  
```

```javascript
Array.prototype.uniqueBy(value: any)
--------------------------

type:uniqueBy(value: T): Array<T>;
notes: Returns an array where the value passed as an argument is reduced to only one occurrence.;
mutates: true;
 
            ----- demo -----  

        let arr = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10];

        arr.uniqueBy(1);
        output ---> [1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10];

            ----- demo -----  
```   

```javascript
Array.prototype.random()      
--------------------------

type: random(): T;
notes: Picks a random num from the array.;
mutates: false;
 
            ----- demo -----  

        let arr = [1,2,3,4,5,6,7,8,9,10];

        arr.random();

        output1 ---> 4
        output2 ---> 8
        output3 ---> 1    

            ----- demo -----  
```

```javascript
Array.prototype.nthIndex(n: number) 
--------------------------

type: nthIndex(n: number): Array<T>;
notes: Returns an array of the values at index % argument === 0;
mutates: false;
 
            ----- demo -----   
        let arr = [1,2,3,4,5,6,7,8,9,10];

        arr.nthIndex(1);
        output ---> [1,2,3,4,5,6,7,8,9,10]

        arr.nthIndex(2);
        output ---> [1,3,5,7,9]

        arr.nthIndex(3);
        output ---> [1,4,7,10] 

            ----- demo -----  
```

```javascript
Array.prototype.nthItem(n: number)
--------------------------

type: nthItem(n: number): Array<T>;
notes: N/A;
mutates: N/A
 
            ----- demo -----
            //in dev           
            ----- demo -----  
```

```javascript
Array.prototype.mean() 
--------------------------

type: mean(): number;
notes: Returns the average of an array of numbers.;
mutates: false;
 
            ----- demo -----  

        let arr = [1,2,3,4,5,6,7,8,9,10];

        arr.mean();
        output ---> 5.5

            ----- demo -----  
```

```javascript
Array.prototype.median()
--------------------------

type: median(): number;
notes: Returns the center of an array. If arr.length % 2 === 0, it returns the quotient of the sum of the two centermost numbers divided by two.;
mutates: false;
 
            ----- demo -----  

        let evenArr = [1,2,3,4,5,6,7,8,9,10];
        let oddArr = [1,2,3,4,5,6,7,8,9,10,11];

        evenArr.median();
        output ---> 5.5

        oddArr.median();
        output ---> 6   

            ----- demo -----  
```

```javascript
Array.prototype.mode()
--------------------------

type: mode(): Array<T> | number | null;
notes: Returns the number which occurs the most in an array. If two or more numbers are equivalent in their number of occurrences && they occur the most in the Array, an array of those numbers is returned.;
mutates: false;
 
            ----- demo -----    
        let uniqueArr = [1,2,3,4,5,6,7,8,9,10];
        let nonUniqueArr = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10];
        let oneNonUniqueArr = [1,2,3,4,5,6,7,8,9,10,1];

        uniqueArr.mode();
        output ---> undefined

        nonUniqueArr.mode();
        output ---> [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

        oneNonUniqueArr.mode();
        output ---> [ 1 ]  

            ----- demo -----  
```

```javascript
Array.prototype.range() 
--------------------------

type: range(): number;
notes: Returns the difference between the greatest and smallest numbers in an array.;
mutates: false;
 
            ----- demo -----    

        let arr = [1,2,3,4,5,6,7,8,9,10];

        arr.range();
        output ---> 9       

            ----- demo -----  
```

```javascript
Array.prototype.sd()
--------------------------

type: sd(): number;
notes: Returns the standard deviation of an array, or sqrt(Array.prototype.variance()).;
mutates: false;
 
            ----- demo ----- 

        let arr = [1,2,3,4,5,6,7,8,9,10];

        arr.sd();
        output ---> 2.8722813232690143   

            ----- demo -----  
```

  //finds the variance of an array
```javascript
Array.prototype.variance() 
--------------------------

type: variance(): number;
notes: Returns the variance in array, or Array.prototype.sd()^2.;
mutates: false;
 
            ----- demo -----  

        let arr = [1,2,3,4,5,6,7,8,9,10];

        arr.variance();
        output ---> 8.25   

            ----- demo -----  
```

```javascript
Array.prototype.tail(number:number)  
--------------------------

type: tail(number: number): Array<T>;
notes: returns a slice of n length extending from the end of an array.;
mutates: false;
 
            ----- demo -----  

        let arr = [1,2,3,4,5,6,7,8,9,10];

        arr.tail(1);
        output ---> [ 10 ]

        arr.tail(2);
        output ---> [ 9, 10 ]

        arr.tail(3);
        output ---> [ 8, 9, 10 ]  

            ----- demo -----  
```  

```javascript
Array.prototype.padStart(padding: number, value: any) 
--------------------------

type:  padStart(padding: number, value:any): Array<T>;
notes: Adds padding to the start of an array. Arg1 is the desired length of the array, and Arg2 is what you'd like to fill the extra spaces with.;
mutates: false;
 
            ----- demo -----   
        let arr = [1,2,3,4,5,6,7,8,9,10];

        arr.padStart(15, 4);
        output ---> [ 4, 4, 4, 4, 4, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

        arr.padStart(12, 0);
        output ---> [ 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]      

            ----- demo -----  
```

```javascript
Array.prototype.padEnd(padding: number, value: any)
--------------------------

type: padEnd(padding: number, value:any): Array<T>;
notes: Adds padding to the end of an array. Arg1 is the desired length of the array, and Arg2 is what you'd like to fill the extra spaces with.;
mutates: false;
 
            ----- demo -----      

         let arr = [1,2,3,4,5,6,7,8,9,10];

        arr.padEnd(15, 4);
        output ---> [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 4, 4, 4, 4, 4 ]

         arr.padEnd(12, 0);
        output ---> [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 0 ]   
          
            ----- demo -----  
```

```javascript
Array.prototype.occurrences() 
--------------------------

type: occurrences(): Map<T, number>;
notes: Returns a map of the occurrences of each number, arr[i] in an array.;
mutates: false;
 
            ----- demo -----  

        let arr = [1,2,3,4,5,6,7,8, 'a', 'a'];

        arr.occurrences();
        output ---> Map { 1 => 1, 2 => 1, 3 => 1, 4 => 1, 5 => 1, 6 => 1, 7 => 1, 8 => 1, 'a' => 2 }  

            ----- demo -----  
```
    
      
