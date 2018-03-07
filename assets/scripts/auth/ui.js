'use strict'

const store = require('../store')

const onSignInSuccess = function (data) {
  $('#signIn').toggle()
  $('.sign-in-error').css('display', 'none')
  $('.navbar').toggle()
  $('.main-section').toggle()
  store.user = data.user
}

const onSignInFailure = function () {
  $('.sign-in-error').css('display', 'block')
}

const onSignOutSuccess = function () {
  $('#signIn').toggle()
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

module.exports = {
  onSignInSuccess,
  onSignUpSuccess,
  onToSignIn,
  onToSignUp,
  onSignInFailure,
  onSignUpFailure,
  onSignOutSuccess
}
