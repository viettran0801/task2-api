const Student = require('../models/student.model');

const getStudentAll = async (req, res) => {
    try {
        res.json(await Student.find({
            groupId : req.query.groupId
        }));
    }
    catch (err) {
        res.status(400).json({err : err.message})
    }
}

const getStudentById = async (req, res) => {
    try {
        res.json(req.student);
    }
    catch (err) {
        res.status(400).json({err : err.message})
    }
}

const createStudent = async (req, res) => {
    try {
        const student = new Student({
            name : req.body.name,
            gender : req.body.gender,
            bod : new Date(req.body.year, req.body.month, req.body.day),
            class : req.body.class,
            groupId : req.query.groupId
        })
        res.json(await student.save());
    }
    catch (err) {
        res.status(400).json({err : err.message})
    }
}

const updateStudentById = async (req, res) => {
    try {
        const student = req.student;
        student.name = req.body.name;
        student.gender = req.body.gender;
        student.bod = new Date(req.body.year, req.body.month, req.body.day);
        student.class = req.body.class;
        student.groupId = req.query.groupId;
        res.json(await student.save());
    }
    catch (err) {
        res.status(400).json({err : err.message});
    }
}

const deleteStudentById = async (req, res) => {
    try {
        await req.student.remove();
        res.json({message : 'Delete successful'});
    }
    catch (err) {
        res.status(400).json({err : err.message});
    }
}

module.exports = {
    getStudentAll,
    getStudentById,
    createStudent,
    updateStudentById,
    deleteStudentById
}