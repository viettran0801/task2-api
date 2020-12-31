const Student = require('../models/student.model');

const validateIdStudent = async (req, res, next) => {
    try {
        const student = await Student.findOne({
            _id : req.params.id,
            groupId : req.query.groupId
        });
        if(student) {
            req.student = student;
            next();
        }
        else {
            res.status(400).json({err : 'No such element'});
        }

    }
    catch (err) {
        res.status(400).json({err : err.message});
    }
}

module.exports = validateIdStudent;