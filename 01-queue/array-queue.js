function ArrayQueue(size) {
  this.size = size;
  this.head = -1;
  this.tail = -1;
  this.q = [];
}

ArrayQueue.prototype.isEmpty = function() {
  return this.head === this.tail;
};

ArrayQueue.prototype.isFull = function() {
  return this.tail + 1 === this.size;
};

ArrayQueue.prototype.add = function(data) {
  if (this.isFull()) throw new Error('queue is already full');
  this.tail++;
  this.q.push(data);
};

ArrayQueue.prototype.pop = function() {
  if (this.isEmpty()) throw new Error('queue is empty');
  this.head++;
  return q[this.head];
};

ArrayQueue.prototype.printQueue = function() {
  for (const d of this.q) {
    console.log(d);
  }
};

const queue = new ArrayQueue(3);
console.log(queue.isEmpty());
console.log(queue.isFull());
queue.add(1);
queue.printQueue();
queue.add(2);
queue.printQueue();
queue.add(3);
queue.printQueue();
console.log(queue.isEmpty());
console.log(queue.isFull());
queue.add(4);
console.log(queue.isEmpty());
console.log(queue.isFull());
queue.printQueue();
