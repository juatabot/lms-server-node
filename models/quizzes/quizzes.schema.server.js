const mongoose = require('mongoose')
const quizzesSchema = mongoose.Schema({
    title: String,
    course: String,
}, { collection: 'quizzes' })
module.exports = quizzesSchema