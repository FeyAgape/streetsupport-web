// Common modules
import './common'
var ko = require('knockout')
var Model = require('./models/SponsorModel')
var location = require('./location/locationSelector')
const templating = require('./template-render')

location
  .getCurrent()
  .then((result) => {
    let theData = {
      isManchester: result.id === 'manchester',
      isLeeds: result.id === 'leeds',
    }

    let callback = () => {
      console.log('callback')
      ko.applyBindings(new Model())
    }

    console.log(theData)

    templating.renderTemplate('js-content-tpl', theData, 'js-template-output', callback)
  })
