const express= require('express')
const router= express.Router()

const { getComments, addComment }= require('../Contoller/commentController')


router.route("/:id/comments").get(getComments)
router.route("/:id/comments").post(addComment)

module.exports=router