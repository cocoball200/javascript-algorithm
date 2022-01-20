//STACK FIRST IN LAST OUT
//먼저 온 애가 나중에 나감
// 함수 구조는 스택 메모리 형태로 사용된다. 먼저 실행 된 함수가 가장 나중에 끝난다.
//stack을 Array로 표현할 수 있다.
// 자바는 연결 리스트로 스택을 사용했음

// Array로 stack 구현
// const stack = [];
// stack.push(1);
// stack.push(2);
// stack.push(3);
// console.log(stack); // [1 , 2 ,3 ]

// stack.pop();
// console.log(stack); // [1, 2]

// console.log(stack[stack.length - 1]); // [1,2 ] top

//Linked List
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
    this.size += 1;
  }

  pop() {
    const value = this.top.value;
    this.top = this.top.next;
    this.size -= 1;
    return value;
  }

  size() {
    return this.size;
  }
}

const stack = new Stack();
stack.push(3);
// stack.push(5);
// stack.push(7);

console.log("stack", stack);
