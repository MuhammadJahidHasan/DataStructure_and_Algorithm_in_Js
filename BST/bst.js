

class Node {
   
    constructor(data) {
        this.data = data;
        this.leftChild = null;
        this.rightChild = null;
    }
}

const addLeftChild = function(parentNode , childNode) {
      
       parentNode.leftChild = childNode;
}



const addRightChild = function(parentNode , childNode) {
      
    parentNode.rightChild = childNode;
}


const inOrder = function(node) {

      if(node.leftChild!=null) {
          inOrder(node.leftChild);
      }

      console.log(node.data);

      if(node.rightChild!=null) {
        inOrder(node.rightChild);
    }


}

const insert_node = function(root, node) {

      if(root === null) {

        return;
      }

      let parrent_node;
      let current_node = root;
      
      while(current_node!=null) {
          parrent_node = current_node;

          if(current_node.data < node.data) {
             current_node = current_node.rightChild;
          } else {
              current_node = current_node.leftChild;
          }
      }

      if(parrent_node.data < node.data) {
         addRightChild(parrent_node, node);
      } else {
          addLeftChild(parrent_node, node);
      }

     // return root;
}

let root = new Node(20);
 
let five = new Node(5);

let ten = new Node(10);

let twentyFive = new Node(25);

let fifty = new Node(50);

insert_node(root, five);
insert_node(root, fifty);
insert_node(root, ten);
insert_node(root, twentyFive);

inOrder(root);

