Better-Arrays.js Library
-----------------------------------------------------
INSTALL: npm i @broilan/better-arrays;

IMPORT: import '@broilan/better-arrays';

REQUIRE: require('@broilan/better-arrays');

NOTE: You only need to import this in one file. Once imported, you have global access to every method in the library, no matter what file you're working in.

// shuffles array in place (mutates array)
```javascript
prototype: Array.prototype.shuffle()
type: shuffle(): Array<T>;
```

// breaks array into chunks of size n (creates new array)
```javascript
prototype: Array.prototype.chunk(n: number)     
type: chunk(n: number): Array<T>;

```

// removes falsy values from array (mutates array)
```javascript
prototype: Array.prototype.truthy()      
type: truthy(): Array<T>;

```

//removes truthy values from array (mutates array)
```javascript
prototype: Array.prototype.falsy()      
type: falsy(): Array<T>;

```

//completely flattens an array (creates new array)
```javascript
prototype: Array.prototype.deepFlat()      
type: deepFlat(): Array<T>;

```

// perform an operation on each index (mutates array)
```javascript
prototype: Array.prototype.math(operand: string, number: number)     
type: math(operand: string, number?: number): Array<T>;

```
    
 // perform an operation between two indeces of two arrays (creates new array)
```javascript
prototype: Array.prototype.matrixMath(callback:Function, arr2: any[])       
type: matrixMath(callback: (n: number, i: number) => number, arr2: any[]): Array<T>;

```

 // returns whether or not two array are equal in size, index, and values
```javascript
prototype: Array.prototype.strictEq(arr2: any[])  
type: strictEq(arr2: any[]): boolean;     
```

  //returns weather or not two arrays are equal in size, values
```javascript
prototype: Array.prototype.looseEq(arr2: any[])
type: looseEq(arr2: any[]): boolean;
```

  //rotate the items of an array by n (mutates array)
```javascript
prototype: Array.prototype.rotate(n: number)       
type: rotate(n: number): Array<T>;  
```

 //moves and item to a different index in an array (mutates array)
```javascript
prototype: Array.prototype.move(from: number, to: number)     
type: move(from: number, to: number): Array<T>;
```

   // swap two indeces in an array (mutates array)
```javascript
prototype: Array.prototype.swap(from: number, to: number)
type: swap(from: number, to: number): Array<T>;
```

 //returns the intersection between two arrays (creates new array)
```javascript
prototype: Array.prototype.intersection(arr2: any[]) 
type: intersection(arr2: any[]): Array<T>;
```

  //returns array as a unique set (creates new array)
```javascript
prototype: Array.prototype.unique()       
type: unique(): Array<T>;
```

  //removes all instances of a value except one
```javascript
prototype: Array.prototype.uniqueBy(value: any)
type:uniqueBy(value: T): Array<T>;
```   

  //picks a random element from an array 
```javascript
prototype: Array.prototype.random()      
type: random(): T;
```

  //returns everyNth element of an array
```javascript
prototype: Array.prototype.nthIndex(n: number) 
type: nthIndex(n: number): Array<T>;   
```

  //returns everyNth element of an array
```javascript
prototype: Array.prototype.nthItem(n: number)
type: nthItem(n: number): Array<T>;
```

  //finds the average of an array
```javascript
prototype: Array.prototype.mean() 
type: mean(): number;
```

  //finds the median of an array
```javascript
prototype: Array.prototype.median()
type: median(): number;
```

  //finds the mode of an array
```javascript
prototype: Array.prototype.mode()
type: mode(): Array<T> | number | null;
```

  //finds the range of an array
```javascript
prototype: Array.prototype.range() 
type: range(): number;
```

  //finds the standard deviation of an array
```javascript
prototype: Array.prototype.sd()
type: sd(): number;
```

  //finds the variance of an array
```javascript
prototype: Array.prototype.variance() 
type: variance(): number;
```

  //returns the end of an array
```javascript
prototype: Array.prototype.tail(number:number)  
type: tail(number: number): Array<T>;
```  

  //add padding to the start of an array
```javascript
prototype: Array.prototype.padStart(padding: number, value: any) 
type:  padStart(padding: number, value:any): Array<T>;
```

  //add padding to the end
```javascript
prototype: Array.prototype.padEnd(padding: number, value: any)
type: padEnd(padding: number, value:any): Array<T>;
```

  //turns the array into an object baeed on callback 
```javascript
prototype: Array.prototype.occurrences() 
type: occurrences(): Map<T, number>;
```
    
      
