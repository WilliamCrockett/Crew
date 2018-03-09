'use strict'

const ui = require('./ui.js')
const api = require('./api.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const onRowClick = function (event) {
  const id = $(this).attr('data-id')
  api.getCrewByID(id)
    .then(ui.onEditNewCrewMember)
    .catch(ui.onRowClickError)
}

const onSaveUpdatedBoatDetails = function (event) {
  alert('hi onSaveUpdatedBoatDetails')
  event.preventDefault()
}

const onEditExistingCrewMember = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  const id = $('#userID').text()
  api.onEditCrewMember(data, id)
    .then(ui.onUpdateExisitngCrewMemberSuccess)
    .catch(ui.onUpdateExisitngCrewMemberFailure)
    .then(api.getAll)
    .then(ui.populateTableWithIndex)
    .catch(ui.populateTableWithIndexFailure) // was here
}

const onAddNewCrewMember = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.onNewCrew(data)
    .then(ui.onAddNewCrewMemberSuccess)
    .catch(ui.onAddNewCrewMemberError)
    .then(api.getAll)
    .then(ui.populateTableWithIndex)
    .catch(ui.populateTableWithIndexFailure)
}

const populateTable = function () {
  console.log('in populateTable')
  event.preventDefault()
  api.getAll()
    .then(ui.populateTableWithIndex)
    .catch(ui.populateTableWithIndexFailure)
}

const addHandlers = () => {
  $('#contentTable').on('click', '.crew_row', onRowClick)
  $('#editBoatDetailsForm').on('submit', onSaveUpdatedBoatDetails)
  $('#editExistingCrewMember').on('submit', onEditExistingCrewMember)
  $('#addNewCrewMember').on('submit', onAddNewCrewMember)
  $('#NewEventButton').on('click', populateTable)
  // leave this one at the bottom
  $('#settingsButton').on('click', function () {
    $('.change-password-error').css('display', 'none')
  })
}

module.exports = {
  addHandlers
}
