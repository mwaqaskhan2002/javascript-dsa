/*
17  Dictionary Prefix
Concept: Trie

Problem Statement

Design a dictionary supporting insertion and prefix search.

Input
Insert("apple")
Search("apple")
StartsWith("app")

Expected Output
true
true
*/
class TrieNode {
  constructor() {
    this.children = {}; // Har character ke liye agla node (e.g., {'a': Node, 'p': Node})
    this.isEndOfWord = false; // True agar yahan koi poora lafz khatam ho raha hai
  }
} 

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let currentNode = this.root;

    for (const char of word) {
      if (!currentNode.children[char]) {
        currentNode.children[char] = new TrieNode();
      }
      currentNode = currentNode.children[char];
    }
    currentNode.isEndOfWord = true;
  }

  search(word) {
    let currentNode = this.root;

    for (const char of word) {
      if (!currentNode.children[char]) {
        return false;
      }
      currentNode = currentNode.children[char];
    }
    currentNode.isEndOfWord = true;
  }

  startsWith(prefix) {
    let currentNode = this.root;

    for (const char of prefix) {
      if (!currentNode.children[char]) {
        return false;
      }
      currentNode = currentNode.children[char];
    }
    return true;
  }
}

const myTrie = new Trie();

myTrie.insert("apple");

console.log(myTrie.search("apple")); // Output: true
console.log(myTrie.search("app")); // Output: false (kyunki "app" alag se insert nahi kiya, woh sirf prefix hai)
console.log(myTrie.startsWith("app"));