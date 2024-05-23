function startQuiz() {
  const guess = prompt('What does this ✅ stand for?').toLowerCase()
  if (guess === 'tick') {
    alert('You guessed correct!')
  } else {
    alert('Sorry, the correct answer was tick.')
  }
  const guess2 = prompt('What does this 🍉 stand for?').toLowerCase()
  if (guess2 === 'watermelon') {
    alert('You guessed correct!')
  } else {
    alert('Sorry, the correct answer was watermelon.')
  }
  const guess3 = prompt('What does this 🍔 stand for?').toLowerCase()
  if (guess3 === 'burger') {
    alert('You guessed correct!')
  } else {
    alert('Sorry, the correct answer was burger.')
  }
  const guess4 = prompt('What does this 🧡 stand for?').toLowerCase()
  if (guess4 === 'heart') {
    alert('You guessed correct!')
  } else {
    alert('Sorry, the correct answer was heart.')
  }
  const guess5 = prompt('What does this 😭 stand for?').toLowerCase()
  if (guess5 === 'cry') {
    alert('You guessed correct!')
  } else {
    alert('Sorry, the correct answer was cry.')
  }
}