const mongoose = require('mongoose');
const { mongo: { uri, dbname } } = require('../config');

module.exports = async () => {
    await mongoose.connect(`${uri}/${dbname}`);

    const todoSchema = new mongoose.Schema({
        description: {
            type: String,
            required: true
        },
        isCompleted: {
            type: Boolean,
            required: true
        }
    })

    return {
        todo: mongoose.model('Todos', todoSchema)
    };
};
