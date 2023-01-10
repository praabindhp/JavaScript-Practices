import readline from "readline-sync";

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    isEmpty() {
        return this.size == 0;
    }
    getSize() {
        return this.size;
    }
    append(val) {
        const node = new Node(val);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.size++;
    }
    print() {
        if (this.isEmpty()) {
            console.log("Doubly List is Empty");
        } else {
            let tempNode = this.head;
            let listValues = '';
            while (tempNode) {
                listValues += `${tempNode.val} `;
                tempNode = tempNode.next;
            }
            console.log(listValues);
        }
    }
}

const Doublylist = new DoublyLinkedList();
let data;
do {
    data = readline.question("Enter the data: ");
    if (data >= 0) {
        Doublylist.append(data);
        Doublylist.print();
    }
} while (data >= 0)