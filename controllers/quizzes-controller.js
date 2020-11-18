
const quizzesService = require("../services/quizzes-service")

module.exports = (app) => {

  const findAllQuizzes = (req, res) =>
    res.send(quizzesService.findAllQuizzes())

  const findQuizById = (req, res) =>
    res.send(quizzesService.findQuizById(req.params['qid']))

  const deleteQuiz = (req, res) =>
    res.send(quizzesService.deleteQuiz(req.params['qid']))

  const createQuiz = (req, res) =>
    res.send(quizzesService.createQuiz())

  const findAllQuizzesForCourse = (req, res) =>
    res.send(quizzesService.findAllQuizzesForCourse(req.params['courseId']))

  app.get("/api/quizzes", findAllQuizzes)
  app.get("/api/quizzes/:qid", findQuizById)
  app.delete("/api/quizzes/:qid", deleteQuiz)
  app.post("/api/quizzes", createQuiz)
  app.get("/api/course/:courseId/quizzes", findAllQuizzesForCourse)
}
