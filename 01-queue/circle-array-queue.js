function CircleArrayQueue(size) {
  this.size = size;
  this.head = 0;
  this.tail = 0;
  this.q = [];
}

CircleArrayQueue.prototype.isEmpty = function() {
  return this.head === this.tail;
};

CircleArrayQueue.prototype.isFull = function() {
  return (this.tail + 1) % this.size === this.head;
};

CircleArrayQueue.prototype.add = function(data) {
  if (this.isFull()) throw new Error('queue is already full');
  this.q[this.tail] = data;
  this.tail = (this.tail + 1) % this.size;
};

CircleArrayQueue.prototype.pop = function() {
  if (this.isEmpty()) throw new Error('queue is empty');
  this.head = (this.head + 1) % this.size;
  return this.q[this.head];
};

CircleArrayQueue.prototype.getSize = function() {
  return (this.tail - this.head + this.size) % this.size;
};

CircleArrayQueue.prototype.printQueue = function() {
  console.log(this.q);
};

const queue = new CircleArrayQueue(3);
console.log(queue.isEmpty());
console.log(queue.isFull());
queue.add(1);
queue.printQueue();
queue.add(2);
queue.printQueue();
console.log(queue.isEmpty());
console.log(queue.isFull());
queue.pop();
queue.printQueue();
console.log(queue.isEmpty());
console.log(queue.isFull());
queue.pop();
queue.printQueue();
console.log(queue.isEmpty());
console.log(queue.isFull());
queue.add(3);
queue.printQueue();
console.log(queue.isEmpty());
console.log(queue.isFull());
