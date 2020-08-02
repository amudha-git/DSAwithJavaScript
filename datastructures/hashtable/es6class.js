class HashMap {
  constructor(size = 120) {
    this.hashTable = new Array(size);
  }

  hash(key) {
    const primeNumber = 37;
    let total = 0,
      asciiCode;
    for (let i = 0; i < key.length; i++) {
      asciiCode = key.charCodeAt(i);
      total = (total * primeNumber + asciiCode) % this.hashTable.length;
    }
    return total;
  }

  set(key, value) {
    const index = this.hash(key);
    if (this.hashTable[index] === undefined) {
      this.hashTable[index] = [];
    }
    this.hashTable[index].push([key, value]);
    return index;
  }

  get(searchKey) {
    const index = this.hash(searchKey);
    const chain = this.hashTable[index];
    const [key, value] = chain.find(([key, value]) => searchKey === key);
    return value;
  }

  keys() {
    const hashTable = this.hashTable;
    const keys = hashTable
      .filter((chain) => chain !== undefined) // filtering empty indexes
      .flatMap(
        (
          chain // map through all the chains
        ) => chain.map(([key, value]) => key) // map through every pair in a chain
      );
    return keys;
  }

  values() {
    const hashTable = this.hashTable;
    const values = hashTable
      .filter((chain) => chain !== undefined)
      .map(
        // map is better than flatmap😅
        (chain) => chain.map(([key, value]) => value)[0]
      );
    return values;
  }
}

const fruits = new HashMap(10);

fruits.set("🍊", "orange"); // 4
fruits.set("🍏", "apple"); // 9
fruits.set("🍓", "strawberry"); // 3
fruits.set("🍒", "cherry"); // 2
fruits.set("🍍", "pineapple"); // 7
fruits.set("🍌", "banana"); // 6
fruits.set("🍉", "watermelon"); // 3
fruits.set("🍐", "pear"); // 0
fruits.set("🥭", "mango"); // 1

// hashTable: Array(10)
// 0: [Array(2)]
// 1: [Array(2)]
// 2: [Array(2)]
// 3: (2) [Array(2), Array(2)]
// 4: [Array(2)]
// 6: [Array(2)]
// 7: [Array(2)]
// 9: [Array(2)]
// length: 10

console.log(fruits.keys());
["🍐", "🥭", "🍒", "🍓", "🍉", "🍊", "🍌", "🍍", "🍏"];
console.log(fruits.values()); // [ 'pear','mango','cherry','strawberry','orange','banana','pineapple','apple' ]

console.log(fruits.get("🥭")); // mango
