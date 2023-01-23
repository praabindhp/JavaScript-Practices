const readline = require(`readline-sync`)
class Node{
    constructor(data){
        this.data = data;
        this.right = null;
        this.left = null;
    }
}

class BST{
    constructor(head){
        this.head = null;
    }

add(data){
    let newnode = new Node(data)
    if(this.head==null){
        this.head = newnode;
    }
    else{
        this.insertNode(this.head,newnode)  
    }
}
insertNode(node,newnode){
    
    if(newnode.data<node.data){
        if(node.left==null){
            node.left = newnode;
        }
        else{
            this.insertNode(node.left,newnode)
        }
        }
        else if(newnode.data>node.data){
            if(node.right==null){
                node.right = newnode;
            }
            else{
                this.insertNode(node.right,newnode)
            }
        }
}

inorder(node)
{
	if(node != null)
	{
		this.inorder(node.left);
        console.log(node.data);
		this.inorder(node.right);
	}
}

mirror(temp){
    if(temp==null){
        console.log("No elements");
    }
    else{
        if(temp.left){
            this.mirror(temp.left);
        }
        if(temp.right){
            this.mirror(temp.right);
        }
        let temp1 =  temp.left;
        temp.left = temp.right;
        temp.right = temp1;
    }
}

}

let bst = new BST();
while(true){
    let x  = readline.question("Enter The Number : ");
    if(x == ''){
        break;
    }
    bst.add(Number(x));
}
console.log("Inorder");
bst.inorder(bst.head);
bst.mirror(bst.head);
console.log("Inorder After Mirror")
bst.inorder(bst.head)