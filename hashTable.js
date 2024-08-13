class HashTable {
    constructor(size = 50) {
        // Initialize the hash table with a fixed size array
        this.table = new Array(size);
        this.size = size;
    }

    // Hash function: Converts a key into an index
    _hash(key) {
        let hash = 0;
        // Iterate over each character in the key
        for (let i = 0; i < key.length; i++) {
            // Sum up the character codes of each character in the key
            hash += key.charCodeAt(i);
        }
        // Return the index by taking the modulus of the size
        return hash % this.size;
    }

    // Method to add or update a value
    set(key, value) {
        // Get the index for the key using the hash function
        const index = this._hash(key);
        // If no entry exists at this index, initialize an empty array
        if (!this.table[index]) {
            this.table[index] = [];
        }

        // Check if the key already exists and if so, update the value
        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i][0] === key) {
                // Update the existing key with the new value
                this.table[index][i][1] = value;
                return;
            }
        }

        // If the key does not exist, add a new pair to the array
        this.table[index].push([key, value]);
    }

    // Method to retrieve a value
    get(key) {
        const index = this._hash(key);
        // If there is data at the index
        if (this.table[index]) {
            // Iterate over all the elements in the array
            for (let i = 0; i < this.table[index].length; i++) {
                // Find the element with the matching key
                if (this.table[index][i][0] === key) {
                    // Return the value
                    return this.table[index][i][1];
                }
            }
        }

        // Return undefined if the key is not found
        return undefined;
    }

    // Method to remove a key-value pair
    remove(key) {
        // Get the index for the key using the hash function
        const index = this._hash(key);
        // If there is data at the index
        if (this.table[index]) {
            // Loop through the array at this index to find the key
            for (let i = 0; i < this.table[index].length; i++) {
                if (this.table[index][i][0] === key) {
                    // Remove the key-value pair from the array
                    this.table[index].splice(i, 1);
                    return true; // Indicate that the removal was successful
                }
            }
        }
        return false; // Indicate that the key was not found
    }

    // Method to display the contents of the hash table
    display() {
        this.table.forEach((items, index) => {
            if (items) {
                // Loop through each key-value pair and log it to the console
                items.forEach(([key, value]) => {
                    console.log(`${index}: ${key} => ${value}`);
                });
            }
        });
    }
}

// Example usage of the hash table
const ht = new HashTable();
ht.set('name', 'Alice');
ht.set('age', 25);
ht.set('occupation', 'Engineer');
ht.display();

console.log('Get name:', ht.get('name')); // Alice
console.log('Get age:', ht.get('age')); // 25

ht.remove('age');
ht.display();
