

// shuffles array in place
```javascript
prototype: Array.prototype.shuffle();
type: shuffle(): Array<T>;
notes: N/A;
mutates: 

            ----- demo -----

        let arr = [1,2,3,4,5,6,7,8,9,10];

        arr.shuffle();
        output ---> [ 5, 1, 3, 2, 4, 7, 6, 10, 9, 8 ]

            ----- demo -----
```

// breaks array into chunks of size n
```javascript
prototype: Array.prototype.chunk(n: number)     
type: chunk(n: number): Array<T>;
notes: N/A;
mutates: 

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

// removes falsy values from array
```javascript
prototype: Array.prototype.truthy()      
type: truthy(): Array<T>;
notes: N/A;
mutates:

            ----- demo -----      

        let arr = [1,2,3,4,5,6,7,8,9,10, undefined, false, 0];

        arr.truthy();
        output ---> [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]  

            ----- demo -----           


```

//removes truthy values from array
```javascript
prototype: Array.prototype.falsy()      
type: falsy(): Array<T>;
notes: N/A;
mutates:
 
            ----- demo -----    

        let arr = [1,2,3,4,5,6,7,8,9,10, undefined, false, 0];

        arr.falsy();
        output ---> [ undefined, false, 0 ];

            ----- demo -----  

```

//completely flattens an array
```javascript
prototype: Array.prototype.deepFlat()      
type: deepFlat(): Array<T>;
notes: N/A;
mutates:
 
            ----- demo -----  

        let arr = [1,2,[3,[4,[5]]],6,[7,8],[9,[10]]];

        arr.deepFlat();
        output ---> [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

            ----- demo -----  

```

// perform an operation on each index
```javascript
prototype: Array.prototype.math(operand: string, number: number)     
type: math(operand: string, number?: number): Array<T>;
notes: first argument accepts +, -, *, /, %, sqrt, and pow, second argument accepts a number
mutates:
 
            ----- demo -----   
              
        let arr = [1,2,3,4,5,6,7,8,9,10];

        arr = arr.math('+', 1);
        output ---> [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]  
             
            ----- demo -----  

```
    
 // perform an operation between two indeces of two arrays
```javascript
prototype: Array.prototype.matrixMath(callback:Function, arr2: any[])       
type: matrixMath(callback: (n: number, i: number) => number, arr2: any[]): Array<T>;
notes: N/A;
mutates:
 
            ----- demo -----   

        let arr = [1,2,3,4,5,6,7,8,9,10];
        let arr2 = [1,2,3,4,5,6,7,8,9,10];

        arr = arr.matrixMath((a: number, b: number) => a + b, arr2);
        output ---> [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ];  

            ----- demo -----  

```

 // returns whether or not two array are equal in size, index, and values
```javascript
prototype: Array.prototype.strictEq(arr2: any[])  
type: strictEq(arr2: any[]): boolean; 
notes: N/A;
mutates:
 
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

  //returns weather or not two arrays are equal in size, values
```javascript
prototype: Array.prototype.looseEq(arr2: any[])
type: looseEq(arr2: any[]): boolean;
notes: N/A;
mutates:
 
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

  //rotate the items of an array by n
```javascript
prototype: Array.prototype.rotate(n: number)       
type: rotate(n: number): Array<T>;  
notes: N/A;
mutates:
 
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

 //moves and item to a different index in an array
```javascript
prototype: Array.prototype.move(from: number, to: number)     
type: move(from: number, to: number): Array<T>;
notes: N/A;
mutates:
 
            ----- demo -----     

        let arr = [1,2,3,4,5,6,7,8,9,10];

        arr.move(1, 5);
        output ---> [ 1, 3, 4, 5, 6, 2, 7, 8, 9, 10 ]

        arr.move(0, 7);
        output ---> [ 3, 4, 5, 6, 2, 7, 8, 1, 9, 10 ]  

            ----- demo -----  
```

   // swap two indeces in an array
```javascript
prototype: Array.prototype.swap(from: number, to: number)
type: swap(from: number, to: number): Array<T>;
notes: N/A;
mutates:
 
            ----- demo -----  

        let arr = [1,2,3,4,5,6,7,8,9,10];

        arr.swap(1, 5);
        output ---> [ 1, 6, 3, 4, 5, 2, 7, 8, 9, 10 ]

        arr.swap(0, 9); // this operation assumes the one above never happened. If you did these back to back, both 'mutations' would be applied.
        output ---> [ 10, 6, 3, 4, 5, 2, 7, 8, 9, 1 ]  

            ----- demo -----  
```

 //returns the intersection between two arrays
```javascript
prototype: Array.prototype.intersection(arr2: any[]) 
type: intersection(arr2: any[]): Array<T>;
notes: N/A;
mutates:
 
            ----- demo -----     

         let arr = [1,'b',3,4,4,5,6,7,"a",9,10];
        let arr2 = [1,2,4,4,4,4,5,8,"a",10];

        arr = arr.intersection(arr2);
        output ---> [ 1, 4, 4, 5, 'a', 10 ]

            ----- demo -----  
```

  //returns array as a unique set
```javascript
prototype: Array.prototype.unique()       
type: unique(): Array<T>;
notes: N/A;
mutates:
 
            ----- demo -----  
        let arr = [1,1,1,1,1,1,1,1,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10];

        arr = arr.unique();
        output ---> [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];  

            ----- demo -----  
```

  //removes all instances of a value except one
```javascript
prototype: Array.prototype.uniqueBy(value: any)
type:uniqueBy(value: T): Array<T>;
notes: N/A;
mutates:
 
            ----- demo -----  

        let arr = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10];

        arr.uniqueBy(1);
        output ---> [1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10];

            ----- demo -----  
```   

  //picks a random element from an array 
```javascript
prototype: Array.prototype.random()      
type: random(): T;
notes: N/A;
mutates:
 
            ----- demo -----  

        let arr = [1,2,3,4,5,6,7,8,9,10];

        arr.random();

        output1 ---> 4
        output2 ---> 8
        output3 ---> 1    

            ----- demo -----  
```

  //returns everyNth element of an array
```javascript
prototype: Array.prototype.nthIndex(n: number) 
type: nthIndex(n: number): Array<T>;
notes: N/A;
mutates:
 
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

  //returns everyNth element of an array
```javascript
prototype: Array.prototype.nthItem(n: number)
type: nthItem(n: number): Array<T>;
notes: N/A;
mutates:
 
            ----- demo -----
            //in dev           
            ----- demo -----  
```

  //finds the average of an array
```javascript
prototype: Array.prototype.mean() 
type: mean(): number;
notes: N/A;
mutates:
 
            ----- demo -----  

        let arr = [1,2,3,4,5,6,7,8,9,10];

        arr.mean();
        output ---> 5.5

            ----- demo -----  
```

  //finds the median of an array
```javascript
prototype: Array.prototype.median()
type: median(): number;
notes: N/A;
mutates:
 
            ----- demo -----  

        let evenArr = [1,2,3,4,5,6,7,8,9,10];
        let oddArr = [1,2,3,4,5,6,7,8,9,10,11];

        evenArr.median();
        output ---> 5.5

        oddArr.median();
        output ---> 6   

            ----- demo -----  
```

  //finds the mode of an array
```javascript
prototype: Array.prototype.mode()
type: mode(): Array<T> | number | null;
notes: N/A;
mutates:
 
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

  //finds the range of an array
```javascript
prototype: Array.prototype.range() 
type: range(): number;
notes: N/A;
mutates:
 
            ----- demo -----    

        let arr = [1,2,3,4,5,6,7,8,9,10];

        arr.range();
        output ---> 9       

            ----- demo -----  
```

  //finds the standard deviation of an array
```javascript
prototype: Array.prototype.sd()
type: sd(): number;
notes: N/A;
mutates:
 
            ----- demo ----- 

        let arr = [1,2,3,4,5,6,7,8,9,10];

        arr.sd();
        output ---> 2.8722813232690143   

            ----- demo -----  
```

  //finds the variance of an array
```javascript
prototype: Array.prototype.variance() 
type: variance(): number;
notes: N/A;
mutates:
 
            ----- demo -----  

        let arr = [1,2,3,4,5,6,7,8,9,10];

        arr.variance();
        output ---> 8.25   

            ----- demo -----  
```

  //returns a slice 'n' indeces from the end of an array
```javascript
prototype: Array.prototype.tail(number:number)  
type: tail(number: number): Array<T>;
notes: N/A;
mutates:
 
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

  //add padding to the start of an array
```javascript
prototype: Array.prototype.padStart(padding: number, value: any) 
type:  padStart(padding: number, value:any): Array<T>;
notes: N/A;
mutates:
 
            ----- demo -----   
        let arr = [1,2,3,4,5,6,7,8,9,10];

        arr.padStart(15, 4);
        output ---> [ 4, 4, 4, 4, 4, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

        arr.padStart(12, 0);
        output ---> [ 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]      

            ----- demo -----  
```

  //add padding to the end
```javascript
prototype: Array.prototype.padEnd(padding: number, value: any)
type: padEnd(padding: number, value:any): Array<T>;
notes: N/A;
mutates:
 
            ----- demo -----      

         let arr = [1,2,3,4,5,6,7,8,9,10];

        arr.padEnd(15, 4);
        output ---> [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 4, 4, 4, 4, 4 ]

         arr.padEnd(12, 0);
        output ---> [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 0 ]   
          
            ----- demo -----  
```

  //returns a map of the occurrences of each element 
```javascript
prototype: Array.prototype.occurrences() 
type: occurrences(): Map<T, number>;
notes: N/A;
mutates:
 
            ----- demo -----  

        let arr = [1,2,3,4,5,6,7,8, 'a', 'a'];

        arr.occurrences();
        output ---> Map { 1 => 1, 2 => 1, 3 => 1, 4 => 1, 5 => 1, 6 => 1, 7 => 1, 8 => 1, 'a' => 2 }  

            ----- demo -----  
```
    
      