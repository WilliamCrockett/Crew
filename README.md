#Welcome to Crew
##A simple web app designed to help you manage your crew lists for events
###Currently this is designed with a South African use case in mind, but I plan to update that in future versions.
### [link to api] (https://github.com/WilliamCrockett/crew-api)

---

## Technologies Used:

* HTML
* CSS/SASS
* Bootstrap
* Javascript
* Ajax for API requests
* Jquery for DOM manipulation
* Handlebars for easy data display
* jsPDF for PDF exports (Thank you!)


## Premise

I was tasked with writing a full-stack web app as project for Web Development Bootcamp.
After 5 years of running various sailing teams, I identified the need for a simple web app to
manage the situation. Even if just for myself, I thought it would be a fun project to attempt.

## Known issues

* refreshing the bowser ends current session, forcing you to log in again.


## Future release roadmap:

* Local storage to persist information in the event of an accidental browser
refresh
* When editing an event, ability to add/change the crew members (before event date has past)
* Adding general boat info and populating PDF export with that information
* Integrating with a 3rd party API for digital document signing
* Sorting of tables
* Advanced 'crew-based' queries to see which crew members have sailed which event
* Ability for a single user to manage multiple boats/teams

## Planning information

### [Wireframes](https://imgur.com/YCF4qy8)
### [Wireframes] (https://imgur.com/e3UyOup)

### User Stories:

*	As a user, I want to create a new account (sign up)
*	As a user, I want to be able to log in
*	as a user, I want to add a new crew member
*	as a user, I want to update an existing crew member's details
*	as a user, I want to create a new event
*	as a user, I want to select people form the existing crew pool to populate the new event with
* as a user, I want to be able to edit an event
*	as a user, I want to export an event's crew list as a pdf
*	as a user, I want to log out
*	as a user, I want to change my password, only after logging in
