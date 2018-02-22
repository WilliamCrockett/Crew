'use strict'

const onSignInSuccess = function () {
  $('#signIn').toggle()
  $('.navbar').toggle()
  $('.main-section').toggle()
}

const onToSignUp = function () {
  $('.sign-in-form').toggle()
  $('.sign-up-form').toggle()
}

const onToSignIn = function () {
  $('.sign-in-form').toggle()
  $('.sign-up-form').toggle()
}

const modalPopulate = function (targetID) {
  $('#userID').text(targetID)
}

module.exports = {
  onSignInSuccess,
  onToSignUp,
  onToSignIn,
  modalPopulate
}
