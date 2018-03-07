'use strict'

const ui = require('./ui.js')
// const api = require('./api.js')
// const getFormFields = require('../../../lib/get-form-fields.js')

const onRowClick = function (event) {
  ui.modalPopulate(this.id)
  $('#EditCrewMember').modal('show')
}

const onSaveUpdatedBoatDetails = function (event) {
  alert('hi onSaveUpdatedBoatDetails')
  event.preventDefault()
}

const onEditExistingCrewMember = function (event) {
  alert('hi onEditExistingCrewMember')
  event.preventDefault()
}

const onAddNewCrewMember = function (event) {
  alert('hi onAddNewCrewMember')
  event.preventDefault()
}

const addHandlers = () => {
  $('#contentTable tr').on('click', onRowClick)
  $('#editBoatDetailsForm').on('submit', onSaveUpdatedBoatDetails)
  $('#editExistingCrewMember').on('submit', onEditExistingCrewMember)
  $('#addNewCrewMember').on('submit', onAddNewCrewMember)
}

module.exports = {
  addHandlers
}
