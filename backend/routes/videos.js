import express from 'express';

import videoController from '../controllers/videos.js';

const router = express.Router();

router.get('/', videoController.getVideos);
router.get('/:id', videoController.getVideo);

export default router;