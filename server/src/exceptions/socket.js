const mongoose = require("mongoose")
const EventsModel = mongoose.model("events")
const eventsConstants = require("../constants/events")
const socketConstants = require("../constants/socket")

function handleSocketException({socket, err}){
    const event = new EventsModel({
        kind: eventsConstants.ERROR,
        uid: socket.id,
        ppid: process.ppid,
        description: err.message,
    });
    await event.save();
    socket.emit(socketConstants.ERROR, {message: err.message});
}

module.exports={
    handleSocketException
}