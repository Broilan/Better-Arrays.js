# Better-Arrays.js Library

## NPM

https://www.npmjs.com/package/@broilan/better-arrays?activeTab=readme

## INSTALL

npm i @broilan/better-arrays;

## IMPORT

import '@broilan/better-arrays';

## REQUIRE

require('@broilan/better-arrays');

## NOTE

You only need to import this in one file. Once imported, you have global access to every method in the library, no matter what file you're working in.

```javascript
Array.prototype.shuffle();
--------------------------

#Type: shuffle(): Array<T>;
#Notes: returns the array, but shuffled;
#Mutates: true;

    ----------------------- demo -----------------------

        let arr = [1,2,3,4,5,6,7,8,9,10];

        arr.shuffle();
        output ---> [ 5, 1, 3, 2, 4, 7, 6, 10, 9, 8 ]

    ----------------------- demo -----------------------
```

```javascript
Array.prototype.chunk(n: number) 
--------------------------

#Type: chunk(n: number): Array<T>;
#Notes: returns an array of the input arrays values as arrays of length n;
#Mutates: false;

    ----------------------- demo -----------------------

        let arr = [1,2,3,4,5,6,7,8,9,10];

        arr.chunk(1);
        output ---> [ [ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 5 ], [ 6 ], [ 7 ], [ 8 ], [ 9 ], [ 10 ] ]

        arr.chunk(2);
        output ---> [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9, 10 ] ]

        arr.chunk(3);
        output ---> [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 10 ] ]

    ----------------------- demo -----------------------
```

```javascript
Array.prototype.truthy()    
--------------------------

#Type: truthy(): Array<T>;
#Notes: returns an array of the arrays truthy values;
#Mutates: false;

    ----------------------- demo -----------------------

        let arr = [1,2,3,4,5,6,7,8,9,10, undefined, false, 0];

        arr.truthy();
        output ---> [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]  

    ----------------------- demo -----------------------


```

```javascript
Array.prototype.falsy()
--------------------------

#Type: falsy(): Array<T>;
#Notes: returns an array of the arrays falsy values;
#Mutates: false;

    ----------------------- demo -----------------------

        let arr = [1,2,3,4,5,6,7,8,9,10, undefined, false, 0];

        arr.falsy();
        output ---> [ undefined, false, 0 ];

    ----------------------- demo -----------------------

```

```javascript
Array.prototype.deepFlat()      
--------------------------

#Type: deepFlat(): Array<T>;
#Notes: returns an array of the arrays values, and flattens ALL, (excluding the outermost) brackets. Differs from Array.prototype.flat() in depth.;
#Mutates: false;
 
    ----------------------- demo -----------------------

        let arr = [1,2,[3,[4,[5]]],6,[7,8],[9,[10]]];

        arr.deepFlat();
        output ---> [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

    ----------------------- demo -----------------------

```

```javascript
Array.prototype.math(operand: string, number: number) 
--------------------------

#Type: math(operand: string, number?: number): Array<T>;
#Notes: first argument accepts +, -, *, /, %, sqrt, and pow, second argument accepts a number
#Mutates: false;

    ----------------------- demo -----------------------
              
        let arr = [1,2,3,4,5,6,7,8,9,10];

        arr = arr.math('+', 1);
        output ---> [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]  
             
    ----------------------- demo -----------------------

```
    
```javascript
Array.prototype.matrixMath(callback:Function, arr2: any[])       
--------------------------

#Type: matrixMath(callback: (n: number, i: number) => number, arr2: any[]): Array<T>;
#Notes: Applies an operation provided by the callback function to arr[i] and arr2[i]. Returns a map of the resulting values.;
#Mutates: false;
 
    ----------------------- demo -----------------------

        let arr = [1,2,3,4,5,6,7,8,9,10];
        let arr2 = [1,2,3,4,5,6,7,8,9,10];

        arr = arr.matrixMath((a: number, b: number) => a + b, arr2);
        output ---> [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ];  

    ----------------------- demo -----------------------

```

```javascript
Array.prototype.strictEq(arr2: any[])  
--------------------------

#Type: strictEq(arr2: any[]): boolean; 
#Notes: Determines whether or not two arrays have the same values at the same indeces. In other words, it strictly checks whether or not two arrays are the same.;
#Mutates: false;
 
    ----------------------- demo -----------------------

        let arr = [1,2,3,4,5,6,7,8,9,10];
        let arr2 = [1,2,3,4,5,6,7,8,9,10];

        arr.strictEq(arr2);
        output ---> true

        let arrx = [1,2,3,4,5,6,7,8,9,11];

        arr.strictEq(arrx);
        output ---> false

    ----------------------- demo -----------------------
```

```javascript
Array.prototype.looseEq(arr2: any[])
--------------------------

#Type: looseEq(arr2: any[]): boolean;
#Notes: Checks if two arrays possess the same values. Unlike Array.prototype.strictEq, this function is indifferent to the indeces the values occur at. However, if...
arr1.length !== arr2.length, it will return false.;    
#Mutates: false;
 
    ----------------------- demo -----------------------

        let arr = [1,2,3,4,5,6,7,8,9,10];
        let arr2 = [2,1,4,3,6,5,7,8,9,10];

        arr.looseEq(arr2);
        output ---> true

        let arrx = [1,2,3,4,5,6,7,8,9,11];

        arr.looseEq(arrx);
        output ---> false

    ----------------------- demo -----------------------
```

```javascript
Array.prototype.rotate(n: number)      
--------------------------

#Type: rotate(n: number): Array<T>;  
#Notes: Rotates each element of the array by n indeces. Accepts both positive and negative integers;
#Mutates: true;
 
    ----------------------- demo -----------------------

        let arr = [1,2,3,4,5,6,7,8,9,10];

        arr.rotate(1);
        output ---> [ 10, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

        arr.rotate(-1);
        output ---> [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 1 ]

        arr.rotate(2);
        output ---> [ 9, 10, 1, 2, 3, 4, 5, 6, 7, 8 ]

        arr.rotate(-2);
        output ---> [ 3, 4, 5, 6, 7, 8, 9, 10, 1, 2 ]  

    ----------------------- demo -----------------------
```

```javascript
Array.prototype.move(from: number, to: number)    
--------------------------

#Type: move(from: number, to: number): Array<T>;
#Notes: Moves an element ---> arr[from] from one index to another. The element ---> arr[to] originally at index 'to' is moved one index to the left.  ;
#Mutates: true;
 
    ----------------------- demo -----------------------

        let arr = [1,2,3,4,5,6,7,8,9,10];

        arr.move(1, 5);
        output ---> [ 1, 3, 4, 5, 6, 2, 7, 8, 9, 10 ]

    ----------------------- demo -----------------------
```

```javascript
Array.prototype.swap(from: number, to: number)
--------------------------

#Type: swap(from: number, to: number): Array<T>;
#Notes: Swaps the indeces of two elements.;
#Mutates: true;
 
    ----------------------- demo -----------------------

        let arr = [1,2,3,4,5,6,7,8,9,10];

        arr.swap(1, 5);
        output ---> [ 1, 6, 3, 4, 5, 2, 7, 8, 9, 10 ]

    ----------------------- demo -----------------------
```

```javascript
Array.prototype.intersection(arr2: any[]) 
--------------------------

#Type: intersection(arr2: any[]): Array<T>;
#Notes: Returns an array of the elements held by both arrays.;
#Mutates: false;
 
    ----------------------- demo -----------------------

        let arr = [1,'b',3,4,4,5,6,7,"a",9,10];
        let arr2 = [1,2,4,4,4,4,5,8,"a",10];

        arr = arr.intersection(arr2);
        output ---> [ 1, 4, 4, 5, 'a', 10 ]

    ----------------------- demo -----------------------
```

```javascript
Array.prototype.unique()  
--------------------------

#Type: unique(): Array<T>;
#Notes: Returns an array of strictly unique values.;
#Mutates: false;
 
    ----------------------- demo -----------------------
        let arr = [1,1,1,1,1,1,1,1,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10];

        arr = arr.unique();
        output ---> [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];  

    ----------------------- demo -----------------------
```

```javascript
Array.prototype.uniqueBy(value: any)
--------------------------

#Type: uniqueBy(value: T): Array<T>;
#Notes: Returns an array where the value passed as an argument is reduced to only one occurrence.;
#Mutates: true;
 
    ----------------------- demo -----------------------

        let arr = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10];

        arr.uniqueBy(1);
        output ---> [1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10];

    ----------------------- demo -----------------------
```   

```javascript
Array.prototype.random()      
--------------------------

#Type: random(): T;
#Notes: Picks a random num from the array.;
#Mutates: false;
 
    ----------------------- demo -----------------------

        let arr = [1,2,3,4,5,6,7,8,9,10];

        arr.random();

        output1 ---> 4
        output2 ---> 8
        output3 ---> 1    

    ----------------------- demo -----------------------
```

```javascript
Array.prototype.nthIndex(n: number) 
--------------------------

#Type: nthIndex(n: number): Array<T>;
#Notes: Returns an array of the values at index % argument === 0;
#Mutates: false;
 
    ----------------------- demo -----------------------
        let arr = [1,2,3,4,5,6,7,8,9,10];

        arr.nthIndex(1);
        output ---> [1,2,3,4,5,6,7,8,9,10]

        arr.nthIndex(2);
        output ---> [1,3,5,7,9]

        arr.nthIndex(3);
        output ---> [1,4,7,10] 

    ----------------------- demo -----------------------
```

```javascript
Array.prototype.nthItem(n: number)
--------------------------

#Type: nthItem(n: number): Array<T>;
#Notes: N/A;
#Mutates: N/A
 
    ----------------------- demo -----------------------
            //in dev           
    ----------------------- demo -----------------------
```

```javascript
Array.prototype.mean() 
--------------------------

#Type: mean(): number;
#Notes: Returns the average of an array of numbers.;
#Mutates: false;
 
    ----------------------- demo -----------------------

        let arr = [1,2,3,4,5,6,7,8,9,10];

        arr.mean();
        output ---> 5.5

    ----------------------- demo -----------------------
```

```javascript
Array.prototype.median()
--------------------------

#Type: median(): number;
#Notes: Returns the center of an array. If arr.length % 2 === 0, it returns the quotient of the sum of the two centermost numbers divided by two.;
#Mutates: false;
 
    ----------------------- demo -----------------------

        let evenArr = [1,2,3,4,5,6,7,8,9,10];
        let oddArr = [1,2,3,4,5,6,7,8,9,10,11];

        evenArr.median();
        output ---> 5.5

        oddArr.median();
        output ---> 6   

    ----------------------- demo -----------------------
```

```javascript
Array.prototype.mode()
--------------------------

#Type: mode(): Array<T> | number | null;
#Notes: Returns the number which occurs the most in an array. If two or more numbers are equivalent in their number of occurrences && they occur the most in the Array, an array of those numbers is returned.;
#Mutates: false;
 
    ----------------------- demo -----------------------
        let uniqueArr = [1,2,3,4,5,6,7,8,9,10];
        let nonUniqueArr = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10];
        let oneNonUniqueArr = [1,2,3,4,5,6,7,8,9,10,1];

        uniqueArr.mode();
        output ---> undefined

        nonUniqueArr.mode();
        output ---> [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

        oneNonUniqueArr.mode();
        output ---> [ 1 ]  

    ----------------------- demo -----------------------
```

```javascript
Array.prototype.range() 
--------------------------

#Type: range(): number;
#Notes: Returns the difference between the greatest and smallest numbers in an array.;
#Mutates: false;
 
    ----------------------- demo -----------------------

        let arr = [1,2,3,4,5,6,7,8,9,10];

        arr.range();
        output ---> 9       

    ----------------------- demo -----------------------
```

```javascript
Array.prototype.sd()
--------------------------

#Type: sd(): number;
#Notes: Returns the standard deviation of an array, or sqrt(Array.prototype.variance()).;
#Mutates: false;
 
    ----------------------- demo -----------------------

        let arr = [1,2,3,4,5,6,7,8,9,10];

        arr.sd();
        output ---> 2.8722813232690143   

    ----------------------- demo -----------------------
```

```javascript
Array.prototype.variance() 
--------------------------

#Type: variance(): number;
#Notes: Returns the variance in array, or Array.prototype.sd()^2.;
#Mutates: false;
 
    ----------------------- demo -----------------------

        let arr = [1,2,3,4,5,6,7,8,9,10];

        arr.variance();
        output ---> 8.25   

    ----------------------- demo -----------------------
```

```javascript
Array.prototype.tail(number:number)  
--------------------------

#Type: tail(number: number): Array<T>;
#Notes: returns a slice of n length extending from the end of an array.;
#Mutates: false;
 
    ----------------------- demo -----------------------

        let arr = [1,2,3,4,5,6,7,8,9,10];

        arr.tail(1);
        output ---> [ 10 ]

        arr.tail(2);
        output ---> [ 9, 10 ]

        arr.tail(3);
        output ---> [ 8, 9, 10 ]  

    ----------------------- demo -----------------------
```  

```javascript
Array.prototype.padStart(padding: number, value: any) 
--------------------------

#Type:  padStart(padding: number, value:any): Array<T>;
#Notes: Adds padding to the start of an array. Arg1 is the desired length of the array, and Arg2 is what you'd like to fill the extra spaces with.;
#Mutates: false;
 
    ----------------------- demo -----------------------
        let arr = [1,2,3,4,5,6,7,8,9,10];

        arr.padStart(15, 4);
        output ---> [ 4, 4, 4, 4, 4, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

        arr.padStart(12, 0);
        output ---> [ 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]      

    ----------------------- demo -----------------------
```

```javascript
Array.prototype.padEnd(padding: number, value: any)
--------------------------

#Type: padEnd(padding: number, value:any): Array<T>;
#Notes: Adds padding to the end of an array. Arg1 is the desired length of the array, and Arg2 is what you'd like to fill the extra spaces with.;
#Mutates: false;
 
    ----------------------- demo -----------------------

         let arr = [1,2,3,4,5,6,7,8,9,10];

        arr.padEnd(15, 4);
        output ---> [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 4, 4, 4, 4, 4 ]

         arr.padEnd(12, 0);
        output ---> [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 0 ]   
          
    ----------------------- demo -----------------------
```

```javascript
Array.prototype.occurrences() 
--------------------------

#Type: occurrences(): Map<T, number>;
#Notes: Returns a map of the occurrences of each number, arr[i] in an array.;
#Mutates: false;
 
    ----------------------- demo -----------------------

        let arr = [1,2,3,4,5,6,7,8, 'a', 'a'];

        arr.occurrences();
        output ---> Map { 1 => 1, 2 => 1, 3 => 1, 4 => 1, 5 => 1, 6 => 1, 7 => 1, 8 => 1, 'a' => 2 }  

    ----------------------- demo -----------------------
```
    
      
