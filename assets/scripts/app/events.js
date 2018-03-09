'use strict'

const ui = require('./ui.js')
const api = require('./api.js')
const getFormFields = require('../../../lib/get-form-fields.js')

let dataID = 0

const onRowClick = function (event) {
  const id = $(this).attr('data-id')
  api.getCrewByID(id)
    .then(ui.onEditNewCrewMember)
    .catch(ui.onRowClickError)
}

const onSaveUpdatedBoatDetails = function (event) {
  event.preventDefault() // TODO post MVP
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
  event.preventDefault()
  api.getAll()
    .then(ui.populateTableWithIndex)
    .catch(ui.populateTableWithIndexFailure)
}

const deleteCrewRecord = function (event) {
  event.preventDefault()
  event.stopPropagation()
  api.deleteCrewMember(dataID)
    .then(ui.onDeleteRecordSuccess)
    .catch(ui.onDeleteRecordFailure) // TODO
    .then(api.getAll)
    .then(ui.populateTableWithIndex)
    .catch(ui.populateTableWithIndexFailure)
  $('#confirmDelete').modal('hide')
}

const showModalDeleteConfirm = function (event) {
  event.stopPropagation()
  dataID = $(this).attr('data-id')
  $('#userIDDelete').text(dataID)
  $('#confirmDelete').modal('show')
}

const addHandlers = () => {
  $('#contentTable').on('click', '.crew_row', onRowClick)
  $('#editBoatDetailsForm').on('submit', onSaveUpdatedBoatDetails)
  $('#editExistingCrewMember').on('submit', onEditExistingCrewMember)
  $('#addNewCrewMember').on('submit', onAddNewCrewMember)
  $('#NewEventButton').on('click', populateTable)
  $('#contentTable').on('click', '.delete_record', showModalDeleteConfirm)
  $('#deleteRecordConfirmation').on('click', deleteCrewRecord)
  // $('.delete_record').on('click', deleteCrewRecord)
  // leave this one at the bottom
  $('#settingsButton').on('click', function () {
    $('.change-password-error').css('display', 'none')
  })
}

module.exports = {
  addHandlers
}
