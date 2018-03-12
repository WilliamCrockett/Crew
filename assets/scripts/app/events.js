'use strict'

const ui = require('./ui.js')
const api = require('./api.js')
const getFormFields = require('../../../lib/get-form-fields.js')

let dataID = 0
const checkedValues = []

const onRowClick = function (event) {
  const currentDisplay = $('#eventsOrCrew').text()
  if (currentDisplay === 'Events') {
    const id = $(this).attr('data-id')
    api.getCrewByID(id)
      .then(ui.onEditNewCrewMember)
      .catch(ui.onRowClickError)
  } else if (currentDisplay === 'Crews') {
    const id = $(this).attr('data-id')
    console.log(id)
    api.getEventByID(id)
      .then(ui.onEditEvent)
      .catch(ui.onEditEventError)
  }
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

// const populateTable = function () { // is this needed? TODO
//   event.preventDefault()
//   api.getAll()
//     .then(ui.populateTableWithIndex)
//     .catch(ui.populateTableWithIndexFailure)
// }

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

const showNewEventModal = function (event) {
  event.preventDefault()
  $('#newEventModal').modal('show')
}

const onNewEvent = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.createNewEvent(data)
    .then(ui.onNewEventSuccess)
    .catch(ui.onNewEventFailure)
    .then(api.getAllEvents)
    .then(ui.showEvents)
    .catch(ui.getAllEventsError)
    .then(getLastEventID)
}

const getLastEventID = function () {
  api.getLastEvent()
    .then(createNewEventCrew)
    .catch()
}

const createNewEventCrew = function (data) {
  const currentEventId = data.event['id']
  for (let i = 0; i < checkedValues.length; i++) {
    const crewId = checkedValues[i]
    api.createEventCrews(currentEventId, crewId)
      .then(ui.addCrewToEventCrewSuccess)
      .catch(ui.addCrewToEventCrewError)
  }
}

const onToggleBetweenEventsAndCrew = function (event) {
  event.preventDefault()
  const currentDisplay = $('#eventsOrCrew').text()
  if (currentDisplay === 'Events') {
    api.getAllEvents()
      .then(ui.showEvents)
      .catch(ui.getAllEventsError) // TODO
  } else if (currentDisplay === 'Crews') {
    api.getAll()
      .then(ui.populateTableWithIndex)
      .catch(ui.populateTableWithIndexFailure)
    $('#eventsOrCrew').text('Events')
  }
}

const showModalExportEvent = function (event) {
  event.stopPropagation()
  $('#exportEvent').modal('show')
  // api.getEventCrewsByEventID()
}

const editEvent = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  const id = $('#EventID').text()
  api.onEditEvent(data, id)
    .then(ui.onUpdateExisitngEventSuccess) // here
    .catch(ui.onUpdateExisitngEventFailure)
    .then(api.getAllEvents)
    .then(ui.showEvents)
    .catch(ui.getAllEventsError)
}

const onAddCrewToEvent = function () {
  $('#addCrewToEvent').modal('show')
  api.getAll()
    .then(ui.onAddCrewToEventUI)
    .catch(ui.addCrewToEventCrewError)
}

const getCheckBoxValues = function () {
  $('.crew-check-boxes:checked').each(function () {
    checkedValues.push($(this).attr('data-id'))
  })
  $('#addCrewToEvent').modal('hide')
}

const addHandlers = () => {
  $('#contentTable').on('click', '.crew_row', onRowClick)
  $('#editBoatDetailsForm').on('submit', onSaveUpdatedBoatDetails)
  $('#editExistingCrewMember').on('submit', onEditExistingCrewMember)
  $('#addNewCrewMember').on('submit', onAddNewCrewMember)
  $('#NewEventButton').on('click', showNewEventModal)
  $('#contentTable').on('click', '.delete_record', showModalDeleteConfirm)
  $('#deleteRecordConfirmation').on('click', deleteCrewRecord)
  $('#addNewEvent').on('submit', onNewEvent)
  $('#ToggleBetweenEventsAndCrew').on('click', onToggleBetweenEventsAndCrew)
  $('#contentTable').on('click', '.export_crew_list', showModalExportEvent)
  $('#editExistingEvent').on('submit', editEvent)
  $('#addCrewToEventButton').on('click', onAddCrewToEvent)
  $('#addThisSelectionToEvent').on('click', getCheckBoxValues)
  // $('.delete_record').on('click', deleteCrewRecord)
  // leave this one at the bottom
  $('#settingsButton').on('click', function () {
    $('.change-password-error').css('display', 'none')
  })
}

module.exports = {
  addHandlers
}
