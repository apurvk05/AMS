const express = require('express')
const router = express.Router()
const passport = require('passport')

const { adminLogin, addFaculty, addStudent,
    addSubject, getAllFaculty, getAllStudents, getAllSubjects, deleteFaculty, deleteStudent, deleteSubject,
    addAdmin, 
    getAllStudent,
    getAllSubject} = require('../controller/adminController')

router.post('/login', adminLogin)
router.post('/addAdmin', addAdmin )
router.post('/getAllFaculty', passport.authenticate('jwt', { session: false }),getAllFaculty)
router.post('/getAllStudent', passport.authenticate('jwt', { session: false }), getAllStudent)
router.post('/getAllSubject', passport.authenticate('jwt', { session: false }), getAllSubject)
router.post('/addFaculty', passport.authenticate('jwt', { session: false }), addFaculty)
router.get('/getFaculties', passport.authenticate('jwt', { session: false }), getAllFaculty)
router.post('/addStudent', passport.authenticate('jwt', { session: false }),addStudent)
router.get('/getStudents', passport.authenticate('jwt', { session: false }), getAllStudents)
router.post('/addSubject', passport.authenticate('jwt', { session: false }), addSubject)
router.get('/getSubjects', passport.authenticate('jwt', { session: false }),getAllSubjects)
router.post('/deleteFaculty', passport.authenticate('jwt', { session: false }), deleteFaculty) //added to delete faculty
router.post('/deleteStudent', passport.authenticate('jwt', { session: false }), deleteStudent)
router.post('/deleteSubject', passport.authenticate('jwt', { session: false }), deleteSubject)

module.exports = router