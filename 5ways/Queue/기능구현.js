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
    this.size = 0;
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

    this.size += 1;
  }

  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    this.size -= 1;
    return value;
  }

  peek() {
    return this.head.value;
  }
}

function solution(progresses, speeds) {
  const answer = [];
  const queue = new Queue();
  let count = 1;

  for (let i = 0; i < progresses.length; i += 1) {
    queue.enqueue(Math.ceil((100 - progresses[i]) / speeds[i]));
  }

  while (queue.size) {
    const currentValue = queue.dequeue();

    while (queue.size) {
      if (currentValue >= queue.peek()) {
        queue.dequeue();
        count += 1;
      } else {
        answer.push(count);
        count = 1;
        break;
      }
    }
  }
  if (queue.size === 0) {
    answer.push(count);
    return answer;
  }
  return answer;
}
