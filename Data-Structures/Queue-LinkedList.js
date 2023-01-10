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

    peek() {
        if (this.isEmpty()) {
            console.log("The Queue Is Empty");
        } else {
            console.log("Peek value is: " + this.head.value)
        }
    }

    insert(value) {
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

    display() {
        if (this.isEmpty()) {
            console.log("The Queue Is Empty");
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

while (true) {
    console.log("Howdy, Queue Using LinkedList Implementation !")
    console.log("Operations / Functions :")
    console.log("\n[1] : Insert\n[2] : Delete\n[3] : Peek\n[4] : Display\n[ ] : Exit")
    let choice = readline.question("\nEnter Your Selection [1, 2, 3, 4] : ")
    if (choice == '1') {
        let val = readline.question("Enter The Value To Insert : ")
        list.insert(val)
    } else if (choice == '2') {
        list.pop()
    } else if (choice == '3') {
        list.peek()
    } else if (choice == '4') {
        list.display()
    } else {
        break;
    }
}