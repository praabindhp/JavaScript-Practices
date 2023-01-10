const readline = require('readline-sync')

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    prepend(value) {
        const node = new Node(value)

        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }

        this.size++
    }

    append(value) {
        const node = new Node(value)

        if (this.isEmpty()) {
            this.head = node

        } else {
            let previous = this.head
            while (previous.next) {
                previous = previous.next
            }
            previous.next = node
        }

        this.size++
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            return
        }
        if (index === 0) {
            this.prepend(value)
        } else {
            const node = new Node(value)
            let current = this.head
            for (let i = 0; i < index - 1; i++) {
                current = current.next
            }
            node.next = current.next
            current.next = node
            this.size++
        }
    }

    removeFrom(index) {
        if (index < 0 || index >= this.size) {
            console.log("No Element");
        }
        let removedNode
        if (index === 0) {
            removedNode = this.head
            this.head = this.head.next
        } else {
            let previous = this.head
            for (let i = 0; i < index - 1; i++) {
                previous = previous.next
            }
            removedNode = previous.next
            previous.next = removedNode.next
        }
        this.size--;
        return removedNode.value
    }

    display() {
        if (this.isEmpty()) {
            console.log("The LinkedList Is Empty");
        } else {
            let current = this.head
            let listValues = ''
            while (current) {
                listValues += `${current.value} `
                current = current.next
            }
            console.log(listValues)
        }
    }
}

const list = new LinkedList();
console.log("Is The LinkedList Empty : ", list.isEmpty());
console.log("Size Of The LinkedList : ", list.getSize());

list.display();
list.prepend(10);

list.display();
list.prepend(20);
list.display();

list.append(40);
list.display();

list.insert(50, 1);
list.display();

val = readline.question("Enter Data To Insert : ");
index = readline.question("Enter The Insertion Index : ");
list.insert(val, index - 1);
list.display();

index = readline.question("Enter The Removal Index : ");
list.removeFrom(index - 1);
list.display();