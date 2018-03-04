'use strict'

const ui = require('./ui.js')

const onSignIn = function (event) {
  event.preventDefault()
  ui.onSignInSuccess()
}

const toSignUp = function () {
  ui.onToSignUp()
}

const toSignIn = function () {
  ui.onToSignIn()
}

const onRowClick = function (event) {
  ui.modalPopulate(this.id)
  alert(this.id)
  $('#EditCrewMember').modal('show')
}

const addHandlers = () => {
  $('#contentTable tr').on('click', onRowClick)
  $('#signIn').on('click', onSignIn)
  $('#signUpLink').on('click', toSignUp)
  $('#signInLink').on('click', toSignIn)
}

module.exports = {
  addHandlers,
  toSignUp,
  toSignIn,
  onRowClick
}
