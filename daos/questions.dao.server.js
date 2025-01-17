const questionsModel = require('../models/questions/questions.models.server')
const quizzesModel = require('../models/quizzes/quizzes.models.server')

const findAllQuestions = () => questionsModel.find()
const findQuestionById = (qid) => questionsModel.findById(qid)
// const findQuestionsForQuiz = (qzid) => quizzesModel.findById(qzid)
//     .populate('questions').then(quiz => quiz.questions)
const findQuestionsForQuiz = (qzid) => questionsModel.find({ "quizId": qzid });
module.exports = { findAllQuestions, findQuestionById, findQuestionsForQuiz }