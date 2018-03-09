'use strict'

const config = require('../config.js')
const store = require('../store.js')

const onNewCrew = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/crews',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getCrewByID = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/crews/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const onEditCrewMember = function (data, id) {
  return $.ajax({
    url: config.apiOrigin + '/crews/' + id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getAll = function () {
  return $.ajax({
    url: config.apiOrigin + '/crews',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  onNewCrew,
  getCrewByID,
  onEditCrewMember,
  getAll
}
