const mongoose = require('mongoose');

const Student = mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    gender : {
        type : Number,
        require : true
    },
    bod : {
        type : Date,
        require : true
    },
    class : {
        type : String,
        require : true
    },
    groupId : {
        type: String,
        require : true
    }
});


module.exports = mongoose.model('Student', Student);


