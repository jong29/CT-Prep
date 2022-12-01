class HashTable {
    constructor(size){
      this.data = new Array(size);
    }
  
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }

    // don't forget about collisions
    set(key, value) {
        if (!this.data[this._hash(key)]){
            this.data[this._hash(key)] = [];
        }
        this.data[this._hash(key)].push([key, value]);
    }

    get(key) {
        const hashed = this.data[this._hash(key)];
        for (let i=0; i<hashed.length; i++){
            if (hashed[i][0] == key) {
                return hashed[i][1];
            }
        }
        console.log("item not found")
    }
}
  
const myHashTable = new HashTable(2);
myHashTable.set('grapes', 10000)
console.log(myHashTable.get('grapes'))
myHashTable.set('apples', 9)
console.log(myHashTable.get('apples'))
myHashTable.set('docko', 19)
console.log(myHashTable.get('docko'))
console.log(myHashTable.data);