declare global {
    interface Array<T> {
      shuffle(): Array<T>;
      chunk(n: number): Array<T>;
      truthy(): Array<T>;
      falsy(): Array<T>;
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
      move(from: number, to: number): Array<T>;
      swap(from: number, to: number): Array<T>;
      nthIndex(n: number): Array<T>;
      nthItem(n: number): Array<T>;
      strictEq(arr2: any[]): boolean;
      looseEq(arr2: any[]): boolean;
      rotate(n: number): Array<T>;
    }
  }
  
  export {};