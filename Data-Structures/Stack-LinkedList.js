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

    push(value) {
        const node = new Node(value)

        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }

        this.size++
    }

    pop() {
        let removedNode
        removedNode = this.head
        this.head = this.head.next
        this.size--;
        console.log("The Pop Operation Has Been Performed !");
        console.log("The Value Removed By Pop Function : " + removedNode.value)
    }

    peek() {
        if (this.isEmpty()) {
            console.log("The Stack Is Empty");
        } else {
            console.log("Peek value is: " + this.head.value)
        }
    }

    display() {
        if (this.isEmpty()) {
            console.log("The Stack Is Empty");
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
console.log("Is The Stack Empty : ", list.isEmpty());
console.log("Size Of The Stack : ", list.getSize());

while (true) {
    let val = readline.question("Enter Data To Be Pushed: ");
    if (val == "") {
        console.log("The Stack Is Implemented")
        list.display();
        break;
    } else {
        list.push(val);
    }
}

list.peek()
list.pop()
list.display()