const express = require('express')
const router = express.Router();
const authenticatetoken = require('../authenticate/auth1')
const {addComment,upvote,downvote,printComments} = require('../controllers/commentC')


router.post("/addcomment",authenticatetoken,addComment)
router.post('/upvote/:id',authenticatetoken,upvote)
router.post('/downvote/:id',authenticatetoken,downvote)
router.get("/display",authenticatetoken,printComments)

module.exports = router;