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

    removeDuplicates() {
        let masterpoint = this.head;
        let point;

        while (masterpoint && masterpoint.next) {
            point = masterpoint;

            while (point.next) {
                if (masterpoint.data == point.next.data) {
                    point.next = point.next.next
                } else {
                    point = point.next;
                }
            }

            masterpoint = masterpoint.next;
        }
    }
}

let l1 = new List();

l1.append(1);
l1.append(2);
l1.append(3);
l1.append(4);
l1.append(1);
l1.display();

l1.removeDuplicates();
l1.display();