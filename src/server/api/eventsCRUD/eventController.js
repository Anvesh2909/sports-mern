import express from "express";
import Event from "../../database/models/event.js";
import connectDB from "../../database/dbconfig.js";
connectDB();
const router = express.Router();
router.post('/create', async (req, res) => {
    try {
        const { title, description, imageUrl, startDateTime, isFree, price, category, organizer } = req.body;

        const newEvent = new Event({
            title,
            description,
            imageUrl,
            startDateTime,
            isFree,
            price,
            category,
            organizer,
        });

        await newEvent.save();
        res.status(201).json({ message: 'Event created successfully', event: newEvent });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error creating event', error });
    }
})
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const event = await Event.findByIdAndDelete(id);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.status(200).json({ message: 'Event deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting event', error });
    }
});
router.get('/search', async (req, res) => {
    const { search } = req.query; // Extract search query parameter

    try {
        let events;

        if (search) {
            // If a search query is provided, search events by title (case-insensitive)
            events = await Event.find({ title: { $regex: search, $options: 'i' } });
        } else {
            // If no search query, fetch all events
            events = await Event.find();
        }

        res.status(200).json({ events });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching events', error });
    }
});
export default router;