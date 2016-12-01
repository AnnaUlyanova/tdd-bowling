module.exports = {
  scoreFrame: scoreFrame,
  spareFrame: spareFrame,
  strikeFrame: strikeFrame,
  doubleStrikeFrame: doubleStrikeFrame,
  normalScoreFrame: normalScoreFrame
}

var frame1 = [10, 0]
var frame2 = [10, 0]
var frame3 = [4, 3]
var frame4 = [5, 5]
var frame5 = [4, 2]

function scoreFrame (frame1) {
  return frame1[0] + frame1[1];
}

function normalScoreFrame (frame3) {
  return frame3[0] + frame3[1];
}

function spareFrame (frame4, frame5) {
  return 10 + frame5[0];
}

function strikeFrame (frame1, frame2) {
  return 10 + frame2[0] + frame2[1];
}

function doubleStrikeFrame (frame1, frame2, frame3) {
return 20 + frame3[0] + frame3[1];
}
