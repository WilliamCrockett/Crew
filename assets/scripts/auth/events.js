'use strict'

const ui = require('./ui.js')

let targetID = ''

const clickedID = function (event) {
  targetID = (this.id)
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

const onRowClick = function (targetID) {
  ui.modalPopulate(targetID)
  alert(targetID)
  $('#EditCrewMember').modal('show')
}

const addHandlers = () => {
  $('#contentTable tr').on('click', clickedID)
  $('#contentTable').on('click', onRowClick)
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
