export default class Stack<T> {
    public length: number;
    private head?: StackNode<T>

    constructor() {}

    push(item: T): void {}
    pop(): T | undefined {}
    peek(): T | undefined {}
}