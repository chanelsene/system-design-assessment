import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

import videoRoutes from './routes/videos.js'

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded());

app.use(cors());

app.get('/', (req, res) => {
    res.send('Server up and running');
  }
);

app.use('/videos', videoRoutes)

const CONNECTION_URL = 'mongodb+srv://utilizer:utilizer4202@acluster.rfu3erw.mongodb.net/youtube?retryWrites=true&w=majority&appName=ACluster';
const PORT = process.env.port || 8000;

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch(error => console.log(error.message));