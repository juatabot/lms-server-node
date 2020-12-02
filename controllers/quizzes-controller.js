const quizzesService = require('../services/quizzes-service')
module.exports = function (app) {
  app.get('/api/quizzes', (req, res) =>
    quizzesService.findAllQuizzes()
      .then(allQuizzes => res.json(allQuizzes)))
  app.get('/api/quizzes/:qzid', (req, res) =>
    quizzesService.findQuizById(req.params['qzid'])
      .then(quiz => res.json(quiz)))
  app.get('/api/course/:cid/quizzes', (req, res) =>
    quizzesService.findQuizzesForcourse(req.params['cid'])
      .then(quizzes => res.json(quizzes)))
}
