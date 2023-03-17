class TrieNode {
    constructor() {
    this.children = {}
    this.endWord = false
    }
}

var Trie = function() {
    this.root = new TrieNode()
};

Trie.prototype.insert = function(word) {
    let curr = this.root
    for(let cha of word) {
        if(!curr.children[cha]) {
             curr.children[cha] = new TrieNode()
        } 
        curr = curr.children[cha]
    }
    curr.endWord = true
};

Trie.prototype.search = function(word) {
    let curr = this.root
    for(let cha of word) {
        if(!curr.children[cha]) {
            return false
        }
        curr = curr.children[cha]
    }
    return (curr.endWord == true) ? true : false
};

Trie.prototype.startsWith = function(prefix) {
    let curr = this.root
    for(let cha of prefix) {
        if(!curr.children[cha]) {
            return false
        }
        curr = curr.children[cha]
    }
    return true
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */