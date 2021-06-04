const { test, expect } = require('@jest/globals')
const Food = require('../Food.js')

test('getName() returns name', () => {
  const food = new Food('pizza')
  expect(food.getName()).toBe('pizza')
})

test('getCalories() returns calories', () => {
  const food = new Food('chocolate', 500)
  expect(food.getCalories()).toBe(500)
})
