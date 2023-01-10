import readline from "readline-sync";
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class CircularLinkedList {
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
            node.next = node;
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.next = this.head;
            this.tail = node;
        }
        this.size++;
    }
    print() {
        let tempNode = this.head;
        let listValues = '';
        do {
            listValues += `${tempNode.val} `;
            tempNode = tempNode.next;
        } while (tempNode != this.head)
        console.log(listValues);
    }
}

const Circularlist = new CircularLinkedList();

let data;
do {
    data = readline.question("Enter Data : ");
    if (data >= 0) {
        Circularlist.append(data);
        Circularlist.print();
    }
} while (data >= 0)