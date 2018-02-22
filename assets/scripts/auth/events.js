'use strict'

const ui = require('./ui.js')

let targetID = ''

const clickedID = function (event) {
  alert(event.target)
  targetID = (event.target.id)
  alert(targetID)
}

const onSignIn = function (/* event */) {
  event.preventDefault()
  ui.onSignInSuccess()
}

const toSignUp = function () {
  ui.onToSignUp()
}

const toSignIn = function () {
  ui.onToSignIn()
}

const onRowClick = function () {
  alert('look at me now!')
}

const addHandlers = () => {
  $('#contentTable').click(clickedID)
  $('#signIn').on('submit', onSignIn)
  $('#signUpLink').on('click', toSignUp)
  $('#signInLink').on('click', toSignIn)
  $('#td1').on('click', onRowClick)
}

module.exports = {
  addHandlers,
  toSignUp,
  toSignIn,
  onRowClick
}
