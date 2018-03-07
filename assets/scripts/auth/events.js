'use strict'

// TODO still need to add change password funcionality
const ui = require('./ui.js')
const api = require('./api.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const toSignUp = function () {
  ui.onToSignUp()
}

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure) // TODO fix sign up ui update - ask about auto signing in and TODO fix sign up fialure
}

const toSignIn = function () {
  ui.onToSignIn()
}

const onSignOut = function () { // TODO clear all form fields EVERYWHERE
  event.preventDefault()
  api.signOut()
    .then(ui.onSignOutSuccess) // TODO
    .catch(ui.onSignOutFailure) // TODO
}

const onRowClick = function (event) { // TODO remove
  ui.modalPopulate(this.id)
  alert(this.id)
  $('#EditCrewMember').modal('show')
}

const addHandlers = () => {
  // $('#contentTable tr').on('click', onRowClick)
  $('#signUpForm').on('submit', onSignUp)
  $('#signInForm').on('submit', onSignIn) // change to the form TODO
  $('#signUpLink').on('click', toSignUp)
  $('#signInLink').on('click', toSignIn)
  $('#signOut').on('click', onSignOut)
}

module.exports = {
  addHandlers,
  toSignIn,
  onRowClick
}
