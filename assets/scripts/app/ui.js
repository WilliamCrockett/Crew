'use strict'

const showCrewsTemplate = require('../templates/crews.handlebars')
require('../../../node_modules/jquery-toast-plugin/src/jquery.toast.js')
require('../../../node_modules/jquery-toast-plugin/src/jquery.toast.css')

const onEditNewCrewMember = function (data) {
  $('#editCrewName').val(data.crew['full_name'])
  $('#editCrewSASNumber').val(data.crew['sas_number'])
  $('#editCrewEmail').val(data.crew['email_address'])
  $('#editCrewTellNumber').val(data.crew['cell_number'])
  $('#editCrewNOKName').val(data.crew['next_of_kin'])
  $('#editCrewNOKTellNumber').val(data.crew['nok_cell_num']) // dont forget to add shirt size TODO
  $('#editCrewShirtSize').val(data.crew['shirt_size'])
  $('#userID').text(data.crew['id'])
  $('#EditCrewMember').modal('show')
}

const onAddNewCrewMemberSuccess = function () {
  $('#addNewCrewMember').each(function () {
    this.reset()
  })
  $('#NewCrewMember').modal('hide')
  $.toast({
    text: "You've added a new crew member!",
    heading: 'Success!',
    icon: 'success',
    showHideTransition: 'plain',
    allowToastClose: true,
    hideAfter: 3000,
    stack: 5,
    position: 'top-right',
    textAlign: 'left',
    loader: true,
    loaderBg: '#9EC600'
  })
}

const onAddNewCrewMemberError = function () {
  $.toast({
    text: 'There was a problem adding this crew member. Please try again',
    heading: 'Error!',
    icon: 'error',
    showHideTransition: 'plain',
    allowToastClose: true,
    hideAfter: 3000,
    stack: 5,
    position: 'top-right',
    textAlign: 'left',
    loader: true,
    loaderBg: '#9EC600'
  })
}

const onUpdateExisitngCrewMemberSuccess = function () {
  $('#EditCrewMember').modal('hide')
  $.toast({
    text: 'Crew details updated successfully',
    heading: 'Success!',
    icon: 'success',
    showHideTransition: 'plain',
    allowToastClose: true,
    hideAfter: 3000,
    stack: 5,
    position: 'top-right',
    textAlign: 'left',
    loader: true,
    loaderBg: '#9EC600'
  })
}

const onUpdateExisitngCrewMemberFailure = function () {
  $.toast({
    text: 'There was a problem while trying to update this',
    heading: 'Error!',
    icon: 'error',
    showHideTransition: 'plain',
    allowToastClose: true,
    hideAfter: 3000,
    stack: 5,
    position: 'top-right',
    textAlign: 'left',
    loader: true,
    loaderBg: '#9EC600'
  })
}

const onRowClickError = function () {
  $.toast({
    text: 'Theres a problem fetching this record, please try again',
    heading: 'Error, sorry!',
    icon: 'error',
    showHideTransition: 'plain',
    allowToastClose: true,
    hideAfter: 3000,
    stack: 5,
    position: 'top-right',
    textAlign: 'left',
    loader: true,
    loaderBg: '#9EC600'
  })
}

const populateTableWithIndex = function (data) {
  const allCrew = data
  const showCrewsHtml = showCrewsTemplate({ crews: data.crews })
  $('#crewsTable tbody').empty()
  $('#crewsTable tbody').append(showCrewsHtml)
}

const populateTableWithIndexFailure = function () {
  $.toast({
    text: 'Theres a problem getting all the crew',
    heading: 'Error, sorry!',
    icon: 'error',
    showHideTransition: 'plain',
    allowToastClose: true,
    hideAfter: 3000,
    stack: 5,
    position: 'top-right',
    textAlign: 'left',
    loader: true,
    loaderBg: '#9EC600'
  })
}

const onDeleteRecordSuccess = function () {
  $.toast({
    text: 'Crew member successfully deleted',
    heading: 'Success!',
    icon: 'success',
    showHideTransition: 'plain',
    allowToastClose: true,
    hideAfter: 3000,
    stack: 5,
    position: 'top-right',
    textAlign: 'left',
    loader: true,
    loaderBg: '#9EC600'
  })
}

module.exports = {
  onAddNewCrewMemberError,
  onAddNewCrewMemberSuccess,
  onEditNewCrewMember,
  onUpdateExisitngCrewMemberSuccess,
  onUpdateExisitngCrewMemberFailure,
  onRowClickError,
  populateTableWithIndex,
  populateTableWithIndexFailure,
  onDeleteRecordSuccess
}
