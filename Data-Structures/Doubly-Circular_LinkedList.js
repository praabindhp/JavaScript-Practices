  class CircularDoubleLinkedList {
    push(element) {
        const node = this.createNode(element);

        if (!this.head) {
            this.head = node;
        } else {
            const current = this.getNodeAt(this.size - 1);
            current.next = node;
            node.prev = current;
        }

        this.tail = node;
        this.tail.next = this.head;

        this.size += 1;
        return this.size;
    }

    insert(element, index = 0) {
        if (index > this.size) return false;

        const node = this.createNode(element);

        if (index === 0) {
            if (this.head) {
                node.next = this.head;
                this.head.prev = node;
            } else {
                this.tail = node;
            }
            this.head = node;
            this.tail.next = this.head;
        } else if (index === this.size) {
            this.tail.next = node;
            node.prev = this.tail;
            node.next = this.head;
            this.tail = node;
        } else {
            const current = this.getNodeAt(index);
            const prev = current.prev;

            prev.next = node;
            current.prev = node;
            node.prev = prev;
            node.next = current;
        }

        this.size = this.size + 1;

        return true;
    }

    remove(index = 0) {
        if (index > this.size) return null;

        let removedNode = this.head;

        if (index === 0) {
            this.head = removedNode.next;
            if (this.size === 1) {
                this.tail = null;
            } else {
                this.head.prev = null;
                this.tail.next = this.head;
            }
        } else if (index === this.size - 1) {
            removedNode = this.tail;
            this.tail = removedNode.prev;
            this.tail.next = this.head;
        } else {
            removedNode = this.getNodeAt(index);
            const previous = removedNode.prev;
            const next = removedNode.next;

            previous.next = next;
            next.prev = previous;
        }

        this.size = this.size - 1;
        return removedNode;
    }
}

const list = new CircularDoubleLinkedList()

// Insert At Position, Delete At Given Position, Insert At Beginning, Delete At The End
while (true) {
    console.log("Howdy, Doubly Circular LinkedList Implementation !")
    console.log("Operations / Functions :")
    console.log("\n[1] : Insert At Beginning\n[2] : Insert At Position\n[3] : Delete At Position\n[4] : Display\n[ ] : Exit")
    let choice = readline.question("\nEnter Your Selection [1, 2, 3, 4] : ")
    if (choice == '1') {
        let val = readline.question("Enter The Value To Insert : ")
        list.insert(val)
    } else if (choice == '2') {
        list.delete();
        list.display();
    } else if (choice == '3') {
        list.peek()
    } else if (choice == '4') {
        list.display()
    } else {
        break;
    }
}