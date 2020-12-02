const quizzesDao = require('../daos/quizzes.dao.server')
const findAllQuizzes = () => quizzesDao.findAllQuizzes()
const findQuizById = (qid) => quizzesDao.findQuizById(qid)
const findQuizzesForcourse = (cid) => quizzesDao.findQuizzesForcourse(cid);
module.exports = { findAllQuizzes, findQuizById, findQuizzesForcourse }