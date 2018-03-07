'use strict'

const store = require('../store')

const onSignInSuccess = function (data) {
  $('#signInForm').toggle() // if this isn't signInForm then ffs cause I changed it
  $('.sign-in-error').css('display', 'none')
  $('.navbar').toggle()
  $('.main-section').toggle()
  store.user = data.user
}

const onSignInFailure = function () {
  $('.sign-in-error').css('display', 'block')
}

const onSignOutSuccess = function () {
  $('#signInForm').toggle() // this to ffs
  $('.navbar').toggle()
  $('.main-section').toggle()
}

const onToSignUp = function () {
  $('.sign-in-form').toggle()
  $('.sign-up-form').toggle()
  $('.sign-up-error').css('display', 'none')
}

const onSignUpSuccess = function () {
  $('.sign-in-form').toggle()
  $('.sign-up-error').css('display', 'none')
  $('.sign-up-form').toggle()
}

const onSignUpFailure = function () {
  $('.sign-up-error').css('display', 'block')
}

const onToSignIn = function () {
  $('.sign-in-form').toggle()
  $('.sign-up-form').toggle()
  $('.sign-in-error').css('display', 'none')
}

const onChangePasswordSuccess = function () {
  alert('hi onChangePasswordSuccess') // TODO fix this
}

const onChangePasswordFailure = function () {
  alert('hi onChangePasswordFailure') // TODO fix this
}

module.exports = {
  onSignInSuccess,
  onSignUpSuccess,
  onToSignIn,
  onToSignUp,
  onSignInFailure,
  onSignUpFailure,
  onSignOutSuccess,
  onChangePasswordSuccess,
  onChangePasswordFailure
}
