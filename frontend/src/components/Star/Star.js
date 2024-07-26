import { useReducer } from 'react';
import './Star.css';

function Star({ videoid }) {
    const session = JSON.parse(window.sessionStorage.getItem('react-youtube'));
    const liked = session.includes(videoid);
    const [likeToggle, setLikeToggle] = useReducer(
        (likeToggle) => {
            likeToggle = !likeToggle;
            if(likeToggle)
                session.push(videoid);
            else {
                let i = session.indexOf(videoid);
                session.splice(i, 1);
            }
            window.sessionStorage.setItem('react-youtube', JSON.stringify(session));
            return likeToggle;
        },
        liked
    );

    return (
        <>
            { !likeToggle ?  (
                <div className='star-icon' onClick={setLikeToggle}>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeWidth="2" d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"/>
                    </svg>
                </div>
            ) : (
                <div className='star-icon-active' onClick={setLikeToggle} data-testid='star-icon-active'>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
                    </svg>
                </div>
            )}
        </>
    );
}

export default Star;