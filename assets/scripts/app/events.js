'use strict'

const ui = require('./ui.js')
// const api = require('./api.js')
// const getFormFields = require('../../../lib/get-form-fields.js')

const onRowClick = function (event) {
  ui.modalPopulate(this.id)
  $('#EditCrewMember').modal('show')
}

const addHandlers = () => {
  $('#contentTable tr').on('click', onRowClick)
}

module.exports = {
  addHandlers
}
