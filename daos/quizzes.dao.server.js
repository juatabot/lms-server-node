const quizzesModel = require('../models/quizzes/quizzes.models.server')
const findAllQuizzes = () => quizzesModel.find()
const findQuizById = (quizId) => quizzesModel.findById(quizId)
const findQuizzesForcourse = (cid) => quizzesModel.find({ "courseId": cid });
module.exports = { findAllQuizzes, findQuizById, findQuizzesForcourse }