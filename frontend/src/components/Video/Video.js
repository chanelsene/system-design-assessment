import { Link } from 'react-router-dom';
import './Video.css';
import Star from '../Star/Star';

function Video({ title, videoid, thumbnail }) {
    return (
        <div className='video'>
            <div className='video-info'>
                <Link to={`/video/${videoid}`}>
                    <img className='video-img' src={thumbnail} alt='Video Thumbnail'/>
                </Link>
                <Link to={`/video/${videoid}`}>
                    <h3 className='video-title'>
                        {title ? title : 'Video title'}
                    </h3>
                </Link>
            </div>
            <Star videoid={videoid}/>  
        </div>
    );
}

export default Video;