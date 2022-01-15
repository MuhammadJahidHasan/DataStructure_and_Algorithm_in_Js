class Node {
    
     constructor(data){
            this.data = data;
            this.leftNode = null;
            this.rightNode = null;
     }
}
class BinaryTree {

   constructor(root){
       this.root = null;
   }

   createNode(data) {
      return new Node(data);
   }

   addLeftChild(node , child) {
       node.leftNode = child;
   }

   addRightChild(node ,child) {
       node.rightNode = child;
   }

   pre_order(node) {
        
    console.log(node.data);
   
    if(node.leftNode!=null){
       this.pre_order(node.leftNode);
    }

    if(node.rightNode!=null){
       this.pre_order(node.rightNode);
    }
  }

   in_order(node) {
        

   
     if(node.leftNode!=null){
        this.in_order(node.leftNode);
     }

     console.log(node.data);

     if(node.rightNode!=null){
        this.in_order(node.rightNode);
     }
   }

   post_order(node) {

    if(node.leftNode!=null){
       this.post_order(node.leftNode);
    }

    if(node.rightNode!=null){
       this.post_order(node.rightNode);
    }

    console.log(node.data);
  }
}

const bt = new BinaryTree();
const root = bt.createNode(2);
const seven = bt.createNode(7);
const eight = bt.createNode(8);
bt.addLeftChild(root,seven);
bt.addRightChild(root,eight);
bt.pre_order(root);
