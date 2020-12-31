const express = require('express');

const Student = require('../models/student.model');
const validateIdStudent = require('../middlewares/validateIdStudent');
const {getStudentAll, getStudentById, createStudent, updateStudentById, deleteStudentById} = require('../controllers/student.controller');


const router = express.Router()

router.get('/', getStudentAll);

router.get('/:id', validateIdStudent, getStudentById);

router.post('/', createStudent);

router.put('/:id', validateIdStudent, updateStudentById);

router.delete('/:id', validateIdStudent, deleteStudentById);

module.exports = router;