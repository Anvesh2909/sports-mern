import mongoose from "mongoose";
const { Schema, model, models } = mongoose;
// Define the Event Schema
const eventSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        default: '/assets/default-event.jpg', // Default image if not provided
    },
    startDateTime: {
        type: Date,
        required: true,
    },
    isFree: {
        type: Boolean,
        default: false,
    },
    price: {
        type: Number,
        required: function() { return !this.isFree; }, // Price is required if event is not free
    },
    category: {
        type: String,
        required: true,
    },
    organizer: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

// Create Event model from schema
const Event =  models.Event || model('Event', eventSchema);
export default Event;