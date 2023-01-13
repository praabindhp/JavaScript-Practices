class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // add a node to the end of the list
    add(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    // remove a node from the list
    remove(data) {
        if (!this.head) {
            return;
        }
        if (this.head.data === data) {
            this.head = this.head.next;
            this.size--;
            return;
        }
        let current = this.head;
        let previous;
        while (current) {
            if (current.data === data) {
                previous.next = current.next;
                this.size--;
                return;
            }
            previous = current;
            current = current.next;
        }
    }

    // find the size of the list
    getSize() {
        return this.size;
    }

    // check if the list is empty
    isEmpty() {
        return this.size === 0;
    }

    // print the list
    print() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}