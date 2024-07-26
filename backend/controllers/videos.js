import Video from '../models/video.js';

const getVideos = async (req, res) => {
    try {
        const videos = await Video.find({});
        
        res.status(200).json(videos);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const getVideo = async (req, res) => {    
    try {
        const id = req.params.id;
        const video = await Video.find({videoid: id});

        if (!video) res.status(404).send({ message: "No video found with id " + id });

        res.status(200).json(video[0]);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const VideoController =  {
    getVideos,
    getVideo
};

export default VideoController;
