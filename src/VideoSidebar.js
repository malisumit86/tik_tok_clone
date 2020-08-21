import React, { useState } from 'react'
import "./VideoSidebar.css"
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';

function VideoSidebar({ likes, shares, messages }) {

    const [Liked, setLiked] = useState(false)


    return (
        <div className="videoSidebar">
            <div className="videoSidebar__button">
                {
                    Liked ?
                        <FavoriteIcon
                            fontSize="medium"
                            onClick={
                                (e) => {
                                    setLiked(false)
                                }} /> :
                        <FavoriteBorderIcon fontSize="medium"
                            onClick={
                                (e) => {
                                    setLiked(true)
                                }} />
                }
                <p>{Liked ? likes + 1 : likes}</p>
            </div>
            <div className="videoSidebar__button">

                <ChatBubbleOutlineIcon fontSize="medium" />
                <p>{messages}</p>
            </div>
            <div className="videoSidebar__button">

                <ShareIcon fontSize="medium" />
                <p>{shares}</p>
            </div>

        </div>
    )
}

export default VideoSidebar
