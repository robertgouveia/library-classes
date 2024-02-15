class Media {
  constructor(title, isCheckedOut, ratings){
    this._title = title
    this._isCheckedOut = isCheckedOut
    this._ratings = ratings
  }

  get title(){
    return this._title
  }
  get isCheckedOut(){
    return this._isCheckedOut
  }
  get ratings(){
    return this._ratings
  }
  set isCheckedOut(bool){
    this._isCheckedOut = bool
  }
  toggleCheckOutStatus(){
    this._isCheckedOut = !this._isCheckedOut
  }
  getAverageRating(){
    let sum = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0)
    return Math.floor(sum / this._ratings.length)
  }
  addRating(rating){
    this._ratings.push(rating)
  }
}

class Book extends Media {
  constructor(author = '', title = '', pages = 0, isCheckedOut = false, ratings = []){
    super(title, isCheckedOut, ratings)
    this._author = author
    this._pages = pages
  }
  get author(){
    return this._author
  }
  get pages(){
    return this._pages
  }
}

class Movie extends Media {
  constructor(director = '', title = '', runtime = 0 , isCheckedOut = false, ratings = []){
    super(title, isCheckedOut, ratings)
    this._director = director
    this._runtime = runtime
  }
  get director(){
    return this._director
  }
  get runtime(){
    return this._runtime
  }
}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544)

historyOfEverything.toggleCheckOutStatus()
console.log(historyOfEverything.isCheckedOut)
historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)
console.log(historyOfEverything.getAverageRating())

const speed = new Movie('Jan de Bont', 'Speed', 116)
speed.toggleCheckOutStatus()
console.log(speed.isCheckedOut)
speed.addRating(1)
speed.addRating(1)
speed.addRating(5)
console.log(speed.getAverageRating())
