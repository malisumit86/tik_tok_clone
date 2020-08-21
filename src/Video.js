import React, { useRef, useState } from 'react'
import VideoFooter from "./VideoFooter"
import VideoSidebar from "./VideoSidebar"
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import "./Video.css"

function Video(
    { url, channel, description, song, likes, messages, shares, poster }
) {

    const [playing, setPlaying] = useState(false);


    const videoRef = useRef(null);
    const onVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }

    };
    return (
        <div className="video">

            {/* we can use this to play the video =>controls autoplay  */}
            <video
                className="video__player"
                loop
                preload="none"
                playsInline

                poster={poster}
                ref={videoRef}
                onClick={onVideoPress}
                src={url} type="video/mp4">
            </video>

            {/* pause and play button */}
            {playing ? null : <PlayArrowIcon fontSize="large" className="pauseButton" />}
            {/* video footer */}
            <VideoFooter channel={channel}
                description={description}
                song={song} />

            {/* video Sidebar */}
            <VideoSidebar likes={likes} messages={messages} shares={shares} />


        </div>
    )
}

export default Video
