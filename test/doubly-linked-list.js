'use strict'

const { test } = require('uvu')
const expect = require('expect')
const { DoublyLinkedList } = require('../dist')

test('from', () => {
  expect(DoublyLinkedList.from().toArray()).toEqual([])
  expect(DoublyLinkedList.from([]).toArray()).toEqual([])

  expect(DoublyLinkedList.from(1, 1, 2, 3).toArray()).toEqual([1, 1, 2, 3])
})

test('push', () => {
  expect(DoublyLinkedList.from().push(1).toArray()).toEqual([1])
  expect(DoublyLinkedList.from([]).push(1).toArray()).toEqual([1])

  expect(DoublyLinkedList.from([1]).push(2).toArray()).toEqual([1, 2])
})

test('isEmpty', () => {
  expect(DoublyLinkedList.from().isEmpty()).toBe(true)
  expect(DoublyLinkedList.from([]).isEmpty()).toBe(true)

  expect(DoublyLinkedList.from([1]).isEmpty()).toBe(false)
  expect(DoublyLinkedList.from([]).push(1).isEmpty()).toBe(false)
  expect(DoublyLinkedList.from([]).push(null).isEmpty()).toBe(false)
})

test('isNotEmpty', () => {
  expect(DoublyLinkedList.from().isNotEmpty()).toBe(false)
  expect(DoublyLinkedList.from([]).isNotEmpty()).toBe(false)

  expect(DoublyLinkedList.from([1]).isNotEmpty()).toBe(true)
  expect(DoublyLinkedList.from([]).push(1).isNotEmpty()).toBe(true)
  expect(DoublyLinkedList.from([]).push(null).isNotEmpty()).toBe(true)
})

test('head', () => {
  expect(DoublyLinkedList.from().head()).toBeUndefined()
  expect(DoublyLinkedList.from([]).head()).toBeUndefined()

  expect(DoublyLinkedList.from(1).head().value()).toBe(1)
  expect(DoublyLinkedList.from(1, 2).head().value()).toBe(1)

  expect(DoublyLinkedList.from([1]).head().value()).toBe(1)
  expect(DoublyLinkedList.from([1, 2]).head().value()).toBe(1)
})

test('tail', () => {
  expect(DoublyLinkedList.from().tail()).toBeUndefined()
  expect(DoublyLinkedList.from([]).tail()).toBeUndefined()

  expect(DoublyLinkedList.from(1).tail().value()).toBe(1)
  expect(DoublyLinkedList.from(1, 2).tail().value()).toBe(2)
  expect(DoublyLinkedList.from(1, 2, 3).tail().value()).toBe(3)

  expect(DoublyLinkedList.from([1]).tail().value()).toBe(1)
  expect(DoublyLinkedList.from([1, 2]).tail().value()).toBe(2)
  expect(DoublyLinkedList.from([1, 2, 3]).tail().value()).toBe(3)
})

test('toArray', () => {
  const users = [
    { id: 1, name: 'Marcus' },
    { id: 2, name: 'Supercharge' }
  ]

  const list = DoublyLinkedList.from(users)
  expect(list.toArray()).toEqual(users)
})

test('nodes', () => {
  const users = [
    { id: 1, name: 'Marcus' },
    { id: 2, name: 'Supercharge' }
  ]

  const list = DoublyLinkedList.from(users)
  expect(list.nodes().length).toBe(2)
  expect(list.nodes()[0].value()).toEqual({ id: 1, name: 'Marcus' })
  expect(list.nodes()[1].value()).toEqual({ id: 2, name: 'Supercharge' })
})

test('find', () => {
  const list = DoublyLinkedList.from([
    { id: 1, name: 'Marcus' },
    { id: 2, name: 'Supercharge' }
  ])

  expect(
    list.find(node => node.value().name === 'Marcus').value()
  ).toEqual({ id: 1, name: 'Marcus' })

  expect(
    list.find(value => value.name === 'Supercharge')
  ).toBeUndefined()
})

test('size', () => {
  expect(DoublyLinkedList.from().size()).toBe(0)
  expect(DoublyLinkedList.from([]).size()).toBe(0)

  expect(DoublyLinkedList.from(1).size()).toBe(1)
  expect(DoublyLinkedList.from([1]).size()).toBe(1)
  expect(DoublyLinkedList.from(null).size()).toBe(1)

  expect(DoublyLinkedList.from(1, 2, 3).size()).toBe(3)
  expect(DoublyLinkedList.from([1, 2, 3]).size()).toBe(3)
})

test('prev', () => {
  const list = DoublyLinkedList.from([
    { id: 1, name: 'Marcus' },
    { id: 2, name: 'Supercharge' }
  ])

  expect(
    list.find(node => node.value().name === 'Marcus').prev()
  ).toBeUndefined()

  expect(
    list.find(node => node.value().name === 'Supercharge').prev().value()
  ).toEqual({ id: 1, name: 'Marcus' })
})

test('isHead', () => {
  expect(DoublyLinkedList.from([1]).head().isHead()).toBe(true)
  expect(DoublyLinkedList.from([1]).tail().isHead()).toBe(true)
  expect(DoublyLinkedList.from([1, 2]).head().isHead()).toBe(true)

  expect(DoublyLinkedList.from([1, 2]).tail().isHead()).toBe(false)
})

test('hasPrev', () => {
  expect(DoublyLinkedList.from([1]).head().hasPrev()).toBe(false)
  expect(DoublyLinkedList.from([1]).tail().hasPrev()).toBe(false)

  expect(DoublyLinkedList.from([1, 2]).tail().hasPrev()).toBe(true)
})

test.run()
