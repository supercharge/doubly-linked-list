'use strict'

export class Node<T> {
  /**
   * Stores the node’s data
   */
  private readonly meta: {
    value: T
    prev?: Node<T>
    next?: Node<T>
  }

  /**
   * Create a new node instance.
   *
   * @param {T} value
   */
  constructor (value: T) {
    this.meta = { value }
  }

  /**
   * Create a new node instance for the given `value`.
   *
   * @param {T} value
   *
   * @returns {Node}
   */
  static create<T> (value: T): Node<T> {
    return new this(value)
  }

  /**
   * Returns the value.
   */
  value (): T {
    return this.meta.value
  }

  /**
   * Determine whether this node is not pointing to a previous value.
   *
   * @returns {Boolean}
   */
  isHead (): boolean {
    return !this.hasPrev()
  }

  /**
   * Determine whether this node is not pointing to a next value.
   *
   * @returns {Boolean}
   */
  isTail (): boolean {
    return !this.hasNext()
  }

  /**
   * Returns the next value.
   */
  next (): Node<T> | undefined {
    return this.meta.next
  }

  /**
   * Determine whether this node points to a next value.
   *
   * @returns {Boolean}
   */
  hasNext (): boolean {
    return !!this.next()
  }

  /**
   * Returns the next value.
   */
  setNext (node: Node<T>): this {
    this.meta.next = node

    return this
  }

  /**
   * Returns the next value.
   */
  prev (): Node<T> | undefined {
    return this.meta.prev
  }

  /**
   * Determine whether this node points to a next value.
   *
   * @returns {Boolean}
   */
  hasPrev (): boolean {
    return !!this.prev()
  }

  /**
   * Returns the next value.
   */
  setPrev (node: Node<T>): this {
    this.meta.prev = node

    return this
  }
}
