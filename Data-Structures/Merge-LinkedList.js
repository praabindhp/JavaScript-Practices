class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

class List {
    constructor() {
        this.head = null;
    }

    append(value) {
        let newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        let point = this.head;
        while (point.next) {
            point = point.next;
        }
        point.next = newNode;
    }

    display() {
        let point = this.head;

        let output = "";

        while (point) {
            output += point.data + " ";
            point = point.next;
        }
        console.log(output);
    }

    merge(l2, position) {
        let point1 = this.head;

        let previous;

        let point2 = l2.head;

        let count = 1;
        while (count < position) {
            previous = point1;
            point1 = point1.next;
            count++;
        }

        while (point2.next) {
            point2 = point2.next;
        }
        point2.next = point1;

        if (position != 1) {
            previous.next = l2.head;
            return;
        }

        this.head = l2.head;
    }
}

let l1 = new List();
let l2 = new List();

l1.append(1);
l1.append(2);
l1.append(3);
l1.append(4);
l1.append(5);
l1.display();

l2.append(10);
l2.append(20);
l2.append(30);
l2.append(40);
l2.append(50);
l2.display();

l1.merge(l2, 1);
l1.display();