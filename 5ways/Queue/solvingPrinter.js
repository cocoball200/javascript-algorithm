/*
일반적인 프린터는 인쇄 요청이 들어온 순서대로 인쇄합니다. 
그렇기 때문에 중요한 문서가 나중에 인쇄될 수 있습니다. 이런 문제를 보완하기 위해 중요도가 높은 문서를 먼저 인쇄하는
프린터를 개발했습니다. 이 새롭게 개발한 프린터는 아래와 같은 방식으로 인쇄 작업을 수행합니다. 
1. 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냅니다.
2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한개라도 존제하면 J를 대기목록의 가장 마지막에 넣습니다.
3. 그렇지 않으면 J를 인쇄합니다.
*/

/*
예를 들어, 4개의 문서(A,B,C,D)가 순서대로 인쇄 대기목록에 있고, 중요도가 2 1 3 2라면 
1. B C D A
2. C D A B 

*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = null;
  }
  enqueue(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }

  peek() {
    return this.head.value;
  }
}

function solution(priorities, location) {
  const queue = new Queue();
  for (let i = 0; i < priorities.length; i += 1) {
    queue.enqueue([priorities[i], i]);
    // 값, 인덱스 값 자리수가 같은 걸 찾아야해서
  }
  priorities.sort((a, b) => b - a);

  let count = 0; // 몇번 복사 되었는지
  while (true) {
    const currentValue = queue.peek();
    if (currentValue[0] < priorities[count]) {
      queue.enqueue(queue.dequeue());
      // 앞에 값을 데큐 해서 엔큐함 => 뒤로보냄
    } else {
      const value = queue.dequeue(); // front값을 뽑아서 인쇄
      count += 1;
      if (location === value[1]) {
        return count;
      }
    }
  }
  return count;
}
soution([2, 1, 3, 2], 2);
