export default class Queue<T> {
    public length: number
    private head?: QueueNode<T> 
    private tail?: QueueNode<T> 

    constructor() {}

    enqueue(item: T): void {}
    deque(): T | undefined {}
    peek(): T | undefined {}
}