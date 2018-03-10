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

const deleteCrewMember = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/crews/' + id,
    method: 'DELETE',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// start of event end points
const createNewEvent = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/events',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getAllEvents = function () {
  return $.ajax({
    url: config.apiOrigin + '/events',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getEventByID = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/events/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const onEditEvent = function (data, id) {
  return $.ajax({
    url: config.apiOrigin + '/events/' + id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getLastEvent = function () {
  return $.ajax({
    url: config.apiOrigin + '/get-last',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createEventCrews = function (eID, cID) {
  return $.ajax({
    url: config.apiOrigin + '/event_crews',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      event_crew: {
        "event_id": eID,
        "crew_id": cID
      }
    }
  })
}

const getEventCrewsByEventID = function () {

}

module.exports = {
  onNewCrew,
  getCrewByID,
  onEditCrewMember,
  getAll,
  deleteCrewMember,
  createNewEvent,
  getAllEvents,
  getEventByID,
  onEditEvent,
  getLastEvent,
  createEventCrews,
  getEventCrewsByEventID
}
