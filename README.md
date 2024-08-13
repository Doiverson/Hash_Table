# Hash_Table

## What is a Hash Table?

A hash table is a data structure that allows you to store data in key-value pairs. It is highly efficient for searching, inserting, and deleting data, often doing so in constant time, O(1), on average.

## How Does a Hash Table Work?

1. Keys and Values

	• In a hash table, each piece of data is stored with a unique key. Think of the key as a label that helps you find the data later.
	• The key is used to generate a unique index where the corresponding value (the actual data) is stored in an array.

2. Hash Function

	• A hash function is used to convert a key into an index (a number) that corresponds to a location in the array.
	• For example, if your key is "name", the hash function might convert it to the number 5, which tells the hash table to store the value at index 5 in the array.

3. Inserting Data

	• When you add a key-value pair to the hash table, the key is passed through the hash function, which determines the index.
	• The value is then stored at the array index calculated by the hash function.

4. Searching for Data

	• To find a value, you provide the key, and the hash table uses the hash function to find the correct index.
	• The value at that index is then returned.

5. Handling Collisions

	• Sometimes, two different keys can produce the same index. This situation is known as a collision.
	• A common way to handle collisions is by storing multiple key-value pairs at the same index in a list (called chaining).

## Why Use a Hash Table?

• Fast Lookups: Hash tables provide fast lookups for data using a key, making them ideal for situations where quick access is needed.

• Efficient Use of Space: Although they use extra space for handling collisions, hash tables are generally space-efficient.

• Flexibility: You can store any type of data in a hash table, making it a versatile choice for many applications.