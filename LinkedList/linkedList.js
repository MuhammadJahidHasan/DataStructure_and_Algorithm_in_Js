
class Node {

constructor(data, next){
     
    this.data = data;
    this.next = next;
  }
}

class LinkedList {

    constructor() {
        this.head = null;
    }

 prepend (item) {
    
    this.head =  new Node(item, this.head);
}

 append(item) {
    let new_node = new Node(item, null);
    if(head == null) {
        return new_node;
    }

    let current_node = this.head;

    while(current_node.next != null) {
        current_node = current_node.next;
    }
    current_node.next = new_node;
}

 insertMiddle(node ,item) {
      let new_node = new Node(item, node.next);
      node.next = new_node;
}

 removeNode(head, node) {
    if(node == this.head) {
        head = node.next;
        return this.head;
    }

    let current_node = this.head;

    while(current_node) {
        if(current_node.next == node) {break;}
        current_node = current_node.next;
    }

    if(current_node == null) {return this.head;}

    current_node.next = node.next;

   // return this.head;
}

 printList(head) {

    let current_node = head;
    while(current_node != null) {
        console.log(current_node.data);
        current_node = current_node.next;
    }
    //console.log(' ');
}

}

let head = new Node(10,null);
head = prepend(15,head);
append(20, head);
printList(head);

