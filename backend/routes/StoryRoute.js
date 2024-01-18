import express from "express";
import {
    getStorys,
    getChapters,
    getStoryById,
    saveStory,
    updateStory,
    deleteStory
} from "../controllers/StoryController.js";
 
const router = express.Router();
 
router.get('/storys', getStorys);
router.get('/chapters', getChapters);
router.get('/storys/:id', getStoryById);
router.post('/storys', saveStory);
router.patch('/storys/:id', updateStory);
router.delete('/storys/:id', deleteStory);
 
export default router;