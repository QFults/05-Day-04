class Food {
  constructor (name, calories) {
    this.name = name
    this.calories = calories
  }

  getName () {
    return this.name
  }

  getCalories () {
    return this.calories
  }
}

module.exports = Food
