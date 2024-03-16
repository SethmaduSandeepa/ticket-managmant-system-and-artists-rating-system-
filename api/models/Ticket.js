const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({

    Date : {
        type: Number,
        require: true
    },
    time : {
        type: Number,
        require: true
    }


});

const Ticket = mongoose.model('Ticket', TicketSchema);
module.exports = Ticket; 