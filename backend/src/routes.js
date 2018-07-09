const AllEventsController = require('./controllers/AllEventsController')

module.exports = (app) => {
    app.get('/:userId/update/all-events',
      AllEventsController.getUpdates)
  }