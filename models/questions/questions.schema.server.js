const mongoose = require('mongoose')
const questionsSchema = mongoose.Schema({
    question: String,
    type: String,
    answer: String,
    quizId: String
}, { collection: 'questions' })
module.exports = questionsSchema