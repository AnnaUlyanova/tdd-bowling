var test = require('tape')
var game = require('../game')

test('scores a gutterball frame', function (t) {
  var frame1 = [10, 0]
  var expected = 10
  var actual = game.scoreFrame(frame1)
  t.equal(actual, expected)
  t.end()
})


test('scores a normal frame', function (t) {
  var frame3 = [4, 3]
  var expected = 7
  var actual = game.normalScoreFrame(frame3)
  t.equal(actual, expected)
  t.end()
})

test('scores a spare frame', function (t) {
  var frame4 = [5, 5]
  var frame5 = [4, 2]
  var expected = 14
  var actual = game.spareFrame(frame4, frame5)
  t.equal(actual, expected)
  t.end()

})

test('scores a single strike frame', function (t) {
  var frame1 = [10, 0]
  var frame2 = [4, 3]
  var expected = 17
  var actual = game.strikeFrame(frame1, frame2)
  t.equal(actual, expected)
  t.end()
})

test('scores a double strike frame', function (t) {
  var frame1 = [10, 0]
  var frame2 = [10, 0]
  var frame3 = [4, 3]
  var expected = 27
  var actual = game.doubleStrikeFrame(frame1, frame2, frame3)
  t.equal(actual, expected)
  t.end()
})
