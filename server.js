const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const studentRoute = require('./api/student/routes/student.route');

const app = express()
const PORT = process.env.PORT || 8888;

mongoose.connect(process.env.DB_CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if(err) return console.log(err);
    console.log('database connected');
});

app.use(cors());
app.use(bodyParser.json());
app.use('/api/v1/student', studentRoute);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


