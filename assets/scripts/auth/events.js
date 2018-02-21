'use strict'

const ui = require('./ui.js')

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

const addHandlers = () => {
  $('#signIn').on('submit', onSignIn)
  $('#signUpLink').on('click', toSignUp)
  $('#signInLink').on('click', toSignIn)
}

module.exports = {
  addHandlers,
  toSignUp,
  toSignIn
}
